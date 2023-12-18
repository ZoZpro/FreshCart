import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsList: Products[] = [];
  term:string ='';
  constructor(private _ProductsService: ProductsService, private _CartService:CartService , private _ToastrService:ToastrService, private _WishlistService:WishlistService) { }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this._ProductsService.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.productsList = res.data
      }
    })
  }
  addToMyCart(id:string){
    this._CartService.addToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._CartService.cartNum.next(res.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
        
      },
      complete:()=>{
        this._ToastrService.success('Added to Your Cart', 'Success',{
          closeButton:true,
          progressBar:true,
          toastClass: 'toast-custom',
        });
      }
    })
  }
addToMyWishList(id:string){
  this._WishlistService.addToWishlist(id).subscribe({
    next:(res)=>{
      this._WishlistService.wishListNum.next(res)
    },error:(err)=>{
      console.log(err);
    },complete:()=>{
      document.getElementById(id)?.classList.add("text-danger");
      this._ToastrService.success('Added to Your Wishlist', 'Success',{
        closeButton:true,
        progressBar:true,
        toastClass: 'toast-custom',
      });
    }
  })
}
}
