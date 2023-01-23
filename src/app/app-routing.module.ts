import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarsAlgoliaComponent } from './mars-algolia/mars-algolia.component';

const routes: Routes = [
  {
    path: '', component: MarsAlgoliaComponent,
  },
  {
    path: 'user', component: MarsAlgoliaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
