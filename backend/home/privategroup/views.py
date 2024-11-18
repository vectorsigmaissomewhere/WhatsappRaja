from whatgroup.models import Wgroup
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from account.renderers import UserRenderer
from rest_framework import status
from .serializers import PGroupSerializer 

class PGroupModelViewSet(viewsets.ViewSet):
    def list(self, request):
        group = Wgroup.objects.all()
        serializer = PGroupSerializer(group, many=True)
        return Response(serializer.data)
