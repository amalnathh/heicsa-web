import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  frPswEmail: string;
  hide = true;
  forgetPswd = false;
  emailLoader = false;
  action = 'ok';
  LoginToHome = true;
  abc = false;
  LoginForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl: new FormControl('', [Validators.required]),
  });
  matcher = new MyErrorStateMatcher();
  constructor(
    public authService: AuthService,
    private _snackBar: MatSnackBar,
  ) { }

  async loginAcc(): Promise<void> {
    await this.authService.login(this.email, this.password);
    if (this.authService.snackbarBool) {
      this._snackBar.open(this.authService.snackBarError, this.action, {
        duration: 4000,
      });
    }
  }

  async SendRsetMail(): Promise<void> {
    this.emailLoader = true;
    await this.authService.ForgotPassword(this.frPswEmail);
    this.emailLoader = false;
    if (this.authService.dinga) {
      this._snackBar.open(this.authService.EMess, this.action, {
        duration: 4000,
      });
    }
  }

  ngOnInit(): void { }
}
