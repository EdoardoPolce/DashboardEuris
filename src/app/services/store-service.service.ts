import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ProductDetail} from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  public reloadEvent: BehaviorSubject<boolean>;
  public columnLayout: BehaviorSubject<boolean>;
  public pageUrl: BehaviorSubject<string>;

  constructor(private httpClient: HttpClient) {
    this.columnLayout = new BehaviorSubject<boolean>(true);
    this.pageUrl = new BehaviorSubject<string>('/');
  }

  public getStoreData(id: string): Observable<any> {
    return this.httpClient.get(`${environment.basePath}stores/${id}`);
  }

  public getProductList(id: string, page: number, elements: number): Observable<any> {
    return this.httpClient.get(`${environment.basePath}stores/${id}/products?page=${page}&elements=${elements}`);
  }

  public addProduct(idStore: string, product: ProductDetail): Observable<any> {
    return this.httpClient.post(`${environment.basePath}stores/${idStore}/products`, product);
  }

  public deleteProduct(idStore: string, idProduct: string): Observable<any> {
    return this.httpClient.delete(`${environment.basePath}stores/${idStore}/products/${idProduct}`);
  }

  public getStats(id: string): Observable<any> {
    return this.httpClient.get(`${environment.basePath}stores/${id}/stats/categories`);
  }
}
