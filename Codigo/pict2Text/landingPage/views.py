from django.http import HttpResponse
from landingPage.models.models import Model
from django.template import loader
import json

import requests
# Create your views here.

"""
    Best-Practices always return a HttpResponse


    We can use return render( request, template, context ) that returns a HttpResponse object
    The context object its the way to inject data on the view, and its is always necessary 
    

"""

def index(request):
    template = loader.get_template('index.html')
    context= {'pictos':Model.pictos}
    return HttpResponse(template.render(context,request))

