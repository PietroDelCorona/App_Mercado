from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemListaCompraViewSet

router = DefaultRouter()

router.register(r'itens_lista_compra', ItemListaCompraViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
