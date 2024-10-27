from django.contrib import admin
from django.urls import path, include
from whatgroup import views 
from rest_framework.routers import DefaultRouter

# creating router for whatgroup
router = DefaultRouter()
router.register('wgroupapi', views.WGroupModelViewSet, basename='wgroup')

# creaing router for giving review 
reviewrouter = DefaultRouter()
reviewrouter.register('wgroupreviewapi', views.WGroupModelReviewViewSet, basename='wgroupreviewapi')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('account.urls')),
    path('', include(router.urls)),
    path('', include(reviewrouter.urls))
]