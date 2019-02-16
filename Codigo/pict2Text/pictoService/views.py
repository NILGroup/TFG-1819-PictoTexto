from django.http import JsonResponse

import requests
import json
import pict2Text.constants as constants
# Create your views here.

def getPicto(request):
    response={}
    result = []
    url=constants.PICTO_BASE_DIR+constants.ES_LANGUAGE+constants.FINDER_URL;
    r = requests.get(url+request.GET.get('pictoName', 'name'))
    if r.status_code == 200:
        arrayObject= json.loads(r.text)
        for object in arrayObject:
            if(object['keywords'][0]['keyword']==request.GET.get('pictoName', 'name')):
                result.append({'id':object['idPictogram'],'url':constants.PICTO_BASE_DIR+str(object['idPictogram']), 'keyWords':object['keywords'][0]['keyword']})
        response = {
                'pictos': result
        }
    else:
        response={'status':'false','message': r.message}
    return JsonResponse(response,status=r.status_code)