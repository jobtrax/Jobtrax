import { Component, OnInit } from '@angular/core';
import { JobsGraphInterfaceService } from '../../../services/home/jobs-graph-interface.service';

@Component({
  selector: 'app-jobs-graph-interface',
  templateUrl: './jobs-graph-interface.component.html',
  styleUrls: ['./jobs-graph-interface.component.css', './jobs-graph.scss']
})
export class JobsGraphInterfaceComponent implements OnInit {
  organizedJobListingsByDate: any;
  // max amount of jobs applied on any given date is basis for chart's max height.
  // total amount of keys on organizedJobListingsByDate object is basis for number of columns in chart.
  // height is proportional to length of each key on organizedJobListingsByDate relative to the max chart height.
  maxJobAppNumberByDate = 0;
  applicationDates;
  constructor(public jobsGraphInterfaceService: JobsGraphInterfaceService) { }

  ngOnInit() {
    // on init, jobs are organized by date applied. eventually, this should be a function.
    this.organizeJobs();
  }

  organizeJobs() {
    // form an object from jobs based on the date of application
    this.organizedJobListingsByDate = this.jobsGraphInterfaceService.sampleJobsAppliedTo.reduce((jobsByDate, job, i, a) => {
      if (!jobsByDate[job.dateApplied]) {
        jobsByDate[job.dateApplied] = [job];
      } else {
        jobsByDate[job.dateApplied].push(job);
      }
      return jobsByDate;
    }, {});
    // get the date of maximum job application
    for (const job in this.organizedJobListingsByDate) {
      if (this.organizedJobListingsByDate[job].length > this.maxJobAppNumberByDate) {
        this.maxJobAppNumberByDate = this.organizedJobListingsByDate[job].length;
      }
    }
    // get each application date to label columns in graph
    this.applicationDates = Object.keys(this.organizedJobListingsByDate);
  }
  // start with 100% of all job apps before adding funcitonality to change views
  // number of table rows (<tr>) === the maximum amount of job apps submitted in one given day
  // number of table data (<td>) === one for each unique date

}
