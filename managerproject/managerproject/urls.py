"""managerproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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
from django.urls import path,re_path
from backend import views
# from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/income/$', views.income_list),
    re_path(r'^api/income/([0-9])$', views.income_detail),
    re_path(r'^api/expense/$', views.expense_list),
    re_path(r'^api/expense/([0-9])$', views.expense_detail),
    re_path(r'^api/income_category/$', views.income_category_list),
    re_path(r'^api/income_category/([0-9])$', views.income_category_detail),
    re_path(r'^api/expense_category/$', views.expense_category_list),
    re_path(r'^api/expense_category/([0-9])$', views.expense_category_detail),
]
