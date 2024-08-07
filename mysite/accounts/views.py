'''
import os
from django.shortcuts import render
from django.views.generic import TemplateView
from django.conf import settings

class IndexView(TemplateView):    
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['YOUR_GOOGLE_CLIENT_ID'] = settings.os.getenv('SOCIAL_AUTH_GOOGLE_OAUTH2_KEY')
        return context  
'''
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic import CreateView


class SignUpView(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"
    
