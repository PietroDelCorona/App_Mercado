from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.db.models import Max

from precos.models import Preco
from produtos.models import Produto
from itens_lista_compra.models import ItemListaCompra
from listas_compra.models import ListaCompra
from mercados.models import Mercado
from usuarios.models import Usuario 

def get_last_created_lista():
    # Ordena os objetos pelo campo id em ordem decrescente e pega o primeiro
    last_lista = ListaCompra.objects.order_by('-id').first()
    return last_lista

def calcular_menor_preco(lista_id):
    itens = ItemListaCompra.objects.filter(lista_compra_id=lista_id)
    totais_por_mercado = {}
    mercados = Mercado.objects.all()  # Corrigido de 'Mercados' para 'Mercado'

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

        totais_por_mercado[mercado.id] = (total, mercado.endereco)  # Salva total e endereço

    if totais_por_mercado:
        mercado_mais_barato_id = min(totais_por_mercado, key=lambda k: totais_por_mercado[k][0])
        menor_preco, endereco = totais_por_mercado[mercado_mais_barato_id]
        mercado_mais_barato = Mercado.objects.get(id=mercado_mais_barato_id).nome
    else:
        mercado_mais_barato = "Nenhum mercado"
        menor_preco = 0
        endereco = "Não disponível"

    return mercado_mais_barato, menor_preco, endereco

def resultado_lista(request):
    last_lista = get_last_created_lista()
    if last_lista:
        lista_id = last_lista.id
        mercado_mais_barato, menor_preco, endereco = calcular_menor_preco(lista_id)
        return JsonResponse({
            'mercado_mais_barato': mercado_mais_barato,
            'menor_preco': menor_preco,
            'endereco': endereco
        })
    else:
        return JsonResponse({'error': 'Nenhuma lista encontrada'}, status=404)
