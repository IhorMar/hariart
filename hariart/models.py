from distutils.command import upload
import uuid
from django.db import models
from rest_framework import pagination
from phonenumber_field.modelfields import PhoneNumberField

COUNTRY_CHOICES = (
    ('UA', 'Ukraine'),
    ('LT', 'Lithuania'),
    ('RU', 'Russia'),
    ('NW', 'Norway')
)

class Painting(models.Model):
    ref = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    painting = models.ImageField(upload_to='media/', null=True)
    name = models.CharField(max_length=100)
    CATEGORY_CHOICES = (
        ('window_world', 'Window to another world'),
        ('vedic', 'Vedic Art'),
        ('landscapes', 'Landscapes'),
        ('modular', 'Modular'),
    )
    category = models.CharField(max_length=23, choices=CATEGORY_CHOICES)
    creation_date = models.DateField()
    description = models.CharField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Painting"
        verbose_name_plural = "Paintings"
        ordering = ['name']


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
    country = models.CharField(
        max_length=9, choices=COUNTRY_CHOICES, default=COUNTRY_CHOICES[1][1])

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


class Contact(models.Model):
    country = models.CharField(
        max_length=9, choices=COUNTRY_CHOICES, default=COUNTRY_CHOICES[1][1])
    email = models.CharField(max_length=100)
    phone = PhoneNumberField(null=True, blank=False, unique=True)
    fullname = models.CharField(max_length=100, null=True)

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"


class PageNumberPaginationWithCount(pagination.PageNumberPagination):
    def get_paginated_response(self, data):
        response = super(PageNumberPaginationWithCount,
                         self).get_paginated_response(data)
        response.data['total_pages'] = self.page.paginator.num_pages
        response.data['current_page'] = self.page.number
        return response


class Parsing(models.Model):
    timestamp = models.DateTimeField()
    status = models.CharField(max_length=50)
    is_scraper = models.BooleanField()
    is_crawler = models.BooleanField()
    description = models.TextField()

    class Meta:
        verbose_name = "Parsing"
        verbose_name_plural = "Parsing"
