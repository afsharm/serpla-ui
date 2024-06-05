import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProviderCreate, ProviderUpdate } from '../../models/provider.model';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/service.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-provider-edit',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './provider.edit.component.html',
  styleUrl: './provider.edit.component.scss'
})
export class ProviderEditComponent implements OnInit {

  @Output() onCancel = new EventEmitter();
  @Output() onSubmitted = new EventEmitter();
  @Input() providerId!: number;

  isEdit: boolean = false;
  providerEditId!: number;

  entity: ProviderCreate = {
    name: null,
    serviceId: null
  };

  servicesList: Service[] | undefined;


  constructor(private providerService: ProviderService, private serviceService: ServiceService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(
      (services: Service[]) => {
        this.servicesList = services;
      },
      (error) => {
        this.matSnackBar.open(_.truncate(`Error fetching the services. ${error.message}`, { length: 100 }));
      }
    );
  }

  resetFields() {
    console.log('resetFields');
    this.isEdit = false;
    this.providerEditId = 0;
  }

  cancelClicked() {
    this.resetFields();
    this.onCancel.emit();
  }

  onSubmit() {

    if (this.isEdit) {
      const providerUpdate: ProviderUpdate = { id: this.providerEditId, name: this.entity.name };

      this.providerService.updateProvider(providerUpdate).subscribe(response => {
        this.matSnackBar.open('Provider updated successfully:');
        this.onSubmitted.emit();
      }, error => {
        this.matSnackBar.open(_.truncate(`Error updating provider. ${error.message}`, { length: 100 }));
      });
    }
    else {
      const providerCreate: ProviderCreate = { name: this.entity.name, serviceId: this.entity.serviceId };

      this.providerService.createProvider(providerCreate).subscribe(response => {
        this.matSnackBar.open('Provider created successfully');
        this.onSubmitted.emit();
      }, error => {
        this.matSnackBar.open(_.truncate(`Error creating provider. ${error.message}`, { length: 100 }));
      });
    }

  }

  prepareEdit(providerId: number) {
    this.providerService.getProvider(providerId).subscribe(response => {
      console.log('Provider fetched successfully:', response);
      this.entity.name = response.name;
      this.isEdit = true;
      this.providerEditId = providerId;
    }, error => {
      console.error('Error fetching provider:', error);
    });
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    let change: SimpleChange = changes['providerId'];

    // Whenever the data in the parent changes, this method gets triggered
    // You can act on the changes here. You will have both the previous
    // value and the  current value here.

    if (change.currentValue > 0)
      this.prepareEdit(change.currentValue);
  }

}
