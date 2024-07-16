from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ListaCompraViewSet

router = DefaultRouter()
router.register(r'listas-compras', ListaCompraViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
