import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  shippingForm = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })
  cartId: string = ''
  constructor(private _CartService: CartService, private _ActivatedRoute: ActivatedRoute) {
    this.cartId = _ActivatedRoute.snapshot.params['cartId']
  }
  payment(data: FormGroup) {
    this._CartService.onlinePayment(this.cartId, data.value).subscribe({
      next: (res) => {
        console.log(res.session.url);
        window.location.href = res.session.url

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
