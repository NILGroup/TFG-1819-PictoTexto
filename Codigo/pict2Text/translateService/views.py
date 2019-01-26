from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import json

import requests
# Create your views here.

def getTranslate(request):
    headers = {'content-type': 'application/json', 'connection': 'keep-alive', 'Accept': 'application/json'}
    context={}
    data = {"subject":request.POST['subject'], "verb":request.POST['verb'], "object":request.POST['object']};
    r = requests.post("http://127.0.0.1:8080/apiNLG/createSimplePhrase", data=json.dumps(data), headers=headers)
    if r.status_code == 200:
        context = {
                'translateResult': r.text
        }
    else:
        print(r.status_code)

    return render(request,'index.html', context)