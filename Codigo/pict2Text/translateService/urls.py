from django.urls import path

from . import views

urlpatterns = [
    path('getTranslate', views.getTranslate, name='index'),
]