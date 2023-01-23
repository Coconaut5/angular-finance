import { Component, Input } from '@angular/core';
import { ServiceRegistry } from '../models/service-registry.model';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  /*styles: [
    `
      :host {
        display: block;
        border: 4px solid pink;
      }
    `,
  ], */
})
export class ServiceCardComponent {
  @Input() service!: ServiceRegistry;

  constructor() {}
}
