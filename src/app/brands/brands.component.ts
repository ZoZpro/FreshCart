import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Brands } from '../brands';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
constructor(private _ProductsService:ProductsService){}
Brands: Brands[]=[];
ngOnInit(): void {
  this._ProductsService.getBrands().subscribe({
    next:(res)=>{
      console.log(res);
      this.Brands= res.data
    },error:(err)=>{
      console.log(err);
      
    }
  })
}

showBrand(record:Brands){
  Swal.fire({
    position:'top',
    html:
    `<span class="fw-bolder text-main">${record.name}</span>
    <span>${record.slug}</span>` +
    ` 
      <span><img src="${record.image}"/></span>
      ` ,
      showCloseButton: true,
    showCancelButton: true,
    
    showConfirmButton: false,
    focusConfirm: false,
    cancelButtonText:'Close'
  })
}

}
