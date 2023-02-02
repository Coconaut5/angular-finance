import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { ServiceRegistryService } from '../services/service-registry.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ServiceCardComponent,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
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
    private snackBar: MatSnackBar,
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
      this.snackBar.open('Item Deleted', 'Dismiss', {
        duration: 2000,
        panelClass: ['snack-test'],
      });
      this.router.navigate(['']);
    });
  }
}
