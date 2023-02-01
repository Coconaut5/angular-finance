import { Component } from '@angular/core';
import { ServiceListComponent } from '../service-list/service-list.component';

@Component({
  standalone: true,
  imports: [ServiceListComponent],
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  title = 'angular-finance';
}
