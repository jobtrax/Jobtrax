# Generated by Django 2.2.2 on 2019-06-30 19:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company_contacts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('position', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=30)),
                ('last_talked_to', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Jobtrax_user',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Companies',
            fields=[
                ('name', models.CharField(max_length=30)),
                ('is_hiring', models.BooleanField(default=True)),
                ('admin_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='jobfinder.Jobtrax_user')),
            ],
        ),
        migrations.CreateModel(
            name='Applications',
            fields=[
                ('job_title', models.CharField(max_length=30)),
                ('company', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='jobfinder.Companies')),
                ('date_applied', models.DateField(auto_now_add=True, null=True)),
                ('is_accepted', models.BooleanField(default=True)),
                ('company_specialty', models.CharField(max_length=500, null=True)),
                ('expected_salary', models.FloatField(null=True)),
                ('notes', models.TextField(null=True)),
                ('jobtrax_user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jobfinder.Jobtrax_user')),
            ],
        ),
        migrations.CreateModel(
            name='Job_emails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now_add=True, null=True)),
                ('context', models.TextField()),
                ('email_address', models.CharField(max_length=30)),
                ('Company_contact_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='jobfinder.Company_contacts')),
                ('application_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='jobfinder.Applications')),
            ],
        ),
        migrations.AddField(
            model_name='applications',
            name='last_email_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='jobfinder.Job_emails'),
        ),
        migrations.AddField(
            model_name='applications',
            name='preferred_contact_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='jobfinder.Company_contacts'),
        ),
    ]
