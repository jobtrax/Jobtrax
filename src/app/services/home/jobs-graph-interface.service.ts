import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsGraphInterfaceService {
  sampleJobsAppliedTo: object[] = [
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-11' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-11' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-12' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-12' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-13' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-13' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-14' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-14' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-14' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-14' },
    { jobTitle: 'boat engineer', jobDescription: 'fixing boats for money', jobUrl:
    'www.weFixBoats.com', dateApplied: '2019-06-14' },
  ];
  constructor() { }
  addJob(obj: object) {
    this.sampleJobsAppliedTo.push(obj);
  }
}
