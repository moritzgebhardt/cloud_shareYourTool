import { ToolComponent } from './tool/tool.component';
import { CreatOrganisationComponent } from './organisation/creat-organisation/creat-organisation.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateToolComponent } from './tool/create-tool/create-tool.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'organisation', component: OrganisationComponent },
  { path: 'tool', component: ToolComponent},
  { path: 'create-tool', component: CreateToolComponent},
  { path: 'create-organisation', component: CreatOrganisationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
