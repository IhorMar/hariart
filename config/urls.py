from django.urls import path, include, re_path
from django.contrib import admin


urlpatterns = [
    path(r'admin', admin.site.urls),
    re_path(r'api', include('hariart.urls')),
    path('', include('hariart_frontend.urls')),
    re_path(r'^(?:.*)/?', include('hariart_frontend.urls')),
]
