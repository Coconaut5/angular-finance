import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, MatIconModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
