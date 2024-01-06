from django.urls import path
from .views import UserView, GoogleAuthProviderView

urlpatterns = [
    path('', UserView.as_view()),
    path('login', GoogleAuthProviderView.as_view())
]