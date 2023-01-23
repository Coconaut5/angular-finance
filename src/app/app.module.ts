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
import { ServiceRegistryService } from './services/service-registry.service';
import { ServiceCardComponent } from './service-card/service-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    LoginComponent,
    ServiceRegistryListComponent,
    ServiceCardComponent,
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
  ],
  //providers: [ServiceRegistryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
