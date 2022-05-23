from django.db import models
from django.contrib.auth.models import User
# from moneyfield import MoneyField


class IncomeCategory(models.Model):
    name=models.CharField("Name", max_length=250,unique=True)
    description=models.TextField("Decription",max_length=400)

    def __str__(self):
        return self.name

class ExpenseCategory(models.Model):
    name=models.CharField("Name", max_length=250,unique=True,)
    description=models.TextField("Decription",max_length=400)

    def __str__(self):
        return self.name

class Income(models.Model):
    category=models.ForeignKey(IncomeCategory, on_delete=models.CASCADE,default=None)
    description=models.TextField("Decription",max_length=400)
    amount=models.IntegerField()
    added=models.DateTimeField(auto_now_add=True)

    def __str__(self):
         return self.description

class Expense(models.Model):
    category=models.ForeignKey(ExpenseCategory, on_delete=models.CASCADE,default=None)
    description=models.TextField("Decription",max_length=400)
    amount=models.IntegerField()
    added=models.DateTimeField(auto_now_add=True)

    def __str__(self):
         return self.description

#  amount=MoneyField(decimal_places=0, max_digits=12, currency='RWF')




# Create your models here.
