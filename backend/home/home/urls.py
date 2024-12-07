from django.contrib import admin
from django.urls import path, include
from whatgroup import views
from privategroup.views import PGroupModelViewSet
from Test.views import TestDetailView
from rest_framework.routers import DefaultRouter
from whatgroup.views import CategoryViewSet
from whatgroup.views import LanguageViewSet
from review.views import WReviewModelViewSet
from review.views import averagereviewget
from search.views import GroupSearchAPI

# for testing purposes 
from Test.views import getallreviews

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

# creating router for category which is in whatgroup 
categoryrouter = DefaultRouter()
categoryrouter.register('categorylistapi', CategoryViewSet, basename='categorylistapi')

# creating router for language which is in whatgroup 
languagerouter = DefaultRouter()
languagerouter.register('languagelistapi', LanguageViewSet, basename='languagelistapi')

# creating router for review 
reviewlistrouter = DefaultRouter()
reviewlistrouter.register('reviewdetailapi', WReviewModelViewSet, basename='reviewdetailapi')

# creating router for search 
groupsearchrouter = DefaultRouter() 
groupsearchrouter.register('search', GroupSearchAPI, basename='search')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('account.urls')),
    path('', include(router.urls)),
    path('', include(reviewrouter.urls)),
    path('', include(privategrouprouter.urls)),
    path('', include(categoryrouter.urls)),
    path('', include(languagerouter.urls)),
    path('', include(reviewlistrouter.urls)),
    # Test url 
    path('testgroupapi/<int:pk>/', TestDetailView.as_view(), name='testgroup-detail'),
    path('getit/', getallreviews, name='getit'),
    path('checkreview/<int:pk>/', averagereviewget, name='checkreview'),
    path('search/', GroupSearchAPI.as_view(), name='search'),
]