import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from './model/user';

@Component({
    selector: 'sign-up',
    templateUrl: '../html/sign_up.component.html',
})
export class SignUpComponent {
    isValid = false;
    signUpTitle = 'Sign Up';
    submitted = false;
    
    username: string;
    password: string;
    firstname: string;
    surname: string;
    email: string;
    address: string;
    
    onSubmit() {
        this.submitted = true;
    }
}