# Generated by Django 5.1.3 on 2024-11-28 23:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('whatgroup', '0002_alter_wgroup_group_id_alter_wreview_review_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wreview',
            name='review_id',
            field=models.CharField(default='7a327af7f9f046d89ed98898e8387418', max_length=32, primary_key=True, serialize=False, unique=True),
        ),
    ]
