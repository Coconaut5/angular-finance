import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceRegistryService } from '../services/service-registry.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NgIf],
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
