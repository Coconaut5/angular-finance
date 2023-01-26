import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ServiceRegistry } from '../models/service-registry.model';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
})
export class ServiceFormComponent implements OnInit {
  @Input() service!: ServiceRegistry;
  @Output() create = new EventEmitter<ServiceRegistry>();
  @Output() update = new EventEmitter<ServiceRegistry>();
  @Output() delete = new EventEmitter<ServiceRegistry>();

  serviceForm!: FormGroup;

  // Form state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const server = this.fb.group({
      host: ['', [Validators.required]],
      port: [
        '',
        [Validators.required, Validators.min(10), Validators.max(10000)],
      ],
    });

    this.serviceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required]],
      icon: ['', [Validators.required]],
      type: ['CONSUL', [Validators.required]],
      created_by: [''],
      server_config: server,
    });
  }

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

  handleCreate(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this.create.emit(form.value);
      this.loading = false;
    } else {
      form.markAllAsTouched();
    }
  }

  handleUpdate(form: FormGroup) {
    if (form.valid) {
      this.update.emit({ id: this.service.id, ...form.value });
    } else {
      form.markAllAsTouched();
    }
  }

  handleDelete() {
    if (confirm(`Do you really wish to delete ${this.service.name}?`)) {
      this.delete.emit({ ...this.service });
    }
  }

  get name() {
    return this.serviceForm.get('name');
  }
}
