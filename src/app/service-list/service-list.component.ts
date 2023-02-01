import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { ServiceRegistryService } from '../services/service-registry.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ServiceCardComponent,
    MatProgressSpinnerModule,
    NgFor,
    NgIf,
    AsyncPipe,
  ],
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
})
export class ServiceListComponent {
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
      this.router.navigate(['']);
    });
  }
}
