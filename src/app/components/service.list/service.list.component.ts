import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import {
  MatTableDataSource, MatTable, MatTableModule, MatCell,
  MatHeaderCell, MatHeaderRow, MatRow
} from '@angular/material/table';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [MatTable, MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTableModule],
  templateUrl: './service.list.component.html',
  styleUrl: './service.list.component.scss'
})
export class ServiceListComponent {
  dataSource!: MatTableDataSource<Service>;
  displayedColumns: string[] = ['id', 'name'];

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

}
