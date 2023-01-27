import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ServiceRegistryListComponent } from './service-registry-list/service-registry-list.component';
import { FormsModule } from '@angular/forms';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceSingleComponent } from './service-single/service-single.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ServicePageComponent } from './service-page/service-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    LoginComponent,
    ServiceRegistryListComponent,
    ServiceCardComponent,
    ServiceSingleComponent,
    ServiceFormComponent,
    ServicePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    StoreModule.forRoot({}, {}),
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  //providers: [ServiceRegistryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
