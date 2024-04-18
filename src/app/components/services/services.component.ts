import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';
import {
  MatTableDataSource, MatTable, MatTableModule, MatCell,
  MatHeaderCell, MatHeaderRow, MatRow
} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, LayoutComponent, CommonModule,
    MatTable, MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatFormField, MatPaginator, MatTableModule],
  providers: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {

  dataSource!: MatTableDataSource<Service>;
  displayedColumns: string[] = ['id', 'name'];

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
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
