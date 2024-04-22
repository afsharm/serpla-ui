import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import {
  MatTableDataSource, MatTable, MatTableModule, MatCell,
  MatHeaderCell, MatHeaderRow, MatRow
} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Service } from '../../models/service.model';

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

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.serviceService.getServices().subscribe(
      (services: Service[]) => {
        this.dataSource = new MatTableDataSource(services);
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }

  deleteItem(elementId: number) {
    this.serviceService.deleteService(elementId).subscribe(response => {
      console.log('Service deleted successfully:', response);
      this.refreshList();
    }, error => {
      console.error('Error creating service:', error);
    });

  }

  updateItem(elementId: number) {
    this.onUpdate.emit(elementId);
  }
}
