import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  myCartNum:number = 0;
  isLogedIn: boolean = false;
  logOut(){
    this._AuthService.logOut();
  }
  constructor(private _AuthService: AuthService, private _CartService:CartService) {
    _CartService.cartNum.subscribe({
      next:(val)=>{
        console.log(val);
        this.myCartNum = val;
      }
    })
    _AuthService.userData.subscribe({
      next: () => {
        if (_AuthService.userData.getValue() !== null) {
          this.isLogedIn = true;
        } else {
          this.isLogedIn = false;
        }
      }
    })
  }

}
