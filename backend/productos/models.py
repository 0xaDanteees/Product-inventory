from django.db import models

# Create your models here.
#Same as define in the document

class Producto(models.Model):
    nombre= models.CharField(max_length=100)
    descripcion= models.CharField(max_length=200)
    precio= models.DecimalField(max_digits=10, decimal_places=2)
    cantidad= models.IntegerField()

    def __str__(self):
        return self.nombre