from django.contrib import admin
from django.http import HttpResponseRedirect

from .models import Painting, PaintingSize, PaintingOrder, Order, Contact, Parsing
from django.urls import path
from parsing.crawler import main


def start_parsing(request):
    main()
    return HttpResponseRedirect("../")


class ParsingAdmin(admin.ModelAdmin):
    change_list_template = "admin/model_change_list.html"

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [path('parsing/', start_parsing)]
        return custom_urls + urls


admin.site.register(Painting)
admin.site.register(PaintingSize)
admin.site.register(Order)
admin.site.register(PaintingOrder)
admin.site.register(Contact)
admin.site.register(Parsing, ParsingAdmin)
