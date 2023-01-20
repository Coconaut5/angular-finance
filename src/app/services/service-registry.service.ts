import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRegistry } from '../models/service-registry.model';

const URL: string = 'http://localhost:10190/v1/service-registries';

@Injectable({
  providedIn: null,
  //providedIn: 'root',
})
export class ServiceRegistryService {
  private serviceRegistries: ServiceRegistry[] = [];

  constructor(private http: HttpClient) {}

  read() {
    return this.http.get<ServiceRegistry[]>(URL);
  }

  readOne(id: string) {}
}
