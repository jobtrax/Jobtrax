import { Component, OnInit, Input } from '@angular/core';
import { AddJobInterfaceService } from '../../../services/home/add-job-interface.service';
import { JobsGraphInterfaceService } from '../../../services/home/jobs-graph-interface.service';
import { ScreenSwitchService } from '../../../services/screen-switch.service';
@Component({
  selector: 'app-add-job-interface',
  templateUrl: './add-job-interface.component.html',
  styleUrls: ['./add-job-interface.component.css']
})
export class AddJobInterfaceComponent implements OnInit {
  constructor(public addJobInterfaceService: AddJobInterfaceService,
              public jobsGraphInterfaceService: JobsGraphInterfaceService,
              public screenSwitchService: ScreenSwitchService) { }
  appliedToJobAlready = false;
  showModal = false;
  inspirationalQuote: string;
  showInspirationalQuote = false;
  showAddJobButton = true;
  ngOnInit() {
  }
  // addJobInterfaceService has jobTitle,
  // jobUrl,
  // jobDescription,
  // and inspirational quotes
  // click handler function for form submit to alter
  handleSubmit() {
    // TODO: call to service addJobInterfaceService to add job to database
    // pushing additional jobs into sample data for front-end testing. graph also needs to be re-rendered upon submit.
    let { jobTitle, jobDescription, jobUrl, dateApplied } = this.addJobInterfaceService;
    if (jobTitle && jobDescription && jobUrl && dateApplied) {
      this.jobsGraphInterfaceService.addJob({ jobTitle, jobDescription, jobUrl, dateApplied });
    }
    jobTitle = jobDescription = jobUrl = '';
    dateApplied = 'mm/dd/yyyy';
    this.generateInspirationalQuote();
    // on submit, a service needs to be called to change state to represent changes in job table
    // this means the state stored in the service needs to be directly in the html of the graph interface
    this.jobsGraphInterfaceService.organizeJobs();
  }

  generateInspirationalQuote() {
    this.inspirationalQuote = this.addJobInterfaceService.randomInspirationalQuote();
    this.showInspirationalQuote = true;
    this.toggleShowModal();
    this.showAddJobButton = false;
    return setTimeout(() => {
      this.showInspirationalQuote = false;
      this.showAddJobButton = true;
      this.appliedToJobAlready = false;
      this.screenSwitchService.showJobGraph();
    }, 1750);
  }

  // if the 'I have applied to this job already' box is checked, add to a
  handleCheck() {
    this.appliedToJobAlready = !this.appliedToJobAlready;
  }

  toggleShowModal() {
    this.showModal = !this.showModal;
  }
}
