from django.http import JsonResponse

import requests
import json
import datetime
import pict2Text.constants as constants
import pict2Text.Utils.SpacyModel as spacyimp

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
    print(datetime.datetime.now())
    if request.method == "GET":
        nlp = spacyimp.SpacyIMP.__getModel__()
        word = request.GET.get('word', 'word')
        attrs = getAttrs(nlp,word);
        response = {'attrs': attrs}
        return JsonResponse(response, status=200)
    else:
        if request.method == "POST":
            nlp = spacyimp.SpacyIMP.__getModel__()
            print(datetime.datetime.now())
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            words=[];
            for word in body:
                words.append({'keyword':word, 'attrs': getAttrs(nlp,word)})
            print(json.dumps(words, indent=4, sort_keys=True))
            return JsonResponse(words, status=200, safe=False)
        else:
            print(datetime.datetime.now())
            response = {'message': "405 Method Not Allowed"}
            return JsonResponse(response, status=405)


def getAttrs(nlp,word):
    tokenizer = nlp(word)
    wordAttrs = ''
    for token in tokenizer:
        wordAttrs = token.tag_
    wordAttrs = wordAttrs.split('|')
    auxAttrs = wordAttrs[0].split('__')
    auxAttrs[0] =("Type=VERB", "Type=" + auxAttrs[0])[auxAttrs[0] != 'AUX']
    wordAttrs.remove(wordAttrs[0])
    wordAttrs += auxAttrs
    attrs = {}
    for attr in wordAttrs:
        key = attr.split('=')
        if len(key) == 2:
            attrs[key[0]] = key[1]

    return attrs;

def getTypePhrase(request):
    response = {'Type': "present"}
    if request.method == "POST":
        print(request.body)
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        for picto in body:
            if picto == "ayer":
                response['Type'] = "past"
            if picto == "mañana":
                response['Type'] = "future"
        print(response)
        return JsonResponse(response, status=200)
    else:
        return JsonResponse("405 Method Not Allowed", status=405)
