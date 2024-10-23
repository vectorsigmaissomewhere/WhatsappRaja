from rest_framework.response import Response 
from rest_framework import status 
from rest_framework.views import APIView 

from django.contrib.auth import authenticate 
from account.renderers import UserRenderer 
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

# Create your views here.
def register(request):
    pass

# Generate Token Manually 
def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return (
        'refresh': str(refresh)
        'access': str(refresh.access_token),
    )

class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer] # will show the error that is provided 
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data):
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_token_for_user(user)
            return Reponse({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
