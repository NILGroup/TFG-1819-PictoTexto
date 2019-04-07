from django.urls import path

from . import views

urlpatterns = [
    path('getPicto', views.getPicto, name='index')
]