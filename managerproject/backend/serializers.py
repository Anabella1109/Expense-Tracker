from rest_framework import serializers
from .models import IncomeCategory, Income, Expense, ExpenseCategory

class IncomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Income 
        fields = ('pk', 'category', 'description', 'amount', 'added')

    def to_representation(self, instance):
        representation = dict()
        representation["pk"] = instance.pk
        representation["category"] = instance.category.name
        representation["description"] = instance.description
        representation["amount"] = instance.amount
        representation["added"] = instance.added
            

        return representation

class ExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expense 
        fields = ('pk', 'category', 'description', 'amount', 'added')
        # exclude=[]

    def to_representation(self, instance):
        representation = dict()
        representation["pk"] = instance.pk
        representation["category"] = instance.category.name
        representation["description"] = instance.description
        representation["amount"] = instance.amount
        representation["added"] = instance.added
            

        return representation

class IncomeCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = IncomeCategory 
        fields = ('pk', 'name', 'description')

class ExpenseCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ExpenseCategory 
        fields = ('pk', 'name', 'description')