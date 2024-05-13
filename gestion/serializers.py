from rest_framework import serializers
from .models import Producto, Categoria, Forma_Pago, Venta, DetalleVenta

class CategoriaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id', 'nombre')


class ProductoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ('id', 'categoria', 'descripcion', 'cantidad','costo_bulto', 'valor_bulto', 'uniddades_bulto')
        
        
class Forma_PagoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Forma_Pago
        fields = ('id','nombre')


class VentaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = ('id', 'fecha', 'forma_pago', 'total')


class DetalleVentaSerializers(serializers.ModelSerializer):
    class Meta:
        model = DetalleVenta
        fields = ('id', 'venta', 'producto', 'cantidad', 'precio_unitario', 'subtotal')