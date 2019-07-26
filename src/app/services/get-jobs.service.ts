import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddJobInterfaceService } from '../services/home/add-job-interface.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';
import { JobsGraphInterfaceService } from './home/jobs-graph-interface.service';

@Injectable({
  providedIn: 'root'
})
export class GetJobsService {

  constructor(
    public http: HttpClient,
    public addJobInterfaceService: AddJobInterfaceService,
    public jobsGraphInterfaceService: JobsGraphInterfaceService
  ) { }

  addJobs() {
    const { jobDescription, jobTitle, jobUrl, dateApplied } = this.addJobInterfaceService;
    this.http.post('http://localhost:8000/jobfinder/', {
      jobtrax_user: '1',
      job_title: jobTitle,
      // date_applied: dateApplied,
      // notes: jobDescription,
    }).subscribe(() => {
      this.getAllJobsAppliedTo().subscribe(result => {
        this.jobsGraphInterfaceService.sampleJobsAppliedTo = result;
        console.log(result)
      });
    });
  }

  getAllJobsAppliedTo() {
    return this.http.get('http://localhost:8000/jobfinder/1');
  }

  // queryJobsAppliedTo() {

  // }

}
