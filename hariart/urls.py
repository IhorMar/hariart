from rest_framework.routers import DefaultRouter
from django.urls import re_path
from .views import (
    PaintingViewSet,
    PaintingSizeViewSet,
    OrderViewSet,
    PaintingOrderViewSet,
    contact_us,
    ConactViewSet,
)

urlpatterns = [
    re_path(r"contact_us", contact_us, name="contact_us"),
]
router = DefaultRouter()
router.register(r"paintings", PaintingViewSet)
router.register(r"painting_sizes", PaintingSizeViewSet)
router.register(r"orders", OrderViewSet, basename="orders")
router.register(r"contacts", ConactViewSet)
router.register(r"paintings_orders", PaintingOrderViewSet)
urlpatterns += router.urls
