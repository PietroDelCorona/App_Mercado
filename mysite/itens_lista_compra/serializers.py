from rest_framework import serializers
from .models import Produto, ListaCompra, ItemListaCompra

class ItemListaCompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemListaCompra
        fields = '__all__'