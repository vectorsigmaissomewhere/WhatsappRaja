from rest_framework import serializers
from whatgroup.models import Wgroup, WReview

class PGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wgroup
        fields = ['user','group_id','group_name', 'language', 'category', 'tags', 'nsfw', 'description', 'qr_code', 'whatsapplink', 'created_at', 'updated_at']
    
    # Custom validation for tags field
    def validate_tags(self, value):
        tag_list = [tag.strip() for tag in value.split(",")]
        if len(tag_list) > 5:
            raise serializers.ValidationError("You cannot add more than 5 tags.")
        if len(value) > 200:
            raise serializers.ValidationError("Tags cannot exceed 200 characters in total.")
        
        return value