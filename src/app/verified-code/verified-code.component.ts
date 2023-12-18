import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../forgot-password.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verified-code',
  templateUrl: './verified-code.component.html',
  styleUrls: ['./verified-code.component.scss']
})
export class VerifiedCodeComponent implements OnInit {
  isLoading: boolean = false;
  FogetPasswordForm!: FormGroup;
  constructor(private _ForgotPasswordService: ForgotPasswordService, private _Router: Router, private _AuthService: AuthService) { }
  ngOnInit(): void {
    this.initiate();

  }
  initiate() {
    this.FogetPasswordForm = new FormGroup({
      resetCode: new FormControl(null, [Validators.required])
    });
  }
  onSubmit() {
    if(this.FogetPasswordForm.status == "VALID"){
      this._ForgotPasswordService.SendCode(this.FogetPasswordForm.value).subscribe((res) => {
        console.log(res);
        
        this._Router.navigate(['/reset-password']);
        Swal.fire(
          'Code is Verified!',
          '',
          'success'
          );
         }, (err) => {
          console.log(err);
  
          this.isLoading = true;
          debugger
        }
      )
    }


  }
}
