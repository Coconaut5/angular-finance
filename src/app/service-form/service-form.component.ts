import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ServiceRegistry } from '../models/service-registry.model';
import { ServiceRegistryService } from '../services/service-registry.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    NgIf,
    NgForOf,
    MatButtonModule,
    JsonPipe,
  ],
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
})
export class ServiceFormComponent implements OnInit {
  service!: ServiceRegistry;
  id!: string | null;
  @Input() isEdit!: boolean;
  @Output() create = new EventEmitter<ServiceRegistry>();
  @Output() update = new EventEmitter<ServiceRegistry>();
  @Output() delete = new EventEmitter<ServiceRegistry>();

  serviceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serviceRegistryService: ServiceRegistryService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id !== null) {
      console.log('we shouldnt get here?');
      this.serviceRegistryService.getService(this.id).subscribe(service => {
        this.service = service;

        this.serviceForm.patchValue({
          ...service,
        });
      });
    }

    const server = this.fb.group({
      host: [this?.service?.server_config?.host, [Validators.required]],
      port: [
        this?.service?.server_config?.port,
        [Validators.required, Validators.min(10), Validators.max(10000)],
      ],
    });

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
      this.create.emit(form.value);
      this.ngOnInit();
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
      this.ngOnInit();
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
