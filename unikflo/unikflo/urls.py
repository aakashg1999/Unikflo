"""unikflo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from dealer import views
from . import view
app_name= 'dealer'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',view.index,name='index'),
    path('about_us/',view.about_us.as_view(),name='about'),
    path('PriceL',view.PL,name='PriceL'),
    path('Brochure',view.Brochure,name='brochure'),
    path('dealer/',include('dealer.urls')),
    path('V3',view.V3,name='V3'),
    path('V4',view.V4,name='V4'),
    path('V5',view.V5,name='V5'),
    path('V6',view.V6,name='V6'),
    path('V7',view.V7,name='V7'),
    path('V8',view.V8,name='V8'),
    path('open_well',view.open_well,name='open_well'),
    path('monoblock',view.monoblock,name='monoblock'),
]
