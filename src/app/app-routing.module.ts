import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'radiant',
    component: HomeComponent
  },
  {
  path: '**',
  redirectTo: 'radiant'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
