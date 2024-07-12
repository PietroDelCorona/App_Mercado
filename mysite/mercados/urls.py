from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MercadoViewSet

router = DefaultRouter()
router.register(r'mercados', MercadoViewSet)


urlpatterns = [
    path('', include(router.urls)),
]