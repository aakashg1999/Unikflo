from django.shortcuts import render
from django.views.generic import View,TemplateView,ListView,DetailView,UpdateView,DeleteView
from django.views.generic.edit import CreateView



def index(request):
	return render(request,'index.html',{})

class about_us(TemplateView):
	template_name='about-us.html'

	def get_context_data(self,**kwargs):
		context=super().get_context_data(**kwargs)
		context['basic_inject']="I am injected"
		return context

def PL(request):
	return render(request,'PL.html',{})

def Brochure(request):
	return render(request,'Brochure.html',{})

def V3(request):
	return render(request,'V3.html',{})

def V4(request):
	return render(request,'V4.html',{})

def V5(request):
	return render(request,'V5.html',{})

def V6(request):
	return render(request,'V6.html',{})

def V7(request):
	return render(request,'V7.html',{})

def V8(request):
	return render(request,'V8.html',{})

def open_well(request):
	return render(request,'open_well.html',{})

def monoblock(request):
	return render(request,'monoblock.html',{})
