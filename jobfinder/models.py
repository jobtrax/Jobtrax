from django.db import models
from django.utils import timezone

# Create your models here.

class Job_candidate(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)

class Jobs_applied_to(models.Model):
    job_candidate = models.ForeignKey(Job_candidate, on_delete=models.CASCADE)
    job_title = models.CharField(max_length=30)
    company = models.CharField(max_length=30)
    date_applied = models.DateField.auto_now_add=True
