from django.contrib import admin
from .models import Painting, PaintingOrder, Order

admin.site.register(Painting)
admin.site.register(Order)
admin.site.register(PaintingOrder)
