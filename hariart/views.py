from rest_framework import viewsets
from .models import Painting, PaintingSize, PaintingOrder, Order
from .serializers import PaintingSerializer, PaintingSizeSerializer, OrderSerializer, PaintingOrderSerializer


class PaintingViewSet(viewsets.ModelViewSet):
    serializer_class = PaintingSerializer
    queryset = Painting.objects.all()


class PaintingSizeViewSet(viewsets.ModelViewSet):
    serializer_class = PaintingSizeSerializer
    queryset = PaintingSize.objects.all()

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()


class PaintingOrderViewSet(viewsets.ModelViewSet):
    serializer_class = PaintingOrderSerializer
    queryset = PaintingOrder.objects.all()
