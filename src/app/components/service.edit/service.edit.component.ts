import { Component, DestroyRef, inject, input, output } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServiceCreate } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';

@Component({
  standalone: true,
  selector: 'app-service-edit',
  templateUrl: './service.edit.component.html',
  styleUrl: './service.edit.component.scss',
  imports: [
    FormsModule,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})

export class ServiceEditComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly serviceService = inject(ServiceService);

  readonly form = new FormGroup({
    name: new FormControl('', [Validators.required])
  });
  isEdit: boolean = false;

  onCancel = output();
  onSubmitted = output();
  serviceId = input.required<number>();

  constructor() {
    toObservable(this.serviceId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(id => this.prepareEdit(id));
  }

  cancelClicked() {
    this.onCancel.emit();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.serviceService.createService(this.form.value as ServiceCreate)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          console.log('Service created successfully:', response);
          this.onSubmitted.emit();
        },
        error: (error) => {
          console.error('Error creating service:', error);
        }
      });
  }

  prepareEdit(serviceId: number) {
    this.serviceService.getService(serviceId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          console.log('Service fetched successfully:', response);
          this.form.patchValue(response);
          this.isEdit = true;
        },
        error: (error) => {
          console.error('Error fetching service:', error);
        }
      });
  }
}
