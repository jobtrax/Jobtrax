import { Component, OnInit } from '@angular/core';
import { ScreenSwitchService } from '../../services/screen-switch.service';
@Component({
  selector: 'app-graph-navigation-interface',
  templateUrl: './graph-navigation-interface.component.html',
  styleUrls: ['./graph-navigation-interface.component.css']
})
export class GraphNavigationInterfaceComponent implements OnInit {

  constructor(public screenSwitchService: ScreenSwitchService) { }

  ngOnInit() {
  }

  onClickShowGraph() {
    this.screenSwitchService.showJobGraph();
  }
  onClickMotiv8() {
    // motivational quote shows on screen temporarily
    this.screenSwitchService.showMotivationalQuote();
  }
  onClickAddJob() {
    // job add interface shows up on screen until submit
    this.screenSwitchService.showAddJobInterface();
  }
  onClickGameScreen() {
    this.screenSwitchService.showGame();
  }
}
