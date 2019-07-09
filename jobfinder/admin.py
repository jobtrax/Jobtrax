from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Jobtrax_user)
admin.site.register(Applications)
admin.site.register(Companies)
admin.site.register(Company_contacts)
admin.site.register(Job_emails)
