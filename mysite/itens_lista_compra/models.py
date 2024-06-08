from django.db import models
from listas_compra.models import ListaCompra
from produtos.models import Produto

class ItemListaCompra(models.Model):
    quantidade = models.PositiveIntegerField()
    lista_compra = models.ForeignKey(ListaCompra, on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.quantidade} de {self.produto.nome}"
