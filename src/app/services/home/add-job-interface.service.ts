import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddJobInterfaceService {
  // add job state
  jobTitle: string;
  jobUrl: string;
  jobDescription: string;
  dateApplied: string;
  inspirationalQuoteMockData: string[] = [
    'You will be great one day young one',
    'You are incredibly cool and everyone likes you',
    'Get a job already, hippy!',
    'The only thing preventing you from getting a job at this point might be your face',
    'Keep up the hard work!',
    'Lizard jesus loves you, and dont you forget it',
    'Just do it!',
    'They don\'t say it be like it is but it do',
    'Don\'t worry, if you don\'t get this job you can always move back in with your parents',
    'LVL UP',
    'Just don\'t think about your relatives roasting you at the next family dinner',
    'Fat checks are coming',
  ];
  constructor() { }
  // call to inspirational quotes api

  randomInspirationalQuote() {
    return this.inspirationalQuoteMockData[Math.floor(Math.random() * Math.floor(this.inspirationalQuoteMockData.length))];
  }

  addJobToDatabase() {
    // TODO: make post request, render changes
  }
}
