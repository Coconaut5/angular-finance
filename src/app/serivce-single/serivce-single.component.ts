import { Component, OnInit } from '@angular/core';
import { ServiceRegistry } from '../models/service-registry.model';

@Component({
  selector: 'app-serivce-single',
  templateUrl: './serivce-single.component.html',
})
export class SerivceSingleComponent implements OnInit {
  service!: ServiceRegistry;

  ngOnInit(): void {
    this.service;
  }

  onCreate(service: ServiceRegistry) {
    console.log('onCreate', service);
  }
}
