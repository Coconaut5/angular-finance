import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { IntroductionComponent } from './introduction/introduction.component';
import { DonutListComponent } from './admin/container/donut-list/donut-list.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    DonutListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
