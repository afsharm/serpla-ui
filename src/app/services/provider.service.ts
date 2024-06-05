import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider, ProviderCreate, ProviderQueryResult, ProviderUpdate } from '../models/provider.model';
import { environment } from '../../environments/environment';
import { ProviderPagingQuery } from '../models/provider.model';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {

  private baseApiUrl: string = environment.baseApiUrl;
  private providersUrl = '/provider';

  constructor(private http: HttpClient) { }

  getProviders(query: ProviderPagingQuery): Observable<ProviderQueryResult> {
    return this.http.get<ProviderQueryResult>(`${this.baseApiUrl}${this.providersUrl}?criteria=${query.criteria}&pageNumber=${query.pageNumber}&pageSize=${query.pageSize}&sortField=${query.sortField}&sortOrder=${query.sortOrder}`);
  }

  getProvider(providerId: number): Observable<Provider> {
    const url = `${this.baseApiUrl}${this.providersUrl}/${providerId}`;
    return this.http.get<Provider>(url);
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
