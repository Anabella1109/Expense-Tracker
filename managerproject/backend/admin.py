from django.contrib import admin
from .models import User,Income,IncomeCategory, Expense, ExpenseCategory

# admin.site.register(User)
admin.site.register(Income)
admin.site.register(IncomeCategory)
admin.site.register(ExpenseCategory)
admin.site.register(Expense)


# Register your models here.
