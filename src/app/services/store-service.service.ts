import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {


  constructor(private httpClient: HttpClient) {
  }

  public getStoreData(id: string): Observable<any> {
    return this.httpClient.get(`${environment.basePath}stores/${id}`);
  }

  public getProductList(id: string): Observable<any> {
    return this.httpClient.get(`${environment.basePath}stores/${id}/products`);
  }

  getStats(id: string): Observable<any> {
    return this.httpClient.get(`${environment.basePath}stores/${id}/stats/categories`);
  }
}