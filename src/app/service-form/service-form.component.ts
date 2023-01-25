import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ServiceRegistry } from '../models/service-registry.model';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
})
export class ServiceFormComponent {
  @Input() service!: ServiceRegistry;
  @Output() create = new EventEmitter<ServiceRegistry>();
  @Output() update = new EventEmitter<ServiceRegistry>();
  @Output() delete = new EventEmitter<ServiceRegistry>();

  icons: string[] = [
    'community-comments-svgrepo-com',
    'event-gift-svgrepo-com',
    'information-svgrepo-com',
    'join-membership-svgrepo-com',
    'photo-album-svgrepo-com',
    'recruitment-svgrepo-com',
    'residential-area-svgrepo-com',
    'second-hand-transaction-svgrepo-com',
  ];

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({ id: this.service.id, ...form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleDelete() {
    if (confirm(`Do you really wish to delete ${this.service.name}?`)) {
      this.delete.emit({ ...this.service });
    }
  }

  serviceForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    icon: new FormControl(''),
    created_by: new FormControl(''),
    server_confing: new FormGroup({
      host: new FormControl(''),
      port: new FormControl(),
    }),
    type: new FormControl(''),
  });
}
