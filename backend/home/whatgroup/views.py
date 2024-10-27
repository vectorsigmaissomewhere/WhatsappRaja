from .models import Wgroup, WReview
from .serializers import WGroupSerializer, WGroupReviewSerializer
from rest_framework import viewsets 

class WGroupModelViewSet(viewsets.ModelViewSet):
    queryset = Wgroup.objects.all()
    serializer_class = WGroupSerializer 

class WGroupModelReviewViewSet(viewsets.ModelViewSet):
    queryset = WReview.objects.all()
    serializer_class = WGroupReviewSerializer


