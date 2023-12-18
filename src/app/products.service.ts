import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
getAllProducts():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
}
getProductById(id:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}
getCateogries():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
}
getBrands():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
}
}
