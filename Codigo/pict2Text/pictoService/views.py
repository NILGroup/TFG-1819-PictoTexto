from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import JsonResponse

import requests
import json
# Create your views here.

def getPicto(request):
    response={}
    result = []
    r = requests.get("https://api.arasaac.org/api/pictograms/es/search/"+request.GET.get('pictoName', 'name'))
    if r.status_code == 200:
        arrayObject= json.loads(r.text)
        for object in arrayObject:
           result.append({'id':object['idPictogram'],'url':"https://api.arasaac.org/api/pictograms/"+str(object['idPictogram'])})
        response = {
                'status':200,
                'pictos': result
        }
    else:
        response={'status':r.status_code}

    return JsonResponse(response)