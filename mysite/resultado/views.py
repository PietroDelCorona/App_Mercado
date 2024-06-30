from django.shortcuts import render
from django.http import JsonResponse

from precos.models import Preco
from produtos.models import Produto
from itens_lista_compra.models import ItemListaCompra
from listas_compra.models import ListaCompra
from mercados.models import Mercado
from usuarios.models import Usuario 

def calcular_menor_preco(lista_id):
    itens = ItemListaCompra.objects.filter(lista_compra_id=lista_id)
    totais_por_mercado = {}
    mercados = Mercados = Mercado.objects.filter(id__in=[5, 6])

    for mercado in mercados:
        total = 0
        for item in itens:
            produto_id = item.produto_id
            quantidade = item.quantidade
            
            preco = Preco.objects.filter(produto_id=produto_id, mercado_id=mercado.id).first()
            
            if preco:
                total += preco.valor * quantidade
            else:
                print(f"Preço não encontrado para produto_id {produto_id} no mercado_id {mercado.id}")

        totais_por_mercado[mercado.nome] = total

    mercado_mais_barato = min(totais_por_mercado, key=totais_por_mercado.get)
    menor_preco = totais_por_mercado[mercado_mais_barato]

    return mercado_mais_barato, menor_preco



def resultado_lista(request, lista_id):
    mercado_mais_barato, menor_preco = calcular_menor_preco(lista_id)
    return JsonResponse({
        'mercado_mais_barato': mercado_mais_barato,
        'menor_preco': menor_preco
    })

