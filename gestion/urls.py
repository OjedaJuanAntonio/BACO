from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
#from .api import CategoriaViewSet, ProductoViewSet
#from gestion import views
from .views import CategoriaView, ProductoView, Forma_PagoView, VentaView, DetalleVentaView

router = routers.DefaultRouter()

router.register(r'categoria', CategoriaView, 'categoria')
router.register(r'producto', ProductoView, 'producto')
router.register(r'forma_pago', Forma_PagoView, 'forma_pago')
router.register(r'venta', VentaView, 'venta')
router.register(r'Detalleventa', DetalleVentaView, 'Detalleventa')
 

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Gestion API")),
]