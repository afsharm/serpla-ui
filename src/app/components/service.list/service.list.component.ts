import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import {
  MatTableDataSource, MatTable, MatTableModule, MatCell,
  MatHeaderCell, MatHeaderRow, MatRow
} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Service } from '../../models/service.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import _ from 'lodash';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [MatTable, MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTableModule, MatIconModule],
  templateUrl: './service.list.component.html',
  styleUrl: './service.list.component.scss'
})
export class ServiceListComponent {
  dataSource!: MatTableDataSource<Service>;
  displayedColumns: string[] = ['id', 'name', 'update', 'delete'];
  @Output() onUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor(private serviceService: ServiceService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.serviceService.getServices().subscribe(
      (services: Service[]) => {
        this.dataSource = new MatTableDataSource(services);
      },
      (error) => {
        this.matSnackBar.open(_.truncate(`Error fetching the services. ${error.message}`, { length: 100 }));
      }
    );
  }

  deleteItem(elementId: number) {
    this.serviceService.deleteService(elementId).subscribe(response => {
      this.matSnackBar.open('Service deleted successfully');
      this.refreshList();
    }, error => {
      this.matSnackBar.open(_.truncate(`Error deleting a service. ${error.message}`, { length: 100 }));
    });

  }

  updateItem(elementId: number) {
    this.onUpdate.emit(elementId);
  }
}
