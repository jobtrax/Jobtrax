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
    'you will be great one day young one',
    'you are incredibly cool and everyone likes you',
    'get a job already, hippy!',
    'the only thing preventing you from getting a job at this point might be your face',
    'keep up the hard work!',
    'lizard jesus loves you, and dont you forget it'];
  constructor() { }
  // call to inspirational quotes api

  randomInspirationalQuote() {
    return this.inspirationalQuoteMockData[Math.floor(Math.random() * Math.floor(this.inspirationalQuoteMockData.length))];
  }

  addJobToDatabase() {
    // TODO: make post request, render changes
  }
}
