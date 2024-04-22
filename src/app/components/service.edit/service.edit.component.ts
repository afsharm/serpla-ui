import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
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

  @Output() onCancel = new EventEmitter();
  @Output() onSubmitted = new EventEmitter();
  @Input() serviceId!: number;

  name = new FormControl('', [Validators.required]);
  errorMessage = '';
  isEdit: boolean = false;

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

  prepareEdit(serviceId: number) {
    this.serviceService.getService(serviceId).subscribe(response => {
      console.log('Service fetched successfully:', response);
      this.name.setValue(response.name);
      this.isEdit = true;
    }, error => {
      console.error('Error fetching service:', error);
    });
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    let change: SimpleChange = changes['serviceId'];

    // Whenever the data in the parent changes, this method gets triggered
    // You can act on the changes here. You will have both the previous
    // value and the  current value here.

    this.prepareEdit(change.currentValue);
  }
}
