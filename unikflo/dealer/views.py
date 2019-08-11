from django.shortcuts import render
from django.views.generic import View,TemplateView,ListView,DetailView,UpdateView,DeleteView
from django.views.generic.edit import CreateView
from dealer.forms import contact_form
from dealer.emailing import sending
# Create your views here.
def dev(request):
	return render(request,'dev.html',{})

def contact_us(request):
	registered= False
	name=''
	contact_forms=contact_form()
	if request.method =="POST":
		cust_info=contact_form(data=request.POST)

		if cust_info.is_valid():
			cust=cust_info.save()
			cust.save()
			name = request.POST.get('name').title()
			email = request.POST.get('email').lower()
			registered=True
			sending(name,email)
		else:
			print("Some Error Occured!")

	

	my_dict={'registered':registered,'contact_forms':contact_forms,'name':name}
	return render(request,'contact-us.html',my_dict)




