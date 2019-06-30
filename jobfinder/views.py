from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Jobtrax_user, Applications
from .serializers import Jobtrax_userSerializer, ApplicationsSerializer

# Create your views here.
class Jobtrax_userList(APIView):
    def get(self, request, name, password):
        jobtrax_user = Jobtrax_user.objects.get(name=name, password=password)
        serializer = Jobtrax_userSerializer(jobtrax_user, many=False)
        return Response(serializer.data)

    def post(self, request):
        serializer = Jobtrax_userSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ApplicationsList(APIView):
    def get(self, request, user_id):
        applications = Applications.objects.filter(jobtrax_user=user_id)
        # Applications = Applications.objects.all()
        serializer = ApplicationsSerializer(applications, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ApplicationsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def index(request):
    return render(request, 'ang_files/index.html')
