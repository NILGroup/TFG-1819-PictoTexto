from django.http import JsonResponse

import requests
import json
import pict2Text.constants as constants
import spacy


# Create your views here.

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


def getWordAttrs(request):
    if request.method == "POST":
        response =[]
        body = readPostBody(request)
        nlp = spacy.load('es')
        for word in body:
            tokenizer = nlp(word)
            wordattrs = ''
            for token in tokenizer:
                wordattrs = token.tag_
            attrs = createWordAttr(wordattrs)
        response.push({'word':word,'attrs': attrs})
        return JsonResponse(response, status=200)
    else:
        return JsonResponse("405 Method Not Allowed", status=405)


def getTypePhrase(request):
    response = {'type': "present"}
    verb = False
    if request.method == "POST":
        body = readPostBody(request)
        for picto in body:
            if picto['attrs']['Type'] == 'VERB':
                verb = True;
            if picto['keyword'] == "ayer":
                response['type'] = "past"
            if picto['keyword'] == "mañana":
                response['type'] = "future"
        if verb == False:
            response = {'type': "present"}
        return JsonResponse(response, status=200)
    else:
        return JsonResponse("405 Method Not Allowed", status=405)


def createWordAttr(word):
    wordAttrs = word.split('|')
    auxAttrs = wordAttrs[0].split('__')
    auxAttrs[0] = "Type=" + auxAttrs[0]
    wordAttrs.remove(wordAttrs[0])
    wordAttrs += auxAttrs
    attrs = {}
    for attr in wordAttrs:
        key = attr.split('=')
        if len(key) == 2:
            attrs[key[0]] = key[1]
    return attrs

def readPostBody(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    return body
