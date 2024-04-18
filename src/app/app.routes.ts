import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
    { 'path': '', component: AdminComponent },
    { 'path': 'services', component: ServicesComponent },
];
