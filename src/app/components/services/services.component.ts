import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { ServicelistComponent } from '../servicelist/servicelist.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, LayoutComponent, CommonModule,
    MatFormField, MatPaginator, ServicelistComponent],
  providers: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {

  constructor() { }

}
