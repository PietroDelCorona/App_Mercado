# Generated by Django 5.0.6 on 2024-06-27 14:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listas_compra', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='listacompra',
            old_name='usuario',
            new_name='usuario_id',
        ),
    ]