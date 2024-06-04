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

}
