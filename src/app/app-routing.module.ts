import { CreatToolComponent } from './tool/creat-tool/creat-tool.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'organisation', component: OrganisationComponent },
  { path: 'creat-tool', component: CreatToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
