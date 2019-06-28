from rest_framework import serializers
from .models import Job_candidate, Jobs_applied_to

class Job_candidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job_candidate
        fields = ('id', 'name', 'email')

class Jobs_applied_toSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs_applied_to
        fields = '__all__'

