from django.http import JsonResponse

import requests
import json
import pict2Text.constants as constants
# Create your views here.

def getPictoTranslate(request):
    result = []
    url=constants.PICTO_BASE_DIR+constants.ES_LANGUAGE
    r = requests.get(url+request.GET.get('pictoId', 'id'))
    if r.status_code == 200:
        object= json.loads(r.text)
        for word in object['keywords']:
           result.append(word['keyword'])
        response = {
                'meanings': result
        }
    else:
        response = {'status': 'false', 'message': r.text}
    return JsonResponse(response, status=r.status_code)


def getWordAttrs(request):

    word= request.GET.get('word', 'word')
    response={}


    return JsonResponse(response, status=200)