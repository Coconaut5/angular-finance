import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceRegistryService } from '../services/service-registry.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
})
export class ServicePageComponent implements OnInit {
  //@Input() service!: ServiceRegistry;
  service!: ServiceRegistry;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceService: ServiceRegistryService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.serviceService
      .getService(id)
      .subscribe((service: ServiceRegistry) => (this.service = service));
  }
  update() {
    this.router.navigate(['update/' + this.service.id]);
  }
}
