import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { 'path': '', component: AdminComponent },
    { 'path': 'services', component: ServicesComponent },
];
