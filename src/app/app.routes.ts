import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
    { 'path': '', component: HomeComponent },
    { 'path': 'services', component: ServicesComponent },
];
