import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider, ProviderCreate, ProviderUpdate } from '../models/provider.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {

  private baseApiUrl: string = environment.baseApiUrl;
  private providersUrl = '/provider';

  constructor(private http: HttpClient) { }

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.baseApiUrl + this.providersUrl);
  }

  getProvider(providerId: number): Observable<Provider> {
    throw new Error('Method not implemented.');
  }

  createProvider(providerCreate: ProviderCreate): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + this.providersUrl, providerCreate);
  }

  deleteProvider(providerId: number) {
    const url = `${this.baseApiUrl}${this.providersUrl}?providerId=${providerId}`;
    return this.http.delete<any>(url);
  }

  updateProvider(providerUpdate: ProviderUpdate) {
    return this.http.put<any>(this.baseApiUrl + this.providersUrl, providerUpdate);
  }

}
