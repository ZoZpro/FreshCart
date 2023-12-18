import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private _HttpClient:HttpClient) { }


  SendForgotPassword(data:object):Observable<any>
  {
  return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',data); 
  }
  SendCode(data:object):Observable<any>
  {
  return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data); 
  }
  resetPassword(data:object):Observable<any>
  {
  return  this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data); 
  }
}
