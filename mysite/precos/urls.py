from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PrecoViewSet

router = DefaultRouter()
router.register(r'precos', PrecoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]