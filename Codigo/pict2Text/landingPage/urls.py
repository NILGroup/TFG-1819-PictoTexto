from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('getPicto',views.getPicto, name='index'),
    path('getTranslate',views.getTranslate, name='index'),
    path('getPictoTranslate',views.getPictoTranslate, name='index'),
]