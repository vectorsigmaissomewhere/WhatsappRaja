from rest_framework import serializers 
from whatgroup.models import Wgroup 

class GroupSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wgroup 
        fields = '__all__'

class CategorySearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wgroup 
        fields = ['user', 'group_id','group_name', 'language', 'category', 'tags', 'nsfw', 'description','group_image', 'qr_code', 'whatsapplink', 'created_at', 'updated_at']

class TagSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wgroup 
        fields = ['user', 'group_id','group_name', 'language', 'category', 'tags', 'nsfw', 'description','group_image', 'qr_code', 'whatsapplink', 'created_at', 'updated_at']