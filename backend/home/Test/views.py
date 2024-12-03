from whatgroup.models import Wgroup
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from account.renderers import UserRenderer
from rest_framework import status
from account.views import store_email_instance 
from account.models import User
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from whatgroup.models import Wgroup
from rest_framework import generics, permissions
from rest_framework.exceptions import PermissionDenied
from .serializers import TestSerializer

# testing for reviews 
from rest_framework.response import Response 
from whatgroup.models import WReview, Wgroup

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of a blog to edit or delete it.
    """
    def has_object_permission(self, request, view, obj):
        # Allow read-only permissions for any request
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the blog
        return obj.owner == request.user

class TestDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update, or delete a blog post. Restricted to the owner for update/delete.
    """
    queryset = Wgroup.objects.all()
    serializer_class = TestSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
 
    def perform_update(self, serializer):
        if self.request.user != self.get_object().owner:
            raise PermissionDenied("You do not have permission to edit this blog.")
        serializer.save()

    def perform_destroy(self, instance):
        if self.request.user != instance.owner:
            raise PermissionDenied("You do not have permission to delete this blog.")
        instance.delete()

def getallreviews(request):
    allreview = WReview.objects.filter(wgroup__id=1)
    print(allreview)
    return response("check it")