from django.http import JsonResponse

import requests
import json
import pict2Text.constants as constants
import spacy
# Create your views here.

def getPictoTranslate(request):
    if request.method == "GET":
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
    else:
        return JsonResponse("405 Method Not Allowed", status=405)

def getWordAttrs(request):
    if request.method == "GET":
        nlp = spacy.load('es')
        word= request.GET.get('word', 'word')
        tokenizer = nlp(word)
        wordAttrs=''
        for token in tokenizer:
                wordAttrs=token.tag_

        wordAttrs = wordAttrs.split('|')
        auxAttrs = wordAttrs[0].split('__')
        auxAttrs[0] = "Type=" + auxAttrs[0]
        wordAttrs.remove(wordAttrs[0])
        wordAttrs+=auxAttrs
        attrs={}
        for attr in wordAttrs:
            key = attr.split('=');
            if len(key)==2:
                attrs[key[0]] = key[1]

        response = {'attrs': attrs}
        return JsonResponse(response, status=200)
    else:
        return JsonResponse("405 Method Not Allowed", status=405)


def getTypePhrase(request):
    response = {'mensaje':"Todo bien"}
    if request.method == "POST":
        data = json.dumps(request.POST)
        print(request.body)
        return JsonResponse(response, status=200)
    else:
        return JsonResponse("405 Method Not Allowed", status=405)
