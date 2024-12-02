from django.shortcuts import render
from rest_framework.response import Response 
from whatgroup.models import WReview
from rest_framework import viewsets 
from rest_framework.permissions import AllowAny
from account.renderers import UserRenderer
from rest_framework import status
from whatgroup.serializers import WGroupReviewSerializer
# Create your views here.

class WReviewModelViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    def list(self, request):
        review = WReview.objects.all()
        serializer = WGroupReviewSerializer(review, many=True)
        print(serializer.data)
        return Response(serializer.data)
    
    def create(self, request):
        renderer_classes = [UserRenderer]
        permission_classes = [IsAuthenticated]
        serializer = WGroupReviewSerializer(data = request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response({'msg':'Review has been added'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'error':f'An error occured while saving the group: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
