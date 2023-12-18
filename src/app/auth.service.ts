import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router:Router) { 
    if(localStorage.getItem('userToken')!==null){
      this.decodeUserToken();    
    }
  }
logOut(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._Router.navigate(['/login'])
}
  decodeUserToken(){
    let encoded:string = JSON.stringify(localStorage.getItem('userToken'));
   let decoded :any = jwtDecode(encoded)
   this.userData.next(decoded);
   
  }
  register(data:FormGroup): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
  }
  login(data:FormGroup): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
  }

}
