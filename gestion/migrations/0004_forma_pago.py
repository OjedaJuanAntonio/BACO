# Generated by Django 5.0.2 on 2024-02-27 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestion', '0003_producto_categoria'),
    ]

    operations = [
        migrations.CreateModel(
            name='Forma_Pago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_pago', models.CharField(choices=[('Efec', 'Efectivo'), ('Tarj', 'Tarjeta'), ('C_Cte', 'Cuenta Corriente'), ('Merc_Pago', 'Mercado Pago')], default='Efec', max_length=10)),
            ],
        ),
    ]
