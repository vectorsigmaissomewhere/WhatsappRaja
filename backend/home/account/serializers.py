from rest_framework import serializers
from account.models import User
from xml.dom import ValidationErr
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
# from utils import Util

# sending email 
from django.core.mail import BadHeaderError, EmailMessage
from django.http import HttpResponse
from django.conf import settings

class UserRegistrationSerializer(serializers.ModelSerializer):
    # We are writing this because we need  confirm password field is in our Registration Request
    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['email','password','password2',]
        extra_kwargs = {
            'password':{'write_only':True}
        }
    
    # Validating Password and Confirm Password while Registration
    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError("Password and Confirm Password doesn't match")
        return attrs
    
    def create(self, validate_data):
        return User.objects.create_user(**validate_data)
    

class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        model = User
        fields = ['email', 'password']

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email',]
    
class UserChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    class Meta:
        fields = ['password','password2']
    
    def validate(self,attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        user = self.context.get('user')
        if password != password2:
            raise serializers.ValidationError("Password and Confirm Password doesn't match")
        user.set_password(password)
        user.save()
        return attrs

# send email to user
class SendPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    
    class Meta:
        fields = ['email']
    
    def validate(self, attrs):
        email = attrs.get('email')
        
        # Check if the email exists in the User model
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            
            # Generate the encoded user ID and password reset token
            uid = urlsafe_base64_encode(force_bytes(user.id))  # Encodes the user ID
            token = PasswordResetTokenGenerator().make_token(user)  # Generates a reset token
            
            # Generate the reset password link
            link = f'http://localhost:8000/api/user/reset-password/{uid}/{token}'
            
            # Preparing the email content
            subject = "Reset Password Link"
            message = link
            from_email = settings.EMAIL_HOST_USER  # Email from settings
            to_email = 'anishbroo501625@gmail.com'  # Sending the email to the user

            try:
                # Create and send the email
                email = EmailMessage(
                    subject,
                    message,
                    from_email,
                    [to_email],  # Send to user's email
                )
                email.send(fail_silently=False)
            except BadHeaderError:
                return HttpResponse("Invalid header found.")
            
            return HttpResponse("Password reset email sent successfully.")
        
        else:
            raise serializers.ValidationError("You are not a registered user.")
        
        return attrs
        
# Creating serializer for UserPasswordResetSerializer
class UserPasswordResetSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    class Meta:
        fields = ['password','password2']
    
    def validate(self,attrs):
        try:
            password = attrs.get('password')
            password2 = attrs.get('password2')
            uid = self.context.get('uid')
            token = self.context.get('token')
            if password != password2:
                raise serializers.ValidationError("Password and Confirm Password doesn't match")
            id = smart_str(urlsafe_base64_decode(uid)) # smart_str converts into string
            user = User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise ValidationErr('Token is not Valid or Expired')
            user.set_password(password)
            user.save()
            return attrs
        except DjangoUnicodeDecodeError as identifier:
            PasswordResetTokenGenerator().check_token(user, token)
            raise ValidationErr('Token is not Valid or Expired')