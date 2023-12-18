import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartNum= new BehaviorSubject(0);
pathUrl:string='https://ecommerce.routemisr.com/api/v1'

tokenHeaders:any ={
  'token':localStorage.getItem('userToken')
}
  constructor(private _HttpClient:HttpClient) {
    this.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.cartNum.next(res.numOfCartItems)
      }
    })
    
   }

  addToCart(id:string):Observable<any>{
    return this._HttpClient.post(`${this.pathUrl}/cart`,{productId:id}, {headers:this.tokenHeaders})
  }
  getLoggedUserCart():Observable<any>{
    return this._HttpClient.get(`${this.pathUrl}/cart`,{headers:this.tokenHeaders})
  }
  removeCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`${this.pathUrl}/cart/${id}`,{headers:this.tokenHeaders})
  }
  updateItemCount(id:string, count:number):Observable<any>{
    return this._HttpClient.put(`${this.pathUrl}/cart/${id}`,{
      count:count
    },{headers:this.tokenHeaders})
  }
  onlinePayment(cartId:string, data:FormGroup):Observable<any>{
    return this._HttpClient.post(`${this.pathUrl}/orders/checkout-session/${cartId}?url=http://localhost:4200`,{shippingAddress:data},{headers:this.tokenHeaders})
  }
}
