from django.contrib import admin

# Register your models here.
from .models import Jobtrax_user, Applications

admin.site.register(Jobtrax_user)
admin.site.register(Applications)
