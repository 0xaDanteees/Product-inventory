from rest_framework import routers
from django.urls import path, include 
from .views import ProductoViewSet

router= routers.DefaultRouter()

router.register('productos', ProductoViewSet, 'productos')

urlpatterns= [
    path('', include(router.urls)),
]