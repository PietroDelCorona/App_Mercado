from django.db import models

class Mercado(models.Model):
    nome = models.CharField(max_length=255)
    endereco = models.CharField(max_length=255)
    distancia = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.nome