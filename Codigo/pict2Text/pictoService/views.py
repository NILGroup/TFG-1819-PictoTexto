from django.http import JsonResponse

import requests
import json
# Create your views here.

def getPicto(request):
    response={}
    result = []
    r = requests.get("https://api.arasaac.org/api/pictograms/es/search/"+request.GET.get('pictoName', 'name'))
    if r.status_code == 200:
        print(r)
        arrayObject= json.loads(r.text)
        for object in arrayObject:
           result.append({'id':object['idPictogram'],'url':"https://api.arasaac.org/api/pictograms/"+str(object['idPictogram'])})
        response = {
                'pictos': result
        }
    else:
        response={'status':'false','message': r.message}
    return JsonResponse(response,status=r.status_code)