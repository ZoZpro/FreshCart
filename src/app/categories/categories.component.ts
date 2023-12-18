import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  constructor(private _ProductsService: ProductsService) { }
  ngOnInit(): void {
    this._ProductsService.getCateogries().subscribe({
      next: (res: any) => {
        this.categories = res.data
      }
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText: ['<i class="fa-solid fa-arrow-alt-circle-left"></i>', '<i class="fa-solid fa-arrow-alt-circle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
