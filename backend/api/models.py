from django.db import models

# Create your models here.

class University(models.Model):
    university_id = models.AutoField(primary_key = True)
    university_name = models.CharField(max_length = 255, default = "")
    api_url = models.CharField(max_length=255, default = "")
    term_format = models.CharField(max_length = 255, default = "")

    def __str__(self):
        return self.university_name
    

class User(models.Model):
    user_id = models.CharField(primary_key = True, editable = False, max_length = 255, unique = True) # corresponds with "sub" field in Google authentication
    last_name = models.CharField(max_length = 255, default = "")
    first_name = models.CharField(max_length = 255, default = "")
    canvas_id = models.IntegerField(null = True)
    canvas_secret = models.CharField(max_length = 255, null = True) # will be encrypted with the encryption key
    university = models.ForeignKey(
        University,
        on_delete = models.SET_NULL,
        null = True
        )

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Setting(models.Model):
    settings_id = models.AutoField(primary_key = True)
    description = models.CharField(max_length = 255, default = "")

    def __str__(self):
        return self.description


class UserSetting(models.Model):
    class Meta:
        constraints = [
            models.UniqueConstraint(fields = ["user", "setting"], name = "user_setting")
        ]

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        default = ""
    )
    setting = models.ForeignKey(
        Setting,
        on_delete=models.CASCADE,
        default = ""
    )
    value = models.CharField(max_length = 255, default = "")

    def __str__(self):
        return f"{self.user} - {self.setting}: {self.value}"