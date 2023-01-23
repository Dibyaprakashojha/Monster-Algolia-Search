import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarsAlgoliaComponent } from './mars-algolia/mars-algolia.component';
import { NgAisModule } from 'angular-instantsearch';
import { MarsCardComponent } from './mars-card/mars-card.component';
import { MarsModalComponent } from './mars-modal/mars-modal.component';
import { MarsAutoCompleteComponent } from './mars-auto-complete/mars-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    MarsAlgoliaComponent,
    MarsCardComponent,
    MarsModalComponent,
    MarsAutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgAisModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
