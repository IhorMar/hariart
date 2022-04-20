from rest_framework.routers import DefaultRouter
from .views import PaintingViewSet, PaintingSizeViewSet, OrderViewSet, PaintingOrderViewSet

router = DefaultRouter()
router.register(r'paintings', PaintingViewSet)
router.register(r'painting_sizes', PaintingSizeViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'paintings_orders', PaintingOrderViewSet)
urlpatterns = router.urls
