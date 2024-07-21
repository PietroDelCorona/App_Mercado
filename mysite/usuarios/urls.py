from django.urls import path
from .views import signup_view, login_view, user_list_view, user_detail_view, user_update_view, user_delete_view

urlpatterns = [
    path('signup/', signup_view, name='signup'),
    path('login/', login_view, name='login'),
    path('usuarios/', user_list_view, name='user-list'),
    path('usuarios/<int:pk>/', user_detail_view, name='user-detail'),
    path('usuarios/<int:pk>/update/', user_update_view, name='user-update'),
    path('usuarios/<int:pk>/delete/', user_delete_view, name='user-delete'),
]
