import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { ServiceRegistry } from '../models/service-registry.model';
import { tap, of, Observable, map, catchError, throwError, retry } from 'rxjs';

const URL: string = 'http://localhost:10190/v1/service-registries';

@Injectable({
  //providedIn: null,
  providedIn: 'root',
})
export class ServiceRegistryService {
  private serviceRegistries: ServiceRegistry[] = [];
  private serviceRegistry!: ServiceRegistry;

  constructor(private http: HttpClient) {}

  // this can be used to put headers for example to access a remote API with your api key
  // return this.http.get<ServiceRegistry[]>(URL, options)

  /*  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Api-Token': '2321312',
  }); */
  /* options = {
    headers,
    },
  }; */

  getServices(): Observable<ServiceRegistry[]> {
    if (this.serviceRegistries.length) {
      return of(this.serviceRegistries);
    }

    return this.http.get<ServiceRegistry[]>(URL).pipe(
      tap(serviceRegistries => {
        console.log(serviceRegistries);
        this.serviceRegistries = serviceRegistries;
      }),
      retry({ count: 2, delay: 5000 }),
      catchError(this.handleError),
    );
  }

  getService(id: string | null) {
    return this.http.get<ServiceRegistry>(`${URL}/${id}`).pipe(
      tap(service => {
        console.log(service);
        this.serviceRegistry = service;
      }),
      retry({ count: 2, delay: 5000 }),
      catchError(this.handleError),
    );
    // Using state to get a single service
    /* 
    return this.getServices().pipe(
      map(services => {
        const service = services.find(
          (service: ServiceRegistry) => service.id === id,
        );
        if (service) {
          return service;
        }
        return {} as ServiceRegistry;
      }),
    ); */
  }

  createService(payload: ServiceRegistry) {
    return this.http.post<ServiceRegistry>(URL, payload).pipe(
      tap(service => {
        console.log(service);
        console.log(this.serviceRegistries);
        this.serviceRegistries = [...this.serviceRegistries, service];
      }),
      catchError(this.handleError),
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
      catchError(this.handleError),
    );
  }

  deleteService(payload: ServiceRegistry) {
    return this.http.delete<ServiceRegistry>(`${URL}/${payload.id}`).pipe(
      tap(() => {
        this.serviceRegistries = this.serviceRegistries.filter(
          (service: ServiceRegistry) => service.id !== payload.id,
        );
      }),
      catchError(this.handleError),
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.warn(err);
    if (err.error instanceof ErrorEvent) {
      // client-side
      console.warn('Client', err.message);
    } else {
      // server-side
      console.warn('Server', err.status);
    }
    return throwError(() => new Error(err.message));
  }
}
