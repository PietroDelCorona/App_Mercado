from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ListaCompraViewSet

router = DefaultRouter()
router.register(r'listas_compras', ListaCompraViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
