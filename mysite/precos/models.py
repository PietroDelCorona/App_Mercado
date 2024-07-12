from django.db import models
from produtos.models import Produto
from mercados.models import Mercado

class Preco(models.Model):
    produto_id = models.ForeignKey(Produto, on_delete=models.CASCADE)
    mercado_id = models.ForeignKey(Mercado, on_delete=models.CASCADE)
    data = models.DateField()
    valor = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.produto.nome} - {self.mercado.nome} - R$ {self.valor} ({self.data})"
