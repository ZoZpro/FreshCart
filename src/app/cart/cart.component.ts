import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: any;
  constructor(private _CartService: CartService , private _ToastrService:ToastrService) { }
  ngOnInit(): void {
    this.getMyCart()
  }
  getMyCart() {
    this._CartService.getLoggedUserCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cartData = res.data;
      }
    })
  }

  removeItem(id: string) {
    this._CartService.removeCartItem(id).subscribe({
      next: (res) => {
        this.cartData = res.data
        console.log(res.data); 
      },
      error: (err) => {
        console.log(err);

      },
      complete:()=>{
        this._ToastrService.success('Deleted from your cart' , 'Delete')
      }
    })
  }

  updateItemCount(id:string, count:number){
    this._CartService.updateItemCount(id,count).subscribe({
      next:(res)=>{
        this.cartData = res.data  
        console.log(res.data);
        
      },
      error:(err)=>{
        console.log(err);
        
      },
      complete:()=>{
        this._ToastrService.success('Updated your cart' , 'Updated')

      }
    })
  }
}
