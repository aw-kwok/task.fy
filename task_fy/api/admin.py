from django.contrib import admin
from .models import *


# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("user_id", "last_name", "first_name", "canvas_id", "canvas_secret", "university")

@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ("university_id", "university_name", "api_url", "term_format")

@admin.register(Setting)
class SettingAdmin(admin.ModelAdmin):
    list_display = ("settings_id", "description")

@admin.register(UserSetting)
class UserSettingAdmin(admin.ModelAdmin):
    list_display = ("user", "setting", "value")