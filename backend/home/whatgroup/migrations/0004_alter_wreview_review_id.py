# Generated by Django 5.1.3 on 2024-12-02 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('whatgroup', '0003_alter_wreview_review_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wreview',
            name='review_id',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]
