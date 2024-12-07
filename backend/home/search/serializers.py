from rest_framework import serializers 
from whatgroup.models import Wgroup 

class GroupSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wgroup 
        fields = '__all__'
