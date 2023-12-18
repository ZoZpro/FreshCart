import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../forgot-password.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  errorMessage: string = '';
  isLoading: boolean = false;
  resetPasswordForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern('[A-Z][A-Za-z0-9]{7,15}')]),
  });
  constructor(private _ForgotPasswordService:ForgotPasswordService, private _Router:Router, private _AuthService:AuthService){}
  sendData(data: FormGroup) {
    this.isLoading = true;
    console.log(data.value)
    this._ForgotPasswordService.resetPassword(data.value).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.token != null) {
          localStorage.setItem('userToken', res.token)
          this._AuthService.decodeUserToken();
          this._Router.navigate(['/home'])
        }

      },
      error: (err) => {
        this.isLoading = false;

        this.errorMessage = err.error.message;
      },
      complete: () => {
        this.isLoading = false;

        console.log('done');

      }
    })
  }
}
