import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string = '';
  isLoading: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('[A-Z][A-Za-z0-9]{7,15}')]),
  });
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  sendData(data: FormGroup) {
    this.isLoading = true;
    console.log(data.value)
    this._AuthService.login(data.value).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.message == 'success') {
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
