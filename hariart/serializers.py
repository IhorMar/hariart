from rest_framework import serializers
from .models import Painting, PaintingSize, PaintingOrder, Order, Contact


class PaintingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Painting
        fields = ('ref', 'painting', 'name', 'category', 'creation_date', 'description')


class PaintingSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaintingSize
        fields = ('id', 'painting', 'height', 'width')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'customer_name', 'customer_surname', 'customer_email', 'customer_phone', 'country')


class ContactSerializer(serializers.ModelSerializer):
    country = serializers.CharField(source='get_country_display')

    class Meta:
        model = Contact
        fields = ('id', 'country', 'email', 'phone', 'fullname')


class PaintingOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaintingOrder
        fields = ('id', 'painting', 'order', 'quantity')
