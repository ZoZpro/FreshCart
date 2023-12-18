import { Component } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, elementAt } from 'rxjs';
import { Products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishListData: any;
  constructor(private _WishlistService: WishlistService, private _ToastrService: ToastrService, private _CartService:CartService) { }
  ngOnInit(): void {
    this.getMyWishList()
  }
  getMyWishList() {
    this._WishlistService.getLoggedUserWishlist().subscribe({
      next: (res) => {
        console.log(res);
        this.wishListData = res.data;
      }, error: (err) => {
        console.log(err);

      }
    })
  }

  removeItem(id: string) {
    this._WishlistService.removeWishlistItem(id).subscribe({
      next: (res) => {
        this._WishlistService.wishListNum.next(res.data)
        console.log(res.data);
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {
        this._ToastrService.success('Deleted from your wishlist', 'Delete');
        this.getMyWishList();
      }
    })
  }

  addToCart(){
    this.wishListData.forEach((x : any) => {
      this._CartService.addToCart(x.id).subscribe((res) => {
        this.removeItem(x.id);
        this._ToastrService.success('Added to Cart');
      },(err) => {
        alert('Error');
      })
    });
    this.getMyWishList();
  }

}
