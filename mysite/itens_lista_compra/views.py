# views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import ItemListaCompra
from .serializers import ItemListaCompraSerializer

class ItemListaCompraViewSet(viewsets.ModelViewSet):
    queryset = ItemListaCompra.objects.all()
    serializer_class = ItemListaCompraSerializer

    # Outros métodos do ModelViewSet como list, retrieve, create, etc...

class ItensListaCompraPorListaCompraId(APIView):
    def get(self, request, lista_compra_id):
        try:
            # Filtra os itens de lista de compra por lista_compra_id
            itens_lista_compra = ItemListaCompra.objects.filter(lista_compra_id=lista_compra_id)
            serializer = ItemListaCompraSerializer(itens_lista_compra, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ItemListaCompra.DoesNotExist:
            return Response({"message": "Itens de lista de compra não encontrados para este lista_compra_id"}, status=status.HTTP_404_NOT_FOUND)

