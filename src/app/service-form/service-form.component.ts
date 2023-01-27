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
  @Input() isEdit!: boolean;
  @Output() create = new EventEmitter<ServiceRegistry>();
  @Output() update = new EventEmitter<ServiceRegistry>();
  @Output() delete = new EventEmitter<ServiceRegistry>();

  serviceForm!: FormGroup;

  // Form state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.service);
    const server = this.fb.group({
      host: [this?.service?.server_config?.host, [Validators.required]],
      port: [
        this?.service?.server_config?.port,
        [Validators.required, Validators.min(10), Validators.max(10000)],
      ],
    });

    // the default value that gets passed in /update/:id dissappears when reloading page
    this.serviceForm = this.fb.group({
      name: [
        this?.service?.name,
        [Validators.required, Validators.minLength(2)],
      ],
      description: [this?.service?.description, [Validators.required]],
      icon: [this?.service?.icon, [Validators.required]],
      type: ['CONSUL', [Validators.required]],
      created_by: [this?.service?.created_by],
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
    const updated: ServiceRegistry = {
      id: this.service.id,
      modified_by: 'temp',
      ...form.value,
    };

    delete updated.created_by;

    if (form.valid) {
      this.update.emit(updated);
    } else {
      form.markAllAsTouched();
    }
  }

  get name() {
    return this.serviceForm.get('name');
  }
  get description() {
    return this.serviceForm.get('description');
  }
}
