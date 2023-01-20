import { Component } from '@angular/core';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceRegistryService } from '../services/service-registry.service';

@Component({
  selector: 'app-service-registry-list',
  templateUrl: './service-registry-list.component.html',
})
export class ServiceRegistryListComponent {
  serviceRegistries!: ServiceRegistry[];

  constructor(private serviceRegistryService: ServiceRegistryService) {}

  isDataAvailable: boolean = false;

  ngOnInit(): void {
    this.serviceRegistryService.read().subscribe(
      serviceRegistries => console.log('serviceRegistries', serviceRegistries),
      registries => (this.serviceRegistries = registries),
      //() => (this.isDataAvailable = true),
      // why is below undefined?
      () => console.log(this.serviceRegistries),
    );
  }
}
