from django.shortcuts import render
from rest_framework import viewsets
from .models import ItemListaCompra
from .serializers import ItemListaCompraSerializer

class ItemListaCompraViewSet(viewsets.ModelViewSet):
    queryset = ItemListaCompra.objects.all()
    serializer_class = ItemListaCompraSerializer