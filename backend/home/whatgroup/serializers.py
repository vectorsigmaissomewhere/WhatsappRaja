from rest_framework import serializers
from .models import Wgroup, WReview

class WGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wgroup
        fields = ['user', 'group_name', 'language', 'category', 'tags', 'nsfw', 'description','group_image', 'qr_code', 'whatsapplink', 'created_at', 'updated_at']
    
    # Custom validation for tags field
    def validate_tags(self, value):
        tag_list = [tag.strip() for tag in value.split(",")]
        if len(tag_list) > 5:
            raise serializers.ValidationError("You cannot add more than 5 tags.")
        if len(value) > 200:
            raise serializers.ValidationError("Tags cannot exceed 200 characters in total.")
        
        return value
    
class WGroupReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = WReview
        fields = ['user', 'wgroup','rating','comment_text','created_at']
    
    # Custom validation for rating value
    def validate_rating(self, value):
        if value > 5 or value < 0:
            raise serializers.ValidationError("Rating must be between 0 and 5.")
        return value

class CategorySerializer(serializers.Serializer):
    category = serializers.CharField(max_length=50)

class LanguageSerializer(serializers.Serializer):
    language = serializers.CharField(max_length=50)

