from django.http import HttpResponse
from django.template import loader
import json

import requests
# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    context= {'pictos':request.session.get('pictos')}
    return HttpResponse(template.render(context,request))

