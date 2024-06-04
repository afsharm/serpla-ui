import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProvidersComponent } from './components/providers/providers.component';

export const routes: Routes = [
    { 'path': '', component: HomeComponent },
    { 'path': 'services', component: ServicesComponent },
    { 'path': 'providers', component: ProvidersComponent },
];
