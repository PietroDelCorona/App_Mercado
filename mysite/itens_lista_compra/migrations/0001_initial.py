# Generated by Django 5.0.6 on 2024-06-08 18:07

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('listas_compra', '0001_initial'),
        ('produtos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ItemListaCompra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantidade', models.PositiveIntegerField()),
                ('lista_compra', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='listas_compra.listacompra')),
                ('produto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='produtos.produto')),
            ],
        ),
    ]