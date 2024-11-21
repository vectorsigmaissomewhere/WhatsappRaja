from whatgroup.models import Wgroup
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from account.renderers import UserRenderer
from rest_framework import status
from .serializers import PGroupSerializer 
from account.views import store_email_instance 
from account.models import User
from rest_framework.generics import RetrieveUpdateDestroyAPIView


# It is checking for email and I am sending user id
class PGroupModelViewSet(viewsets.ViewSet):
    def list(self, request):
        #stored_email = store_email_instance.stored_emails  
        stored_email = store_email_instance.get_last_email()
        print(f"Stored email is {stored_email}")
        #stored_email = "mbappe@gmail.com"
        user = User.objects.filter(email=stored_email).first()
        if not user:
            return Response({"error": "User not found for the provided email"}, status=404)
        group = Wgroup.objects.filter(user=user) 
        print(group)
        serializer = PGroupSerializer(group, many=True)
        print(stored_email)
        return Response(serializer.data)

"""
class PGroupModelViewSet(RetrieveUpdateDestroyAPIView):
    serializer_class = PGroupSerializer
    queryset = Wgroup.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
"""
