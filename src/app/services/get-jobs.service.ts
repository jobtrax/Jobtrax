import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddJobInterfaceService } from '../services/home/add-job-interface.service';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';
import { JobsGraphInterfaceService } from './home/jobs-graph-interface.service';

@Injectable({
  providedIn: 'root'
})
export class GetJobsService {
  temp: any;
  constructor(
    public http: HttpClient,
    public addJobInterfaceService: AddJobInterfaceService,
    public jobsGraphInterfaceService: JobsGraphInterfaceService
  ) { }

  addJobs() {
    const { jobDescription, jobTitle, jobUrl, dateApplied } = this.addJobInterfaceService;
    if (jobTitle) {
          this.http.post('http://localhost:8000/jobfinder/', {
      jobtrax_user: '1',
      job_title: jobTitle,
      // date_applied: dateApplied,
      // notes: jobDescription,
    }).subscribe(() => {
      this.getAllJobsAppliedTo().subscribe(result => {
        this.temp = result;
        this.temp.map((e) => {
          e.dateApplied = e.date_applied;
        });
        this.jobsGraphInterfaceService.sampleJobsAppliedTo = this.temp;
        this.jobsGraphInterfaceService.organizeJobs();
      });
    });
    } else {
      this.getAllJobsAppliedTo().subscribe(result => {
        this.temp = result;
        this.temp.map((e) => {
          e.dateApplied = e.date_applied;
        });
        this.jobsGraphInterfaceService.sampleJobsAppliedTo = this.temp;
        this.jobsGraphInterfaceService.organizeJobs();
      });
    }
  }

  getAllJobsAppliedTo() {
    return this.http.get('http://localhost:8000/jobfinder/1');
  }

  // queryJobsAppliedTo() {

  // }

}
