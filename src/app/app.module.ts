import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonsterAlgoliaComponent } from './monster-algolia/monster-algolia.component';
import { NgAisModule } from 'angular-instantsearch';
import { MonsterCardComponent } from './monster-card/monster-card.component';
import { MonsterModalComponent } from './monster-modal/monster-modal.component';
import { MonsterAutoCompleteComponent } from './monster-auto-complete/monster-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterAlgoliaComponent,
    MonsterCardComponent,
    MonsterModalComponent,
    MonsterAutoCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgAisModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
