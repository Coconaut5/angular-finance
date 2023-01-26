import { Component, OnInit } from '@angular/core';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceRegistryService } from '../services/service-registry.service';

@Component({
  selector: 'app-serivce-single',
  templateUrl: './serivce-single.component.html',
})
export class SerivceSingleComponent implements OnInit {
  service!: ServiceRegistry;

  constructor(private serviceRegistryService: ServiceRegistryService) {}

  ngOnInit(): void {
    this.serviceRegistryService.getService('id');
    //.subscribe((service: ServiceRegistry) => (this.service = service));
  }

  onCreate(service: ServiceRegistry) {
    this.serviceRegistryService
      .createService(service)
      .subscribe(() => console.log('created success'));
  }

  onUpdate(service: ServiceRegistry) {
    this.serviceRegistryService
      .updateService(service)
      .subscribe(() => console.log('updated success'));
  }

  onDelete(service: ServiceRegistry) {
    this.serviceRegistryService
      .deleteService(service)
      .subscribe(() => console.log('deleted success'));
  }
}
