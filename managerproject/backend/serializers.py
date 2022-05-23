from rest_framework import serializers
from .models import IncomeCategory, Income, Expense, ExpenseCategory

class IncomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Income 
        fields = ('pk', 'category', 'description', 'amount', 'added')

class ExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expense 
        fields = ('pk', 'category', 'description', 'amount', 'added')

class IncomeCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = IncomeCategory 
        fields = ('pk', 'name', 'description')

class ExpenseCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ExpenseCategory 
        fields = ('pk', 'name', 'description')