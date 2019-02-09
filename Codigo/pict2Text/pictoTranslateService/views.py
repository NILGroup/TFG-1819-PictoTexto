from django.http import JsonResponse

import requests
import json
# Create your views here.

def getPictoTranslate(request):
    response={}
    result = []
    r = requests.get("https://api.arasaac.org/api/pictograms/es/"+request.GET.get('pictoId', 'id'))
    if r.status_code == 200:
        object= json.loads(r.text)
        for word in object['keywords']:
           result.append(word['keyword'])
        response = {
                'meanings': result
        }
    else:
        response = {'status': 'false', 'message': r.message}
    return JsonResponse(response, status=r.status_code)
