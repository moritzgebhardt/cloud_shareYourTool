import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { ToolComponent } from './tool/tool.component';
import { CreatOrganisationComponent } from './organisation/creat-organisation/creat-organisation.component';
import { CreatToolComponent } from './tool/creat-tool/creat-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrganisationComponent,
    ToolComponent,
    CreatOrganisationComponent,
    CreatToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
