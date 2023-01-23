import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceRegistryService } from '../services/service-registry.service';

@Component({
  selector: 'app-service-registry-list',
  templateUrl: './service-registry-list.component.html',
})
export class ServiceRegistryListComponent {
  serviceRegistries$!: Observable<ServiceRegistry[]>;

  constructor(private serviceRegistryService: ServiceRegistryService) {}

  ngOnInit(): void {
    // store the observable from the service containing the products data
    this.serviceRegistries$ =
      this.serviceRegistryService.getServiceRegistries();
  }

  trackById(index: number, value: ServiceRegistry) {
    return value.id;
  }
}
