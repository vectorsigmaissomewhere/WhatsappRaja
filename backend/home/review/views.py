from django.shortcuts import render
from rest_framework.response import Response 
from whatgroup.models import WReview, Wgroup 
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
    
    # this retrieval is like you must have to send the wgroup_id, and you be able to retrieve the entire review 
    # we can create a new class but don't want to 
    def retrieve(self,request, pk=None):
        permission_classes = [AllowAny]
        id = pk 
        allreview = WReview.objects.filter(wgroup__id=id)
        print(f"Trying to get all the reviews {allreview}")
        serializer = WGroupReviewSerializer(allreview, many=True)
        return Response(serializer.data)

