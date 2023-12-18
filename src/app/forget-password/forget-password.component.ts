import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { formatCurrency } from '@angular/common';
import { ForgotPasswordService } from './../forgot-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{
  FogetPasswordForm!:FormGroup;
  
constructor( private _ForgotPasswordService:ForgotPasswordService, private _Router:Router ) { }
isLoading: boolean = false;
ngOnInit(): void {
   this.initiate();
  
}
initiate(){
  this.FogetPasswordForm = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email])
  });
}

onSumbit(){
  if( this.FogetPasswordForm.status == "VALID"){
   this._ForgotPasswordService.SendForgotPassword(this.FogetPasswordForm.value).subscribe((res) => {
    Swal.fire(
      'Code Sent to your Email!',
      '',
      'success'
    );
    this._Router.navigate(['/verifiedCodeing']);
   },(err) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
   })
  }
}
}
