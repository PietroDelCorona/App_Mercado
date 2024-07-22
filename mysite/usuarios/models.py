from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Usuario(models.Model):
    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=255)
    endereco = models.CharField(max_length=255)

    def __str__(self):
        return self.nome

    def set_password(self, raw_password):
        self.senha = make_password(raw_password)  # Criptografa a senha
        self.save()

    def check_password(self, raw_password):
        return check_password(raw_password, self.senha)  # Verifica a senha criptografada

