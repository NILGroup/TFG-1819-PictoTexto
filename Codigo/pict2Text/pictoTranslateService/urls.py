from django.urls import path

from . import views

urlpatterns = [
    path('getPictoTranslate',views.getPictoTranslate, name='index'),
]