from django.db import models

# Create your models here.

class User(models.Model):
    user_id = models.CharField(primary_key = True, editable = False, max_length = 255, unique = True) # corresponds with "sub" field in Google authentication
    first_name = models.CharField(max_length = 255, default = "")
    last_name = models.CharField(max_length = 255, default = "")
    canvas_id = models.IntegerField(null = True)
    canvas_secret = models.CharField(max_length = 255, null = True) # will be encrypted with the encryption key
    university_id = models.IntegerField(null = True)