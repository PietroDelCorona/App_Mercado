from rest_framework import serializers
from .models import Usuario, ListaCompra

class ListaCompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListaCompra
        fields = '__all__'