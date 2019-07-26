import { Component, OnInit } from '@angular/core';
import { JobsGraphInterfaceService } from '../../../services/home/jobs-graph-interface.service';
import { ScreenSwitchService } from '../../../services/screen-switch.service';
import { GetJobsService } from '../../../services/get-jobs.service';
@Component({
  selector: 'app-jobs-graph-interface',
  templateUrl: './jobs-graph-interface.component.html',
  styleUrls: ['./jobs-graph-interface.component.css', './jobs-graph.scss']
})
export class JobsGraphInterfaceComponent implements OnInit {
  applicationDates: any;
  organizedJobListingsByDate: any;
  constructor(public jobsGraphInterfaceService: JobsGraphInterfaceService,
              public screenSwitchService: ScreenSwitchService,
              public getJobsService: GetJobsService) { }

  ngOnInit() {
    // on init, jobs are organized by date applied. eventually, this should be a function.
    this.getJobsService.addJobs();
  }

}
