from django.contrib import admin
from django.urls import path, include
from whatgroup import views
from privategroup.views import PGroupModelViewSet
from rest_framework.routers import DefaultRouter

# creating router for whatgroup
router = DefaultRouter()
router.register('wgroupapi', views.WGroupModelViewSet, basename='wgroup')

# creating router for giving review 
reviewrouter = DefaultRouter()
reviewrouter.register('wgroupreviewapi', views.WGroupModelReviewViewSet, basename='wgroupreviewapi'
)

# creating router for privategroup views 
privategrouprouter = DefaultRouter()
privategrouprouter.register('pgroupapi', PGroupModelViewSet, basename='pgroup')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('account.urls')),
    path('', include(router.urls)),
    path('', include(reviewrouter.urls)),
    path('', include(privategrouprouter.urls)),
]