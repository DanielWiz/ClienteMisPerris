from django.conf.urls import url,include
from . import views
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth import views as auth_views


urlpatterns = [
    url(r'^$',views.inicio),
    url(r'^registro/$', views.RegistroDatos,name='registro'),
    url(r'^login/$', auth_views.LoginView.as_view(template_name="login.html"),name='login'),
    url(r'^logout/$', auth_views.LogoutView.as_view(template_name="logout.html"), name='logout'),
] 