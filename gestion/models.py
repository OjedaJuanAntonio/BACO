from django.db import models

# Create your models here.
'''------PRODUCTO------'''

class Categoria(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    categoria = models.ForeignKey(Categoria, on_delete= models.CASCADE, default='1')
    descripcion= models.CharField(max_length=255)
    cantidad= models.IntegerField()
    costo_bulto = models.DecimalField(max_digits=10, decimal_places =2)
    valor_bulto = models.DecimalField(max_digits=10, decimal_places =2)
    uniddades_bulto= models.IntegerField()

    def __str__(self):
        return self.descripcion
    

class Forma_Pago(models.Model):
    nombre = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.nombre


class Venta(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)
    forma_pago = models.ForeignKey(Forma_Pago, on_delete= models.CASCADE, default='1')
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0, blank=True, null=True)

    def __str__(self):
        return f'Venta #{self.id}'


class DetalleVenta(models.Model):
    venta = models.ForeignKey(Venta, related_name='detallesventa', on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        valor_bulto = self.producto.valor_bulto
        self.precio_unitario = valor_bulto / self.producto.uniddades_bulto
        self.subtotal = self.cantidad * self.precio_unitario
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.cantidad} x {self.producto.descripcion}'

