from rest_framework import serializers
from .models import Mercado, Produto, Preco

class PrecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preco
        fields = '__all__'