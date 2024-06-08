from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=255)
    unidade = models.CharField(max_length=50)
    marca = models.CharField(max_length=255)

    def __str__(self):
        return self.nome
