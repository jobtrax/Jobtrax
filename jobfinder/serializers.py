from rest_framework import serializers
from .models import Jobtrax_user, Applications

class Jobtrax_userSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobtrax_user
        fields = ('id', 'name', 'email')

class ApplicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applications
        fields = '__all__'

