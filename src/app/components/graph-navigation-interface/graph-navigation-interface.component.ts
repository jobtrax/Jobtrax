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

  onClickMotiv8() {
    // motivational quote shows on screen temporarily
  }
  onClickAddJob() {
    // job add interface shows up on screen until submit
  }
  onClickGameScreen() {

  }
}
