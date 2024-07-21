from django.db import models
from django.contrib.auth.hashers import make_password

class Usuario(models.Model):
    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=255) 
    endereco = models.CharField(max_length=255)

    def __str__(self):
        return self.nome
    
    def save(self, *args, **kwargs):
        self.senha = make_password(self.senha)
        super().save(*args, **kwargs)
