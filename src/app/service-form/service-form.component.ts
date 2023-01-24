import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceRegistry } from '../models/service-registry.model';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
})
export class ServiceFormComponent {
  @Input() service!: ServiceRegistry;
  @Output() create = new EventEmitter<ServiceRegistry>();

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

  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }
}
