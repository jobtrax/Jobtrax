import { Component, OnInit } from '@angular/core';
import { JobsGraphInterfaceService } from '../../../services/home/jobs-graph-interface.service';

@Component({
  selector: 'app-jobs-graph-interface',
  templateUrl: './jobs-graph-interface.component.html',
  styleUrls: ['./jobs-graph-interface.component.css']
})
export class JobsGraphInterfaceComponent implements OnInit {

  constructor(public jobsGraphInterfaceService: JobsGraphInterfaceService) { }

  ngOnInit() {
  }

  // start with 100% of all job apps before adding funcitonality to change views
  // number of table rows (<tr>) === the maximum amount of job apps submitted in one given day
  // number of table data (<td>) === one for each unique date

}
