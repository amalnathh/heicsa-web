import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { database } from 'firebase';

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
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    emailid: string;
    password: string;
    firstName = '';
    lastName = '';
    confirmPassword: string;
    DOB: any;
    username: any;
    SignUpForm = new FormGroup({
        emailFormControl: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        nameFormControl: new FormControl('', [Validators.required]),
        lnameFormControl: new FormControl('', [Validators.required]),
        userNameFormControl: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(14),
        ]),
        passwordFormControl: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(14),
            Validators.pattern(
                /^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[!@#\$%\^&\*\(\)\_\=\+\-\{\}\[\]\<\>\,]).{8,}$/
            )
        ])
    });
    DobControl = new FormControl('', [Validators.required]);
    matcher = new MyErrorStateMatcher();
    hide = true;
    displayName = this.firstName + this.lastName;
    DateOfBirth: Date;
    minDate = new Date(1900, 1, 1);
    maxDate = new Date(2006, 12, 12);
    action = 'ok';
    usernameAvailable = false;
    constructor(public authService: AuthService, public router: Router, private _snackBar: MatSnackBar) {
    }

    usernameCheck() {
        setTimeout(() => {
            console.log('username check');
            try {
                database().ref(`usernames/${this.username}`).once('value', (s) => {
                    if ((s.val() != null) || (s.val() != undefined)) {
                        this.usernameAvailable = false;
                        console.log('username false');
                    } else {
                        this.usernameAvailable = true;
                        console.log('username true');
                    }
                })
            } catch (e) {
                console.log('Username', e)
            }
        }, 2000);
    }

    async createAcc() {
        this.displayName = this.firstName + ' ' + this.lastName;
        await this.authService.SignUp(this.emailid, this.password, this.username, this.displayName, this.DOB);
        if (this.authService.snackbarBool) {
            this._snackBar.open(this.authService.snackBarError, this.action, {
                duration: 4000,
            });
        }
    }

    ngOnInit(): void {
    }
}
