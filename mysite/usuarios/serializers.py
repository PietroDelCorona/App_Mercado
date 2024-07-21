from rest_framework import serializers
from .models import Usuario
from django.contrib.auth.hashers import make_password

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

    def create(self, validated_data):
        validated_data['senha'] = make_password(validated_data.get('senha'))
        return super(UsuarioSerializer, self).create(validated_data)