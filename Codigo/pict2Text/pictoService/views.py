from django.shortcuts import render

import requests
# Create your views here.

def getPicto(request):
    context={}
    r = requests.get("https://api.arasaac.org/api/pictograms/es/search/casa")
    if r.status_code == 200:
        context = {
                'message': r.text
        }
    else:
        print(r.status_code)

    return render(request,'index.html', context)