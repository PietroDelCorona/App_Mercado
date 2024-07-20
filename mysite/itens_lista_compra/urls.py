from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemListaCompraViewSet, ItensListaCompraPorListaCompraId

router = DefaultRouter()
router.register(r'itens-lista-compra', ItemListaCompraViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('itens-lista-compra/filter/<int:lista_compra_id>/', ItensListaCompraPorListaCompraId.as_view(), name='itens_lista_compra_por_lista_compra_id'),
]
