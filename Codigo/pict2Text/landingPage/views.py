from django.http import HttpResponse
from django.shortcuts import render
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
    context= {}
    return HttpResponse(template.render(context,request))

def login(request):
    headers = {'content-type': 'application/json', 'connection': 'keep-alive', 'Accept': 'application/json'}
    context={}
    data = {"subject":request.POST['subject'], "verb":request.POST['verb'], "object":request.POST['object']};
    r = requests.post("http://127.0.0.1:8080/apiNLG/createSimplePhrase", data=json.dumps(data), headers=headers)
    if r.status_code == 200:
        context = {
                'message': r.text
        }
    else:
        print(r.status_code)

    return render(request,'index.html', context)
