import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SerivceSingleComponent } from './serivce-single/serivce-single.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SerivceSingleComponent },
    ],
  },
  { path: 'id', component: SerivceSingleComponent },
  // should send a message the route did not exist?
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
