from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.core.exceptions import ValidationError 
from django.contrib.auth import get_user_model 

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, password2=None):
        if not email:
            raise ValueError("User must have an email address")
        user = self.model(
            # normalize_email function lowers the domain portion of the email
            email = self.normalize_email(email) 
        )
        # set_password function creates a hashed password
        user.set_password(password)
        user.save(using=self._db)
        return user 

    # create superuser function is same as create_user function but is_staff and is_superuser to True i.e create and saves superuser
    def create_superuser(self, email, password=None):
        user = self.create_user(
            email, 
            password = password
        )
        user.is_admin = True 
        user.save(using=self._db)
        return user 

# Custom User Model 
# AbstractBaseUser helps to contruct a custom user model 
# provides all the necessary functions to create a custom user 
class User(AbstractBaseUser):
    email = models.EmailField(
        # verbose_name means field name set to Email 
        verbose_name = "Email",
        max_length=255,
        unique=True,
    )
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    
    def __str__(self):
        return self.email 
    
    # if the user is inactive, this method will always return False, for an active superuser, this method will always return True 
    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True
    