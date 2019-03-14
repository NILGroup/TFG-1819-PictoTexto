from django.urls import path

from . import views

urlpatterns = [
    path('getPictoTranslate',views.getPictoTranslate, name='index'),
    path('getWordAttrs', views.getWordAttrs, name='index'),
    path('getTypePhrase',views.getTypePhrase,name='index')
]