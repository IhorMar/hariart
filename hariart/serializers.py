from rest_framework import serializers
from .models import Painting, PaintingOrder, Order


class PaintingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Painting
        fields = ('id', 'ref', 'name', 'category', 'mime_type', 'owner_email', 'creation_date', 'height', 'width')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'customer_name', 'customer_surname', 'customer_email', 'customer_phone', 'country')


class PaintingOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaintingOrder
        fields = ('id', 'painting', 'order', 'quantity')
