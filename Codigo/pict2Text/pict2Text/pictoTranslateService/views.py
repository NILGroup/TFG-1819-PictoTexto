from django.http import JsonResponse

import json
import pict2Text.Utils.SpacyModel as spacyimp

# Create your views here.


def getWordAttrs(request):
    if request.method == "GET":
        nlp = spacyimp.SpacyIMP.__getModel__()
        word = request.GET.get('word', 'word')
        attrs = getAttrs(nlp,word);
        response = {'keyword':word, 'attrs': attrs}
        return JsonResponse(response, status=200)
    else:
        if request.method == "POST":
            nlp = spacyimp.SpacyIMP.__getModel__()
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            words=[];
            for word in body:
                words.append({'keyword':word, 'attrs': getAttrs(nlp,word)})
            print(json.dumps(words, indent=4, sort_keys=True))
            return JsonResponse(words, status=200, safe=False)
        else:
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
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        for picto in body:
            if picto == "ayer":
                response['Type'] = "past"
            if picto == "mañana":
                response['Type'] = "future"
            if picto == "hoy":
                response = {'Type': "present"}
        print(json.dumps(response, indent=4, sort_keys=True))
        return JsonResponse(response, status=200)
    else:
        return JsonResponse("405 Method Not Allowed", status=405)
