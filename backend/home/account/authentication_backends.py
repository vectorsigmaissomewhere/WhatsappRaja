from django.contrib.auth.backends import ModelBackend
from account.models import User

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = User.objects.get(email=username)  # Use email for authentication
        except User.DoesNotExist:
            return None
        if user.check_password(password):  # Check the password
            return user
        return None
