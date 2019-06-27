import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { PreviousApplicationsComponent } from './components/previous-applications/previous-applications.component';
import { FutureApplicationsComponent } from './components/future-applications/future-applications.component';
import { AddJobInterfaceComponent } from './components/home/add-job-interface/add-job-interface.component';
import { JobsGraphInterfaceComponent } from './components/home/jobs-graph-interface/jobs-graph-interface.component';
import $ from 'jquery';
import { GraphNavigationInterfaceComponent } from './components/graph-navigation-interface/graph-navigation-interface.component';
import * as d3 from 'd3';
import { GraphEyesComponent } from './components/graph-eyes/graph-eyes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PreviousApplicationsComponent,
    FutureApplicationsComponent,
    AddJobInterfaceComponent,
    JobsGraphInterfaceComponent,
    GraphNavigationInterfaceComponent,
    GraphEyesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
