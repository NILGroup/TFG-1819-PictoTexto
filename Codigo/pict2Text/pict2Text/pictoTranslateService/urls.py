from django.urls import path

from . import views

urlpatterns = [
    path('getWordAttrs', views.getWordAttrs, name='index'),
    path('getTypePhrase', views.getTypePhrase, name='index')
]