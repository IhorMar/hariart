from django.urls import path, include, re_path
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('hariart.urls')),
    path('', include('hariart_frontend.urls')),
    re_path(r'^(?:.*)/?', include('hariart_frontend.urls')),
]
