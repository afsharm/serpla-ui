import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service, ServiceCreate } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  private baseApiUrl = 'http://localhost:5116';
  private getServicesUrl = '/service';
  private createServiceUrl = '/service';
  private deleteServiceUrl = '/service';

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseApiUrl + this.getServicesUrl);
  }

  createService(serviceCreate: ServiceCreate): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + this.createServiceUrl, serviceCreate);
  }

  deleteService(serviceId: number) {
    const url = `${this.baseApiUrl}${this.deleteServiceUrl}?serviceId=${serviceId}`;
    return this.http.delete<any>(url);
  }
}
