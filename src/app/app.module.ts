import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared";
import { HomeComponent } from "./features/home/home.component";
import { WorkComponent } from './features/work/work.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './features/services/services.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { CurrentWorkInfoComponent } from './features/current-work-info/current-work-info.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, WorkComponent, ServicesComponent, AboutComponent, ContactComponent, CurrentWorkInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
