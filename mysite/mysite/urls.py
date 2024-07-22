"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

'''
from django.contrib import admin
from django.urls import path, include
from accounts.views import IndexView 
from resultado.views import resultado_lista

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(), name='home'),
    path('auth/', include('social_django.urls', namespace='social')), 
    path('api/', include('mercados.urls')),
    path('api/', include('produtos.urls')),
    path('api/', include('precos.urls')),
    path('api/', include('usuarios.urls')),
    path('api/', include('itens_lista_compra.urls')),
    path('api/', include('listas_compra.urls')),
    path('resultado_lista/<int:lista_id>/', resultado_lista, name='resultado_lista')
]
'''
#tirar esses comentários aqui
'''
from django.contrib import admin
from django.urls import path, include  # new
from django.views.generic.base import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("accounts.urls")), #new
    path("accounts/", include("django.contrib.auth.urls")),  # new
    path("", TemplateView.as_view(template_name="home.html"), name="home"),  # new
]
'''
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from resultado.views import resultado_lista
from rest_framework.routers import DefaultRouter
from usuarios.views import UsuarioViewSet, signup_view, login_view

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('', TemplateView.as_view(template_name='blog/index.html')),
    path('auth/', include('social_django.urls', namespace='social')), 
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('mercados.urls')),
    path('api/', include('produtos.urls')),
    path('api/', include('precos.urls')),
    path('api/', include('usuarios.urls')),
    path('api/', include('itens_lista_compra.urls')),
    path('api/', include('listas_compra.urls')),
    path('resultado_lista/', resultado_lista, name='resultado_lista'),
    path('resultado_lista/<int:lista_id>/', resultado_lista, name='resultado_lista'),
    path('api/usuarios/', include('usuarios.urls')),
    path('api/signup/', signup_view, name='signup'),
    path('api/login/', login_view, name='login'),
]
    
