import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ServiceSingleComponent } from './service-single/service-single.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceRegistryService } from './services/service-registry.service';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    providers: [importProvidersFrom(HttpClientModule), ServiceRegistryService],
  },
  {
    path: 'auth',
    providers: [importProvidersFrom(HttpClientModule), ServiceRegistryService],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: ServiceSingleComponent },
    ],
  },
  {
    path: 'create',
    component: ServiceSingleComponent,
    data: { isEdit: false },
    providers: [importProvidersFrom(HttpClientModule), ServiceRegistryService],
  },
  {
    path: 'update/:id',
    component: ServiceSingleComponent,
    data: { isEdit: true },
    providers: [importProvidersFrom(HttpClientModule), ServiceRegistryService],
  },
  {
    path: ':id',
    component: ServicePageComponent,
    providers: [importProvidersFrom(HttpClientModule), ServiceRegistryService],
  },
  // should send a message the route did not exist?
  { path: '**', redirectTo: '' },
];
