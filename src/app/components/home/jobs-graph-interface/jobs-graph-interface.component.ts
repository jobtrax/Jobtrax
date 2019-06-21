import { Component, OnInit } from '@angular/core';
import { JobsGraphInterfaceService } from '../../../services/home/jobs-graph-interface.service';

@Component({
  selector: 'app-jobs-graph-interface',
  templateUrl: './jobs-graph-interface.component.html',
  styleUrls: ['./jobs-graph-interface.component.css', './jobs-graph.scss']
})
export class JobsGraphInterfaceComponent implements OnInit {
  applicationDates: any;
  organizedJobListingsByDate: any;
  constructor(public jobsGraphInterfaceService: JobsGraphInterfaceService) { }

  ngOnInit() {
    // on init, jobs are organized by date applied. eventually, this should be a function.
    this.jobsGraphInterfaceService.organizeJobs();
  }

  // start with 100% of all job apps before adding funcitonality to change views
  // number of table rows (<tr>) === the maximum amount of job apps submitted in one given day
  // number of table data (<td>) === one for each unique date
}
