from rest_framework import serializers
from .models import Mercado

class MercadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mercado
        fields = '__all__'

