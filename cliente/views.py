from django import forms
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import TemplateView
from django.core import serializers
from .forms import SignUpForm
from django.contrib.auth import views as auth_views
import json

class IndexView(TemplateView):
    template_name = 'login.html'
  

def inicio(request):
    template_name = "index.html"
    return render(request, 'index.html')

def base_layout(request):
    template='base.html'
    return render(request,template)

def registro_layout(request):
    template='registro.html'
    return render(request,template)

def RegistroDatos(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.refresh_from_db()  # load the profile instance created by the signal
            user.profile.CorreoElectronico = form.cleaned_data.get('CorreoElectronico')
            user.profile.Run = form.cleaned_data.get('Run')
            user.profile.NombreUser = form.cleaned_data.get('NombreUser')
            user.profile.ApellidoUser = form.cleaned_data.get('ApellidoUser')
            user.profile.FechaNacimiento = form.cleaned_data.get('FechaNacimiento')
            user.profile.TipoVivienda = form.cleaned_data.get('TipoVivienda')
            user.save()
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=user.username, password=raw_password)
            login(request, user)
            return redirect('/')
    else:
        form = SignUpForm()
    return render(request, 'registro.html', {'form': form})

def logout(request):
    """Logs out user"""
    auth_logout(request)
    return render(request, 'index.html')  

# def adopcion(request):
#     response = requests.get('http://apiperris.pythonanywhere.com/perros/')
#     geodata = response.json()
#     return render(request, 'adopcion.html', {
#         'ip': geodata['ip'],
#         'country': geodata['country_name']
#     })