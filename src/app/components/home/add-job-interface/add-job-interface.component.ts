import { Component, OnInit, Input } from '@angular/core';
import { AddJobInterfaceService } from '../../../services/home/add-job-interface.service';

@Component({
  selector: 'app-add-job-interface',
  templateUrl: './add-job-interface.component.html',
  styleUrls: ['./add-job-interface.component.css']
})
export class AddJobInterfaceComponent implements OnInit {
  constructor(public addJobInterfaceService: AddJobInterfaceService) { }
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
    console.log(this.addJobInterfaceService.jobTitle,
      this.addJobInterfaceService.jobDescription,
      this.addJobInterfaceService.jobUrl,
      this.addJobInterfaceService.dateApplied);

    this.addJobInterfaceService.jobTitle = '';
    this.addJobInterfaceService.jobDescription = '';
    this.addJobInterfaceService.jobUrl = '';
    this.addJobInterfaceService.dateApplied = 'mm/dd/yyyy';
    this.generateInspirationalQuote();
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
