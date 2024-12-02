from django.db import models
from django.core.exceptions import ValidationError 
from django.contrib.auth import get_user_model 
from account.models import User 
from django.utils import timezone
import uuid 

# Whatsapp Group 
class Wgroup(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group_id = models.BigAutoField(primary_key=True)
    group_name = models.CharField(max_length=70) 
    LANGUAGE_CHOICES = [
        ('Akan', 'Akan'),
        ('Albanian', 'Albanian'),
        ('Alemannic', 'Alemannic'),
        ('Amharic', 'Amharic'),
        ('Antiguan Creole', 'Antiguan Creole'),
        ('Arabic', 'Arabic'),
        ('Armenian', 'Armenian'),
        ('Azerbaijani', 'Azerbaijani'),
        ('Bajan Creole', 'Bajan Creole'),
        ('Bambara', 'Bambara'),
        ('Bemba', 'Bemba'),
        ('Bengali', 'Bengali'),
        ('Berber', 'Berber'),
        ('Bislama', 'Bislama'),
        ('Bosnian', 'Bosnian'),
        ('Bulgarian', 'Bulgarian'),
        ('Burmese', 'Burmese'),
        ('Catalan', 'Catalan'),
        ('Chichewa', 'Chichewa'),
        ('Chittagonian', 'Chittagonian'),
        ('Chuukese', 'Chuukese'),
        ('Comorian', 'Comorian'),
        ('Croatian', 'Croatian'),
        ('Czech', 'Czech'),
        ('Dari', 'Dari'),
        ('Dhivehi', 'Dhivehi'),
        ('Dioula', 'Dioula'),
        ('Dzongkha', 'Dzongkha'),
        ('English', 'English'),
        ('Ewe', 'Ewe'),
        ('Fijian', 'Fijian'),
        ('Filipino', 'Filipino'),
        ('Finnish', 'Finnish'),
        ('Fon', 'Fon'),
        ('Forro', 'Forro'),
        ('French', 'French'),
        ('Frisian', 'Frisian'),
        ('Gaelic (Irish)', 'Gaelic (Irish)'),
        ('Garifuna', 'Garifuna'),
        ('Georgian', 'Georgian'),
        ('Gilbertese', 'Gilbertese'),
        ('Greek', 'Greek'),
        ('Grenadian Creole', 'Grenadian Creole'),
        ('Haitian Creole', 'Haitian Creole'),
        ('Hausa', 'Hausa'),
        ('Hebrew', 'Hebrew'),
        ('Hindi', 'Hindi'),
        ('Hungarian', 'Hungarian'),
        ('Icelandic', 'Icelandic'),
        ('Indonesian', 'Indonesian'),
        ('Irish', 'Irish'),
        ('Isan', 'Isan'),
        ('Italian', 'Italian'),
        ('Javanese', 'Javanese'),
        ('Jamaican Patois', 'Jamaican Patois'),
        ('Kazakh', 'Kazakh'),
        ('Kinyarwanda', 'Kinyarwanda'),
        ('Kirundi', 'Kirundi'),
        ('Kituba', 'Kituba'),
        ('Korean', 'Korean'),
        ('Kurdish', 'Kurdish'),
        ('Lao', 'Lao'),
        ('Latin', 'Latin'),
        ('Latvian', 'Latvian'),
        ('Lingala', 'Lingala'),
        ('Luxembourgish', 'Luxembourgish'),
        ('Malagasy', 'Malagasy'),
        ('Malay', 'Malay'),
        ('Maltese', 'Maltese'),
        ('Mandarin', 'Mandarin'),
        ('Maori', 'Maori'),
        ('Marshallese', 'Marshallese'),
        ('Mirandese', 'Mirandese'),
        ('Mongolian', 'Mongolian'),
        ('Montenegrin', 'Montenegrin'),
        ('Mossi', 'Mossi'),
        ('Nahuatl', 'Nahuatl'),
        ('Nauruan', 'Nauruan'),
        ('Nepali', 'Nepali'),
        ('Norwegian', 'Norwegian'),
        ('Oromo', 'Oromo'),
        ('Palauan', 'Palauan'),
        ('Persian (Farsi)', 'Persian (Farsi)'),
        ('Pijin', 'Pijin'),
        ('Polish', 'Polish'),
        ('Portuguese', 'Portuguese'),
        ('Punjabi', 'Punjabi'),
        ('Quechua', 'Quechua'),
        ('Romanian', 'Romanian'),
        ('Russian', 'Russian'),
        ('Samoan', 'Samoan'),
        ('Serbian', 'Serbian'),
        ('Setswana', 'Setswana'),
        ('Sharchhopka', 'Sharchhopka'),
        ('Shona', 'Shona'),
        ('Sinhala', 'Sinhala'),
        ('Slovak', 'Slovak'),
        ('Slovenian', 'Slovenian'),
        ('Somali', 'Somali'),
        ('Spanish', 'Spanish'),
        ('Sranan Tongo', 'Sranan Tongo'),
        ('Swahili', 'Swahili'),
        ('Swedish', 'Swedish'),
        ('Tagalog', 'Tagalog'),
        ('Tajik', 'Tajik'),
        ('Tamil', 'Tamil'),
        ('Tatar', 'Tatar'),
        ('Tetum', 'Tetum'),
        ('Thai', 'Thai'),
        ('Tibetan', 'Tibetan'),
        ('Tigrinya', 'Tigrinya'),
        ('Tok Pisin', 'Tok Pisin'),
        ('Tsonga', 'Tsonga'),
        ('Tuvaluan', 'Tuvaluan'),
        ('Urdu', 'Urdu'),
        ('Uzbek', 'Uzbek'),
        ('Vincentian Creole', 'Vincentian Creole'),
        ('Vietnamese', 'Vietnamese'),
        ('Wayuu', 'Wayuu'),
        ('Welsh', 'Welsh'),
        ('Wolof', 'Wolof'),
        ('Zulu', 'Zulu'),
    ]
    language = models.CharField(max_length=50, choices=LANGUAGE_CHOICES) 
    WHATSAPP_GROUP_CATEGORIES = [
    ('family_friends', 'Family and Friends'),
    ('work_professional', 'Work and Professional'),
    ('education_learning', 'Education and Learning'),
    ('hobbies_interests', 'Hobbies and Interests'),
    ('events_social', 'Events and Social Activities'),
    ('community_social', 'Community and Social Causes'),
    ('business_entrepreneurship', 'Business and Entrepreneurship'),
    ('entertainment_media', 'Entertainment and Media'),
    ('health_wellness', 'Health and Wellness'),
    ('religious_spiritual', 'Religious and Spiritual'),
    ('shopping_deals', 'Shopping and Deals'),
    ('parenting_family', 'Parenting and Family'),
    ('coding_programming', 'Coding and Programming'),
    ('technology_gaming', 'Technology and Gaming'),
    ('sports_fitness', 'Sports and Fitness'),
    ('support_groups', 'Support Groups'),
]
    category = models.CharField(
        max_length=50,
        choices=WHATSAPP_GROUP_CATEGORIES,
        default='family_friends',
    )
    tags = models.CharField(
        max_length=200,
        help_text="Enter up to 5 tags separated by commas (max 200 characters)"
    )
    nsfw = models.BooleanField(default=False, help_text="Mark this group as NSFW")
    description = models.TextField()
    group_image = models.ImageField(upload_to='groupimage/', blank=True, null=True)
    qr_code = models.ImageField(upload_to='qrcodes/', blank=True, null=True)
    whatsapplink = models.URLField(max_length=200)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)
    def clean(self):
        super().clean()
        tag_list = [tag.strip() for tag in self.tags.split(",")]
        if len(tag_list) > 5:
            raise ValidationError("You cannot add more than 5 tags.")
        if len(self.tags) > 200:
            raise ValidationError("Tags cannot exceed 200 characters in total.")

    def __str__(self):
        return self.group_name


class WReview(models.Model):
    wgroup = models.ForeignKey(Wgroup, on_delete=models.CASCADE, to_field='group_id',)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review_id = models.BigAutoField(primary_key=True)
    rating = models.IntegerField()
    comment_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Review for {self.wgroup.group_name}'

