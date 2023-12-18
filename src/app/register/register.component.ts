import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMessage: string = '';
  isLoading: boolean = false;
  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('[A-Z][A-Za-z0-9]{7,15}')]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern('[A-Z][A-Za-z0-9]{7,15}')]),
    phone: new FormControl(null, [Validators.pattern('01[125][0-9]{8}')])
  })
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  sendData(data: FormGroup) {
    this.isLoading = true;
    console.log(data.value)
    this._AuthService.register(data.value).subscribe({
      next: (res: any) => {
        if (res.message === 'success') {
          this._Router.navigate(['/login'])
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
