from .models import Producto, Categoria, Forma_Pago, Venta, DetalleVenta
from rest_framework import viewsets, permissions
from .serializers import ProductoSerializers, CategoriaSerializers, Forma_PagoSerializers, VentaSerializers, DetalleVentaSerializers


# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductoSerializers


class CategoriaView(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CategoriaSerializers

class Forma_PagoView(viewsets.ModelViewSet):
    queryset = Forma_Pago.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = Forma_PagoSerializers    


class VentaView(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = VentaSerializers


class DetalleVentaView(viewsets.ModelViewSet):
    queryset = DetalleVenta.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = DetalleVentaSerializers