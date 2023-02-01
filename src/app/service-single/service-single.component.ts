import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceFormComponent } from '../service-form/service-form.component';
import { ServiceRegistryService } from '../services/service-registry.service';

@Component({
  standalone: true,
  imports: [ServiceFormComponent],
  selector: 'app-serivce-single',
  templateUrl: './service-single.component.html',
})
export class ServiceSingleComponent implements OnInit {
  //service!: ServiceRegistry;
  isEdit!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceRegistryService: ServiceRegistryService,
  ) {}

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.data['isEdit'];
  }

  onCreate(service: ServiceRegistry) {
    this.serviceRegistryService
      .createService(service)
      .subscribe(() => this.router.navigate(['']));
  }

  onUpdate(service: ServiceRegistry) {
    this.serviceRegistryService.updateService(service).subscribe({
      next: () => this.router.navigate([service.id]),
      error: err => console.log('onUpdate error', err),
    });
  }

  onDelete(service: ServiceRegistry) {
    this.serviceRegistryService
      .deleteService(service)
      .subscribe(() => console.log('oops deleted'));
  }
}
