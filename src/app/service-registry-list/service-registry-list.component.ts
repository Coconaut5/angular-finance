import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceRegistryService } from '../services/service-registry.service';

@Component({
  selector: 'app-service-registry-list',
  templateUrl: './service-registry-list.component.html',
})
export class ServiceRegistryListComponent {
  serviceRegistries$!: Observable<ServiceRegistry[]>;

  constructor(
    private serviceRegistryService: ServiceRegistryService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // store the observable from the service containing the products data
    this.serviceRegistries$ = this.serviceRegistryService.getServices();
  }

  trackById(index: number, value: ServiceRegistry) {
    return value.id;
  }

  onDelete(service: ServiceRegistry) {
    this.serviceRegistryService.deleteService(service).subscribe(() => {
      // something shady, if i dont have the navigate here it automatically navigates to the route id of the deleted service
      this.ngOnInit(), this.router.navigate(['']);
    });
  }
}
