import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishListNum= new BehaviorSubject(0);
  pathUrl:string='https://ecommerce.routemisr.com/api/v1'
  tokenHeaders:any ={
    'token':localStorage.getItem('userToken')
  }
  constructor(private _HttpClient :HttpClient) { }

  addToWishlist(id:string):Observable<any>{
    return this._HttpClient.post(`${this.pathUrl}/wishlist`,{productId:id}, {headers:this.tokenHeaders})
  }
  removeWishlistItem(id:string):Observable<any>{
    return this._HttpClient.delete(`${this.pathUrl}/wishlist/${id}`,{headers:this.tokenHeaders})
  }
  getLoggedUserWishlist():Observable<any>{
    return this._HttpClient.get(`${this.pathUrl}/wishlist`,{headers:this.tokenHeaders})
  }
}
