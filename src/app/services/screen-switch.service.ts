import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSwitchService {
jobGraph;
addJobInterface;
motivationalQuote;
showGameScreen;

  constructor() { }
  // this service determines which screen is shown:
  // 1. job graph
  showJobGraph() {
    this.jobGraph = 'show';
    this.addJobInterface = this.motivationalQuote = this.showGameScreen = 'hide';
  }
  // 2. add job interface
  showAddJobInterface() {
    this.addJobInterface = 'show';
    this.jobGraph = this.motivationalQuote = this.showGameScreen = 'hide';
  }
  // 3. motivational quote
  showMotivationalQuote() {
    this.motivationalQuote = 'show';
    this.jobGraph = this.addJobInterface = this.showGameScreen = 'hide';
  }
  // 4. if none of these, embed a game similar to the jumping dinosaur
  showGame() {
    this.showGameScreen = 'show';
    this.jobGraph = this.addJobInterface = this.motivationalQuote = 'hide';
  }
}
