from django.urls import path
from .views import UserView, GoogleAuthProviderView, DeleteCookieView

urlpatterns = [
    path('', UserView.as_view()),
    path('login', GoogleAuthProviderView.as_view()),
    path('delete-cookie', DeleteCookieView.as_view()),
]