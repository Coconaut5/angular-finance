/// <reference types="@angular/localize" />

import { importProvidersFrom } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      RouterModule.forRoot(AppRoutes),
      BrowserAnimationsModule,
    ]),
  ],
}).catch(err => console.error(err));
