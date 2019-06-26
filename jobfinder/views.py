from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Job_candidate, Jobs_applied_to
from .serializers import Job_candidateSerializer, Jobs_applied_toSerializer

# Create your views here.
class Job_candidateList(APIView):
    def get(self, request):
        job_candidate = Job_candidate.objects.all()
        serializer = Job_candidateSerializer(job_candidate, many=True)
        return Response(serializer.data)

    def post(self):
        pass


class Jobs_applied_toList(APIView):
    def get(self, request):
        jobs_applied_to = Jobs_applied_to.objects.all()
        serializer = Jobs_applied_toSerializer(jobs_applied_to, many=True)
        return Response(serializer.data)

    def post(self):
        pass

def index(request):
    return render(request, 'ang_files/index.html')
