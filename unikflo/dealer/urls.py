
from django.urls import path
from dealer import views

urlpatterns=[
path('',views.dev,name='undercons'),
path('contact_us/',views.contact_us,name='contact'),
]