from django.contrib import admin

# Register your models here.
from .models import Job_candidate, Jobs_applied_to

admin.site.register(Job_candidate)
admin.site.register(Jobs_applied_to)
