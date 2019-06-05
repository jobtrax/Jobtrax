import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { PreviousApplicationsComponent } from '../app/components/previous-applications/previous-applications.component';
import { FutureApplicationsComponent } from '../app/components/future-applications/future-applications.component';

const routes: Routes = [{path: 'home', component: HomeComponent},
{path: 'previousApps', component: PreviousApplicationsComponent},
{path: 'futureApps', component: FutureApplicationsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
