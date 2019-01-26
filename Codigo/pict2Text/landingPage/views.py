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
class landingPage():
    context={}

def index(request):
    template = loader.get_template('index.html')
    context= {}
    return HttpResponse(template.render(context,request))

def getPicto(request):
    context={}
    r = requests.get("http://127.0.0.1:8000/picto/getPicto?pictoName="+request.GET.get('pictoName', 'name'))
    if r.status_code == 200:
        context['pictos']=json.loads(r.text)['pictos']
    else:
        print(r.status_code)
    return render(request,'index.html', context)


def getTransalte(request):
    context={}
    headers = {'content-type': 'application/json', 'connection': 'keep-alive', 'Accept': 'application/json'}
    data = {"subject":request.POST['subject'], "verb":request.POST['verb'], "object":request.POST['object']};
    r = requests.post("http://127.0.0.1:8000/translate/getTranslate", data=json.dumps(data), headers=headers)
    if r.status_code == 200:
        context['translate']=json.loads(r.text)
    else:
        print(r.status_code)
    return render(request,'index.html', context)