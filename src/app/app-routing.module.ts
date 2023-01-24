import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterAlgoliaComponent } from './monster-algolia/monster-algolia.component';

const routes: Routes = [
  {
    path: '',
    component: MonsterAlgoliaComponent,
  },
  {
    path: 'monster-algolia/user',
    component: MonsterAlgoliaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
