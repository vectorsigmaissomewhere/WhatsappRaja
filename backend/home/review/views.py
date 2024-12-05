from django.shortcuts import render
from rest_framework.response import Response 
from whatgroup.models import WReview, Wgroup 
from rest_framework import viewsets 
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from account.renderers import UserRenderer
from rest_framework import status
from whatgroup.serializers import WGroupReviewSerializer
from rest_framework.decorators import api_view, permission_classes
from django.db.models import Sum
import json

# Create your views here.

class WReviewModelViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    def list(self, request):
        review = WReview.objects.all()
        serializer = WGroupReviewSerializer(review, many=True)
        print(serializer.data)
        print(allreview)
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
        allreview = WReview.objects.filter(wgroup=id)
        print(f"Trying to get all the reviews {allreview}")
        serializer = WGroupReviewSerializer(allreview, many=True)
        return Response(serializer.data)


# calculating the average review of a group 
@api_view(['GET'])
@permission_classes([AllowAny]) 
def averagereviewget(request, pk):
    if request.method == 'GET':
        id = pk 
        allreview = WReview.objects.filter(wgroup=id)
        totalsum = allreview.aggregate(total_rating=Sum('rating'))['total_rating']
        totalreview = len(allreview)
        print(totalsum)
        print(len(allreview))
        print(f"average review is {round(totalsum/totalreview)}")
        averagereview = round(totalsum/totalreview)
        return Response({"average_rating": averagereview, "total_reviews": totalreview})