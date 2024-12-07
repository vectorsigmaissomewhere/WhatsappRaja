from django.shortcuts import render
from rest_framework.response import Response 
from whatgroup.models import Wgroup 

from rest_framework import status 
from rest_framework.views import APIView 
from rest_framework.permissions import AllowAny
from elasticsearch_dsl.query import MultiMatch
from .documents import GroupDocument
from .serializers import GroupSearchSerializer

# Create your views here.

class GroupSearchAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        q = request.data.get('query', None)
        if q:
            query = MultiMatch(query=q, fields=["group_name", "language", "category", "tags", "description"], fuzziness="auto")
            s = GroupDocument.search().query(query)
            results = s.execute()
            groups = []
            for hit in results:
                groups.append({
                    "group_name": hit.group_name,
                    "group_id":hit.group_id,
                    "language": hit.language,
                    "category": hit.category,
                    "tags": hit.tags,
                    "description": hit.description,
                    "nsfw": hit.nsfw,
                    "whatsapplink": hit.whatsapplink,
                    "group_image": hit.group_image,
                    "qr_code": hit.qr_code,
                    "created_at": hit.created_at,
                    "updated_at": hit.updated_at,
                })

            if groups:
                return Response(groups, status=status.HTTP_200_OK)

        return Response({"msg": "No data found from this query"}, status=status.HTTP_404_NOT_FOUND)