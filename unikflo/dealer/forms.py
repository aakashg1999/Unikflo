from django import forms
from django.contrib.auth.models import User
from dealer.models import contact_us

class contact_form(forms.ModelForm):
	class Meta():
		model = contact_us
		fields = ('name', 'email', 'message','mobile')