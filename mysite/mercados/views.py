from django.shortcuts import render
from rest_framework import viewsets
from .models import Mercado
from .serializers import MercadoSerializer

class MercadoViewSet(viewsets.ModelViewSet):
    queryset = Mercado.objects.all()
    serializer_class = MercadoSerializer
