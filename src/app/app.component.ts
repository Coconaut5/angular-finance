import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss'],
})
export class AppComponent {}
