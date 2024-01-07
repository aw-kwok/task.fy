from django.shortcuts import render
from rest_framework import generics, status
from .serializers import UserSerializer, CreateUserSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.http import HttpResponse, HttpResponseBadRequest

from google.oauth2 import id_token
from google.auth.transport.requests import Request

import json

import requests

# Create your views here.

class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format = None):
        # if current user does not have active session, create
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data = request.data)
        
        # if fields in data sent in post request are valid
        if serializer.is_valid():
            user_id = serializer.data.user_id
            first_name = serializer.data.first_name
            last_name = serializer.data.last_name

class GoogleAuthProviderView(APIView):
    permission_classes = [AllowAny]

    # delete cookie

    def post(self, request):
        print(request)

        # if cookie
        # take cookie from request header
        # verify user in cookie


        # if no cookie
        # request.body is a bytes object, so decode and load json
        data = json.loads(request.body.decode("utf-8"))
        print(data)

        # verify oauth2 token
        try:
            idinfo = id_token.verify_oauth2_token(data["credential"], Request(), "822600363302-nmf2tp266kv798jp2g6hrioonb5mrtbh.apps.googleusercontent.com")

            userid = idinfo["sub"]
            name = idinfo["name"]
            print(userid)
            print(name)

            # signed, httpOnly cookie

            # response = HttpResponse()
            # response.set_signed_cookie("id_token", request.data, httponly=True)
            return HttpResponse()
        except ValueError:
            return HttpResponseBadRequest("Failed to verify OAuth2 token")