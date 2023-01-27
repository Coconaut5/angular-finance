import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ServiceSingleComponent } from './service-single/service-single.component';
import { ServicePageComponent } from './service-page/service-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: ServiceSingleComponent },
    ],
  },
  {
    path: 'create',
    component: ServiceSingleComponent,
    data: { isEdit: false },
  },
  {
    path: 'update/:id',
    component: ServiceSingleComponent,
    data: { isEdit: true },
  },
  { path: ':id', component: ServicePageComponent },
  // should send a message the route did not exist?
  //{ path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
