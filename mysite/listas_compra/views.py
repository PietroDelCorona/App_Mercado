from django.shortcuts import render
from rest_framework import viewsets
from .models import Usuario, ListaCompra
from .serializers import ListaCompraSerializer

class ListaCompraViewSet(viewsets.ModelViewSet):
    queryset = ListaCompra.objects.all()
    serializer_class = ListaCompraSerializer