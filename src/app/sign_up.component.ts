import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from './model/user';
import { SignUpService } from './service/signup.service';

@Component({
    selector: 'sign-up',
    templateUrl: '../html/sign_up.component.html',
})
export class SignUpComponent {
    user: User;
    isValid = false;
    signUpTitle = 'Sign Up';
    
    username: string;
    password: string;
    confirm_password: string;
    firstname: string;
    surname: string;
    email: string;
    address: string;

    constructor(private signUpService: SignUpService) { }
    
    onSubmit() {
        this.user = new User(null, this.username, this.password, this.confirm_password, this.firstname, this.surname, this.email, this.address);
        this.signUpService.addUser(this.user).subscribe(data => {
            console.log(data);
        });
    }
}