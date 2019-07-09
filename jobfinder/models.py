from django.db import models
from django.utils import timezone

# Create your models here.

class Jobtrax_user(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)


class Companies(models.Model):
    name = models.CharField(max_length=30)
    is_hiring = models.BooleanField(default=True)
    admin = models.OneToOneField(
        Jobtrax_user,
        on_delete=models.CASCADE,
        primary_key=True
    )


class Company_contacts(models.Model):
    name = models.CharField(max_length=30)
    position = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    last_talked_to = models.DateTimeField(auto_now=True)


class Applications(models.Model):
    jobtrax_user = models.ForeignKey(
        Jobtrax_user,
        on_delete=models.CASCADE
    )
    job_title = models.CharField(max_length=30)
    company = models.OneToOneField(
        Companies,
        on_delete=models.CASCADE,
        primary_key=True
    )
    date_applied = models.DateField(
        auto_now_add=True,
        null=True
    )
    last_email = models.ForeignKey(
        'Job_emails',
        on_delete=models.SET_NULL,
        null=True
    )
    is_accepted = models.BooleanField(default=True)
    company_specialty = models.CharField(
        max_length=500,
        null=True
    )
    expected_salary = models.FloatField(null=True)
    notes = models.TextField(null=True)
    preferred_contact = models.ForeignKey(
        Company_contacts,
        on_delete=models.SET_NULL,
        null=True
    )


class Job_emails(models.Model):
    date = models.DateField(
        auto_now_add=True,
        null=True
    )
    context = models.TextField()
    application = models.ForeignKey(
        Applications,
        on_delete=models.SET_NULL,
        null=True
    )
    Company_contact = models.ForeignKey(
        Company_contacts,
        on_delete=models.SET_NULL,
        null=True
    )
    email_address = models.CharField(max_length=30)
