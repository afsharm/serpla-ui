import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { ServiceListComponent } from '../service.list/service.list.component';
import { ServiceEditComponent } from '../service.edit/service.edit.component';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, LayoutComponent, CommonModule,
    MatFormField, MatPaginator, ServiceListComponent, ServiceEditComponent],
  providers: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {

  showEditComponent: boolean = false;

  constructor() { }

  addServiceClicked() {
    this.showEditComponent = true;
  }

  serviceEditCancel() {
    this.showEditComponent = false;
  }

  serviceEditSubmitted() {
    this.showEditComponent = false;
  }
}
