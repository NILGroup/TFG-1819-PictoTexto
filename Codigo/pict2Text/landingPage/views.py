from django.http import HttpResponse
from django.template import loader
from django.middleware.csrf import get_token
from django.shortcuts import render
import json

import requests
# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    context ={}
    # request.META["CSRF_COOKIE_USED"] = True
    # csrf_token = get_token(request)

    return HttpResponse(template.render(context,request))
