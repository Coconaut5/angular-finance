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

    return this.http.get<ServiceRegistry[]>(URL).pipe(
      tap(serviceRegistries => {
        console.log(serviceRegistries);
        this.serviceRegistries = serviceRegistries;
      }),
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
        return {};
      }),
    );
  }

  createService(payload: ServiceRegistry) {
    return this.http.post<ServiceRegistry>(URL, payload).pipe(
      tap(service => {
        console.log(service);
        console.log(this.serviceRegistries);
        this.serviceRegistries = [...this.serviceRegistries, service];
      }),
    );
  }

  updateService(payload: ServiceRegistry) {
    return this.http.put<ServiceRegistry>(URL, payload).pipe(
      tap(() => {
        this.serviceRegistries = this.serviceRegistries.map(
          (service: ServiceRegistry) => {
            if (service.id === payload.id) {
              return payload;
            }
            return service;
          },
        );
      }),
    );
  }

  deleteService(payload: ServiceRegistry) {
    return this.http.delete<ServiceRegistry>(`${URL}/${payload.id}`).pipe(
      tap(() => {
        this.serviceRegistries = this.serviceRegistries.filter(
          (service: ServiceRegistry) => service.id !== payload.id,
        );
      }),
    );
  }
}
