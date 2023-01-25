import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRegistry } from '../models/service-registry.model';
import { tap, of, Observable, map } from 'rxjs';

const URL: string = 'http://localhost:10190/v1/service-registries';

@Injectable({
  //providedIn: null,
  providedIn: 'root',
})
export class ServiceRegistryService {
  private serviceRegistries: ServiceRegistry[] = [];

  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceRegistry[]> {
    if (this.serviceRegistries.length) {
      return of(this.serviceRegistries);
    }

    return this.http
      .get<ServiceRegistry[]>(URL)
      .pipe(
        tap(serviceRegistries => (this.serviceRegistries = serviceRegistries)),
      );
  }

  getService(id: string) {
    return this.getServices().pipe(
      map(services => {
        const service = services.find(
          (service: ServiceRegistry) => service.id === id,
        );
        if (service) {
          return service;
        }

        return {
          name: '',
          description: '',
          icon: '',
          type: '',
          created_by: '',
          created_at: '',
          modifications: [],
          server_config: { host: '', port: 0 },
        };
      }),
    );
  }

  createService(payload: ServiceRegistry) {
    return this.http.post<ServiceRegistry>(URL, payload).pipe(
      tap(service => {
        this.serviceRegistries = [...this.serviceRegistries, service];
      }),
    );
  }

  updateService(payload: ServiceRegistry) {
    this.serviceRegistries = this.serviceRegistries.map(
      (service: ServiceRegistry) => {
        if (service.id === payload.id) {
          return payload;
        }
        return service;
      },
    );
    console.log(this.serviceRegistries);
  }

  deleteService(payload: ServiceRegistry) {
    this.serviceRegistries = this.serviceRegistries.filter(
      (service: ServiceRegistry) => service.id !== payload.id,
    );
  }
}
