import uuid
from django.db import models

class Painting(models.Model):
    ref = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    CATEGORY_CHOICES = (
        ('window_world', 'Window to another world'),
        ('vedic', 'Vedic Art'),
        ('landscapes', 'Landscapes'),
        ('modular', 'Modular'),
    )
    category = models.CharField(max_length=23, choices=CATEGORY_CHOICES)
    mime_type = models.CharField(max_length=100)
    owner_email = models.CharField(max_length=100)
    creation_date = models.DateField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Painting"
        verbose_name_plural = "Paintings"


class PaintingSize(models.Model):
    painting = models.ForeignKey(Painting, on_delete=models.CASCADE)
    height = models.PositiveIntegerField(default=1)
    width = models.PositiveIntegerField(default=1)

    class Meta:
        verbose_name = "PaintingSize"
        verbose_name_plural = "PaintingSizes"

class Order(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_surname = models.CharField(max_length=100)
    customer_email = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=100)
    COUNTRY_CHOICES = (
        ('UA', 'Ukraine'),
        ('LT', 'Lithuania'),
        ('RU', 'Russia')
    )
    country = models.CharField(max_length=9, choices=COUNTRY_CHOICES, default=COUNTRY_CHOICES[1][1])

    class Meta:
        verbose_name = "Order"
        verbose_name_plural = "Orders"


class PaintingOrder(models.Model):
    painting = models.ForeignKey(Painting, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    class Meta:
        verbose_name = "PaintingOrder"
        verbose_name_plural = "PaintingOrders"
