from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import UserRegistrationSerializer, UserLoginSerializer, UserProfileSerializer, UserChangePasswordSerializer, SendPasswordResetEmailSerializer, UserPasswordResetSerializer
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken # generate token
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny


# Generate Token Manually
def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
    
# In-Memory Email Storage
class StoreEmail:
    def __init__(self):
        self.stored_emails = []

    def store(self, email):
        self.stored_emails.append(email)
        print(f"Stored email: {email}")

    def get_last_email(self):
        if self.stored_emails:
            return self.stored_emails[-1] 
        return None


# Instance to store emails
store_email_instance = StoreEmail()


class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer] # will show the error that your have provided
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_token_for_user(user)
            return Response({'token':token, 'msg':'Registration Successful'},status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserLoginView(APIView):
    renderer_classes = [UserRenderer] # will show the error that your have provided
    permission_classes = [AllowAny]
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email=email, password=password)
            if user is not None:
                token = get_token_for_user(user)
                print(f"This is the stored email: {store_email_instance.get_last_email}")
                print(user.email)
                store_email_instance.store(email) 
                return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
            else:
                return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def post(self,request, format=None):
        serializer = UserChangePasswordSerializer(data=request.data,context={'user':request.user})
        if serializer.is_valid(raise_exception=True):
            return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
# send email to user for password change
class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            return Response({'msg':'Password Reset link send. Please check your Email'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# update the password now
class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, uid, token, format=None):
        serializer = UserPasswordResetSerializer(data=request.data, context={'uid':uid, 'token': token})
        if serializer.is_valid(raise_exception=True):
            return Response({'msg':'Password Reset Successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Testing to send email 
"""
# Trying to send the email 
from django.core.mail import BadHeaderError, EmailMessage
from django.http import HttpResponse
from django.conf import settings

def canwesend(request):
    subject = request.POST.get("subject", "This is the subject")
    message = request.POST.get("message", "Sending message")
    from_email = settings.EMAIL_HOST_USER  # Use the email from settings
    user_email = request.POST.get("from_email", "anishbro501625@gmail.com")  # The user's email address

    if subject and message and user_email:
        try:
            # You can include the user's email in the message or as a reply-to header
            full_message = f"Message: {message}\n\nFrom: {user_email}"

            # Create the email object and include the Reply-To header
            email = EmailMessage(
                subject,
                full_message,
                from_email,  # The email you are authenticated with
                ["anishbroo@gmail.com"],  # The recipient email
                headers={'Reply-To': user_email}  # Set Reply-To to user's email
            )

            # Send the email
            email.send(fail_silently=False)
        except BadHeaderError:
            return HttpResponse("Invalid header found.")
        return HttpResponse("Great")
    else:
        return HttpResponse("Make sure all fields are entered and valid.")
"""


    