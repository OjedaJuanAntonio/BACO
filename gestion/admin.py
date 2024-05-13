from django.contrib import admin
from .models import Producto, Categoria, Forma_Pago, Venta

# Register your models here.
admin.site.register(Producto)
admin.site.register(Categoria)
admin.site.register(Forma_Pago)
admin.site.register(Venta)

