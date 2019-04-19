from django.http import JsonResponse

import requests
import json
import unicodedata
import pict2Text.Utils.constants as constants
# Create your views here.


def getPicto(request):
    if request.method == "GET":
        result = []
        url=constants.PICTO_BASE_DIR+constants.ES_LANGUAGE+constants.FINDER_URL;
        r = requests.get(url+request.GET.get('pictoName', 'name'))
        if r.status_code == 200:
            arrayObject= json.loads(r.text)
            for object in arrayObject:
                for key in object['keywords']:
                    if(clearString(key['keyword'])==clearString(request.GET.get('pictoName', 'name'))):
                        result.append({'id':object['idPictogram'],'url':constants.PICTO_BASE_DIR+str(object['idPictogram']), 'keyWords':key['keyword']})
            response = {
                    'pictos': result
            }
        else:
            print(r)
            response={'status':'false','message': ''}
        return JsonResponse(response,status=r.status_code)
    else:
        return JsonResponse("405 Method Not Allowed", status=405)

def getPictoTranslate(request):
    if request.method == "GET":
        result = []
        url = constants.PICTO_BASE_DIR + constants.ES_LANGUAGE
        r = requests.get(url + request.GET.get('pictoId', 'id'))
        if r.status_code == 200:
            object = json.loads(r.text)
            for word in object['keywords']:
                result.append(word['keyword'])
            response = {
                'meanings': result
            }
        else:
            response = {'status': 'false', 'message': r.text}
        return JsonResponse(response, status=r.status_code)
    else:
        return JsonResponse("405 Method Not Allowed", status=405)



def clearString(cadena):
    s = ''.join((c for c in unicodedata.normalize('NFD',cadena) if unicodedata.category(c) != 'Mn'))
    return s