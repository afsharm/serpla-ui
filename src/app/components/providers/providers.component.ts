import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { ProviderListComponent } from '../provider.list/provider.list.component';
import { ProviderEditComponent } from '../provider.edit/provider.edit.component';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, CommonModule,
    MatFormField, MatPaginator, ProviderListComponent, ProviderEditComponent],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})

export class ProvidersComponent {

  showEditComponent: boolean = false;
  @ViewChild(ProviderListComponent) providerListComponent!: ProviderListComponent;
  toProviderId!: number;

  addProviderClicked() {
    this.showEditComponent = true;
    this.toProviderId = -1;
  }

  providerEditCancel() {
    this.showEditComponent = false;
  }

  providerEditSubmitted() {
    this.providerListComponent.refreshList();
    this.showEditComponent = false;
  }

  onUpdateProvider($event: any) {
    console.log('providerId', $event);
    this.showEditComponent = true;
    this.toProviderId = $event;
  }
}
