from django_elasticsearch_dsl import Document
from django_elasticsearch_dsl.registries import registry 
from whatgroup.models import Wgroup 

@registry.register_document
class GroupDocument(Document):
    class Index:
        name = "groups"
        settings = {"number_of_shards":1, "number_of_replicas":0}
    
    class Django:
        model = Wgroup
        fields = ['group_id','group_name', 'language', 'category', 'tags', 'nsfw', 'description','group_image', 'qr_code', 'whatsapplink', 'created_at', 'updated_at']
