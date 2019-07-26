import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsGraphInterfaceService {
  sampleJobsAppliedTo: any = [
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-11' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-11' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-12' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-12' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-13' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-13' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-14' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-14' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-14' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-14' },
    // { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    // 'www.weFixBoats.com', dateApplied: '2019-06-14' },
  ];
  organizedJobListingsByDate: any;
  // max amount of jobs applied on any given date is basis for chart's max height.
  // total amount of keys on organizedJobListingsByDate object is basis for number of columns in chart.
  // height is proportional to length of each key on organizedJobListingsByDate relative to the max chart height.
  maxJobAppNumberByDate = 0;
  applicationDates;
  constructor() { }
  addJob(obj: object) {
    this.sampleJobsAppliedTo.push(obj);
  }

  organizeJobs() {
    // form an object from jobs based on the date of application
    this.organizedJobListingsByDate = this.sampleJobsAppliedTo.reduce((jobsByDate: any, job: any) => {
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
}
