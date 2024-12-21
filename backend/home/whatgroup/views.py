from .models import Wgroup, WReview
from .serializers import WGroupSerializer, WGroupReviewSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from account.renderers import UserRenderer
from rest_framework import status
# using GenericAPIView and ListModelMixin
from rest_framework.generics import ListAPIView
from rest_framework.mixins import ListModelMixin 
from .serializers import CategorySerializer
from .serializers import LanguageSerializer
from rest_framework.renderers import JSONRenderer 
from django.http import HttpResponse
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import AllowAny
from collections import Counter

# This viewset is for public like everyone can retrieve data, list data, create data 
class WGroupModelViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    def list(self, request):
        group = Wgroup.objects.all()
        serializer = WGroupSerializer(group, many=True)
        print(serializer.data)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        permission_classes = [AllowAny]
        id = pk 
        group = Wgroup.objects.get(group_id=id)
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
    
    # as not every one can update the group 
    """
    def update(self, request, pk):
        renderer_classes = [UserRenderer]
        permission_classes = [IsAuthenticated]
        group = WGroup.objects.get(id=pk)
        serializer = WGroupSerializer(group, data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response({'msg':'Group has been updated'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'error':f"An error occured while updating the group: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    """


class CategoryViewSet(ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    querysetlist = [{"category": v} for k, v in Wgroup.WHATSAPP_GROUP_CATEGORIES]
    print(querysetlist)
    def get_queryset(self):
        return self.querysetlist
    serializer_class = CategorySerializer

class TagViewSet(ReadOnlyModelViewSet):
    permission_classes = [AllowAny]

    def get_queryset(self):
        tag_strings = Wgroup.objects.values_list('tags', flat=True)
        return tag_strings

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        all_tags = []
        for tag_string in queryset:
            if tag_string:
                all_tags.extend(tag.strip() for tag in tag_string.split(','))
        tag_counts = Counter(all_tags)
        most_common_tags = tag_counts.most_common(60)
        tags = [tag for tag, count in most_common_tags]
        return Response({'most_common_tags': tags})
    


class LanguageViewSet(ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    querysetlist = [{"language": v} for k, v in Wgroup.LANGUAGE_CHOICES]
    print(querysetlist)
    def get_queryset(self):
        return self.querysetlist
    serializer_class = LanguageSerializer 

class WGroupModelReviewViewSet(viewsets.ModelViewSet):
    queryset = WReview.objects.all()
    serializer_class = WGroupReviewSerializer


