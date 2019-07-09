from rest_framework import serializers
from .models import *


class Jobtrax_userSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobtrax_user
        fields = ('id', 'name', 'email')


class CompaniesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companies
        fields = '__all__'


class Company_contactsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Company_contacts
        fields = '__all__'


class Job_emailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job_emails
        fields = '__all__'


class ApplicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applications
        fields = '__all__'
