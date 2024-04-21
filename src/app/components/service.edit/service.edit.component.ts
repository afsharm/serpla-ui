import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ServiceService } from '../../services/service.service';
import { ServiceCreate } from '../../models/service.model';

@Component({
  selector: 'app-service-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './service.edit.component.html',
  styleUrl: './service.edit.component.scss'
})

export class ServiceEditComponent {
  name = new FormControl('', [Validators.required]);
  errorMessage = '';
  @Output() onCancel = new EventEmitter();
  @Output() onSubmitted = new EventEmitter();

  constructor(private serviceService: ServiceService) {
    merge(this.name.statusChanges, this.name.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.name.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else {
      this.errorMessage = '';
    }
  }

  cancelClicked() {
    this.onCancel.emit();
  }

  onSubmit() {
    const serviceCreate: ServiceCreate = { name: this.name.value };

    this.serviceService.createService(serviceCreate).subscribe(response => {
      console.log('Service created successfully:', response);
      this.onSubmitted.emit();
    }, error => {
      console.error('Error creating service:', error);
    });

  }
}
