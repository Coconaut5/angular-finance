import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRegistry } from '../models/service-registry.model';
import { tap, of, Observable } from 'rxjs';

const URL: string = 'http://localhost:10190/v1/service-registries';

@Injectable({
  //providedIn: null,
  providedIn: 'root',
})
export class ServiceRegistryService {
  private serviceRegistries: ServiceRegistry[] = [];

  constructor(private http: HttpClient) {}

  getServiceRegistries(): Observable<ServiceRegistry[]> {
    if (this.serviceRegistries.length) {
      return of(this.serviceRegistries);
    }

    return this.http
      .get<ServiceRegistry[]>(URL)
      .pipe(
        tap(serviceRegistries => (this.serviceRegistries = serviceRegistries)),
      );
  }

  readOne(id: string) {}
}
