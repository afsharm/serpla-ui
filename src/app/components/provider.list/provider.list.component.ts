import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Provider } from '../../models/provider.model'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProviderService } from '../../services/provider.service';
import _ from 'lodash';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-provider-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './provider.list.component.html',
  styleUrl: './provider.list.component.scss'
})
export class ProviderListComponent implements OnInit {
  dataSource!: Provider[];
  @Output() onUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor(private providerService: ProviderService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.providerService.getProviders().subscribe(
      (providers: Provider[]) => {
        this.dataSource = providers;
      },
      (error) => {
        this.matSnackBar.open(_.truncate(`Error fetching the providers. ${error.message}`, { length: 100 }));
      }
    );
  }

  updateItem(providerId: number) {
    this.onUpdate.emit(providerId);
  }
}
