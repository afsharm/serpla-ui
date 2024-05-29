import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service, ServiceCreate, ServiceUpdate } from '../models/service.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private baseApiUrl: string = environment.baseApiUrl;
  private servicesUrl = '/service';

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseApiUrl + this.servicesUrl);
  }

  getService(serviceId: number): Observable<Service> {
    const url = `${this.baseApiUrl}${this.servicesUrl}/${serviceId}`;
    return this.http.get<Service>(url);
  }

  createService(serviceCreate: ServiceCreate): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + this.servicesUrl, serviceCreate);
  }

  deleteService(serviceId: number) {
    const url = `${this.baseApiUrl}${this.servicesUrl}?serviceId=${serviceId}`;
    return this.http.delete<any>(url);
  }

  updateService(serviceUpdate: ServiceUpdate) {
    return this.http.put<any>(this.baseApiUrl + this.servicesUrl, serviceUpdate);
  }
}
