from rest_framework import serializers
import models


class Jobtrax_userSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Jobtrax_user
        fields = ('id', 'name', 'email')


class CompaniesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Companies
        fields = '__all__'


class Company_contactsSerializers(serializers.ModelSerializer):
    class Meta:
        models = models.Company_contacts
        fields = '__all__'


class Job_emailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Job_emails
        fields = '__all__'


class ApplicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Applications
        fields = '__all__'
