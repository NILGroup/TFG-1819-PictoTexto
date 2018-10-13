from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

# Create your views here.

"""
    Best-Practices always return a HttpResponse


    We can use return render( request, template, context ) that returns a HttpResponse object
    The context object its the way to inject data on the view, and its is always necessary 
    

"""

def index(request):
    template = loader.get_template('myApp/index.html')
    context= {}
    return HttpResponse(template.render(context,request))

def login(request):
    print()
    cadena = "Hello " +request.POST['user'] +" your password is: " +request.POST['password']
    context = {
            'message': cadena
    }
    return render(request,'myApp/index.html', context)

