from django.http import JsonResponse
import json

import requests
# Create your views here.

def getTranslate(request):
    headers = {'content-type': 'application/json', 'connection': 'keep-alive', 'Accept': 'application/json'}
    response={}
    print(request.POST)
    data = {"subject":request.POST['subject'], "verb":request.POST['verb'], "object":request.POST['object']};
    r = requests.post("http://127.0.0.1:8080/apiNLG/createSimplePhrase", data=json.dumps(data), headers=headers)
    if r.status_code == 200:
        response = {
                'translateResult': r.text
        }
    else:
        response={'status':r.status_code}

    return JsonResponse(response)
