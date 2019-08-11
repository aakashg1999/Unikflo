from django.db import models
from django.urls import reverse

class contact_us(models.Model):
	name=models.CharField(max_length=254)
	email=models.EmailField()
	message=models.CharField(max_length=500)
	mobile=models.BigIntegerField()
	def __str__(self):
		return self.name

class Dealers(models.Model):
	name=models.CharField(max_length=254)
	email=models.EmailField(blank=True)
	address=models.CharField(max_length=500)
	mobile=models.BigIntegerField()
	def __str__(self):
		return self.name

