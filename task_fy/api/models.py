from django.db import models

# Create your models here.

class University(models.Model):
    university_id = models.AutoField(primary_key = True)
    university_name = models.CharField(max_length = 255, default = "")
    term_format = models.CharField(max_length = 255, default = "")


class User(models.Model):
    user_id = models.CharField(primary_key = True, editable = False, max_length = 255, unique = True) # corresponds with "sub" field in Google authentication
    first_name = models.CharField(max_length = 255, default = "")
    last_name = models.CharField(max_length = 255, default = "")
    canvas_id = models.IntegerField(null = True)
    canvas_secret = models.CharField(max_length = 255, null = True) # will be encrypted with the encryption key
    university_id = models.ForeignKey(
        University,
        on_delete = models.SET_NULL,
        null = True
        )

class Setting(models.Model):
    settings_id = models.AutoField(primary_key = True)
    description = models.CharField(max_length = 255, default = "")

class UserSetting(models.Model):
    class Meta:
        constraints = [
            models.UniqueConstraint(fields = ["user", "setting"])
        ]
    user = models.ForeignKey(
        "User",
        on_delete=models.CASCADE
    ),
    setting = models.ForeignKey(
        "Setting",
        on_delete=models.CASCADE
    )
    value = models.CharField(max_length = 255, default = "")