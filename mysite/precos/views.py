from django.shortcuts import render
from rest_framework import viewsets
from .models import Mercado, Produto, Preco
from .serializers import PrecoSerializer

class PrecoViewSet(viewsets.ModelViewSet):
    queryset = Preco.objects.all()
    serializer_class = PrecoSerializer