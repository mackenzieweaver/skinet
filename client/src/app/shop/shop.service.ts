import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from '../shared/models/brands';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number, sort?: string): Observable<IPagination> {
    // params object to send in url
    let params = new HttpParams();
    if (brandId) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId) {
      params = params.append('typeId', typeId.toString());
    }

    if (sort) {
      params = params.append('sort', sort);
    }
    // extract body when sending observe object
    return this.http.get<IPagination>(this.baseUrl + 'products', { observe: 'response', params })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getBrands(): Observable<IBrand[]>{
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(): Observable<IType[]>{
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
