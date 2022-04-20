from django.contrib import admin
from .models import Painting, PaintingSize, PaintingOrder, Order

admin.site.register(Painting)
admin.site.register(PaintingSize)
admin.site.register(Order)
admin.site.register(PaintingOrder)
