from django.db import models
from usuarios.models import Usuario

class ListaCompra(models.Model):
    data_lista = models.DateField()
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"Lista de {self.usuario.nome} em {self.data_lista}"
