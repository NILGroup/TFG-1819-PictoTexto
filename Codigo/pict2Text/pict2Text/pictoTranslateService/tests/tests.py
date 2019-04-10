from django.test import TestCase

# Create your tests here.
from django.test import Client
from django.urls import reverse

class TranslateWebServiceTest(TestCase):

    def getWordAttrsTest(self):
        c = Client();
        response = c.post(reverse('translate/getWordAttrs'), {'paella','perro','comer'})
        print("JEllo")
        self.assertEquals(response.status_code,200)
        pass
