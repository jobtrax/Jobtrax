from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Job_candidate, Jobs_applied_to
from .serializers import Job_candidateSerializer, Jobs_applied_toSerializer

# Create your views here.
class Job_candidateList(APIView):
    def get(self, request, name, password):
        job_candidate = Job_candidate.objects.get(name=name, password=password)
        serializer = Job_candidateSerializer(job_candidate, many=False)
        return Response(serializer.data)

    def post(self, request):
        serializer = Job_candidateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Jobs_applied_toList(APIView):
    def get(self, request, user_id):
        jobs_applied_to = Jobs_applied_to.objects.filter(job_candidate=user_id)
        # jobs_applied_to = Jobs_applied_to.objects.all()
        serializer = Jobs_applied_toSerializer(jobs_applied_to, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = Jobs_applied_toSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def index(request):
    return render(request, 'ang_files/index.html')
