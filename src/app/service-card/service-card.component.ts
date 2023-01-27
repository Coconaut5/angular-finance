import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceRegistryService } from '../services/service-registry.service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  @Input() service!: ServiceRegistry;
  @Output() delete = new EventEmitter<ServiceRegistry>();

  constructor(private serviceRegistryService: ServiceRegistryService) {}

  handleDelete() {
    if (confirm(`Do you really wish to delete ${this.service.name}?`)) {
      this.delete.emit({ ...this.service });
    }
  }
}
