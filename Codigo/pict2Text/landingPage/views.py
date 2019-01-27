from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
import json

import requests
# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render(createContext(request),request))

def getPicto(request):
    r = requests.get("http://127.0.0.1:8000/picto/getPicto?pictoName="+request.GET.get('pictoName', 'name'))
    if r.status_code == 200:
        request.session['pictos'] =json.loads(r.text)['pictos']
    else:
        print(r.status_code)
    return render(request,'index.html',  createContext(request))


def getTransalte(request):
    headers = {'content-type': 'application/json', 'connection': 'keep-alive', 'Accept': 'application/json'}
    data = {"subject": request.POST['subject'], "verb": request.POST['verb'], "object": request.POST['object']};
    r = requests.post("http://127.0.0.1:8080/apiNLG/createSimplePhrase", data=json.dumps(data), headers=headers)
    if r.status_code == 200:
        request.session['translateResult'] = r.text
    else:
        print(r.status_code)

    return render(request, 'index.html', createContext(request))


def createContext(request):
    context={}
    for key in request.session.keys():
        context[key] = request.session[key]
    return context;