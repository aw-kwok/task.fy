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
from google.auth import jwt

import time

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

class DeleteCookieView(APIView):
    permission_classes = [AllowAny]

    def delete(self, request):
        response = HttpResponse()
        response.delete_cookie('id_token', path=request.path, samesite="None") 
        return response

class GoogleAuthProviderView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # checks if user is logged in by checking id_token cookie
        try:
            # take cookie from request header
            cookie = request.get_signed_cookie('id_token')
            print('Has Cookie')

            # verify user in cookies
            idinfo = id_token.verify_oauth2_token(cookie, Request(), "822600363302-nmf2tp266kv798jp2g6hrioonb5mrtbh.apps.googleusercontent.com")
            print('Token verified')

            userid = idinfo["sub"]
            name = idinfo["name"]
            print(userid)
            print(name)

            response = HttpResponse()
            response.delete_cookie("id_token", path=request.path, samesite="None")

            return HttpResponse()
        except KeyError:
            return HttpResponseBadRequest("Cookie not found")
        except ValueError:
            return HttpResponseBadRequest("id_token invalid")

    def post(self, request):
        if (request.body == None):
            return HttpResponseBadRequest('Request Body Empty')
        
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
            response = HttpResponse()
            response.set_signed_cookie("id_token", data['credential'], httponly=True, samesite = "None", secure = True)
            return response
        except ValueError as e:
            print(e)
            # if token used too early, wait and send the request again
            if "Token used too early" in str(e):
                decoded_token = jwt.decode(data["credential"], verify=False)
                iat = decoded_token["iat"]
                curr_time = int(time.time())
                # wait by the difference between the system time and iat
                if (curr_time < iat):
                    print("Too early")
                    time.sleep(iat - curr_time)
                return self.post(request)
            else: return HttpResponseBadRequest("Failed to verify OAuth2 token")
        