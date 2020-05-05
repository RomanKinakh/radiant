import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";
import { WorkComponent } from './features/work/work.component';
import { ServicesComponent } from './features/services/services.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { CurrentWorkInfoComponent } from './features/current-work-info/current-work-info.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
},
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'work/:title',
    component: CurrentWorkInfoComponent
  },
  {
  path: '**',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
