from .models import Wgroup, WReview
from .serializers import WGroupSerializer, WGroupReviewSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from account.renderers import UserRenderer
from rest_framework import status


class WGroupModelViewSet(viewsets.ViewSet):
    def list(self, request):
        group = Wgroup.objects.all()
        serializer = WGroupSerializer(group, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        id = pk 
        group = Wgroup.objects.get(id=id)
        serializer = WGroupSerializer(group)
        return Response(serializer.data)
    
    def create(self, request):
        renderer_classes = [UserRenderer]
        permission_classes = [IsAuthenticated]
        serializer = WGroupSerializer(data = request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response({'msg':'Group has been added'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'error':f"An error occured while saving the group: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class WGroupModelReviewViewSet(viewsets.ModelViewSet):
    queryset = WReview.objects.all()
    serializer_class = WGroupReviewSerializer


