import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { ServiceListComponent } from '../service.list/service.list.component';
import { ServiceEditComponent } from '../service.edit/service.edit.component';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, CommonModule,
    MatFormField, MatPaginator, ServiceListComponent, ServiceEditComponent],
  providers: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {

  showEditComponent: boolean = false;
  @ViewChild(ServiceListComponent) serviceListComponent!: ServiceListComponent;
  toServiceId!: number;

  constructor() { }

  addServiceClicked() {
    this.showEditComponent = true;
    this.toServiceId = -1;
  }

  serviceEditCancel() {
    this.showEditComponent = false;
  }

  serviceEditSubmitted() {
    this.serviceListComponent.refreshList();
    this.showEditComponent = false;
  }

  onUpdateService($event: any) {
    console.log('serviceId', $event);
    this.showEditComponent = true;
    this.toServiceId = $event;
  }
}
