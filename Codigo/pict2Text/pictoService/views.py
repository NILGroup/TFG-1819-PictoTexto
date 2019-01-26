from django.shortcuts import render

import requests
import json
# Create your views here.

def getPicto(request):
    context={}
    result = []
    r = requests.get("https://api.arasaac.org/api/pictograms/es/search/"+request.GET.get('pictoName', 'name'))
    if r.status_code == 200:
        arrayObject= json.loads(r.text)
        for object in arrayObject:
           result.append({'id':object['idPictogram'],'url':"https://api.arasaac.org/api/pictograms/"+str(object['idPictogram'])})
        context = {
                'pictos': result
        }
    else:
        print(r.status_code)

    return render(request,'index.html', context)