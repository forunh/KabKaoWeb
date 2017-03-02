import { Component, Input, EventEmitter, Output} from '@angular/core';
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
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

    username: string;
    password: string;
    confirm_password: string;
    firstname: string;
    surname: string;
    email: string;
    address: string;

    constructor(private signUpService: SignUpService) { }

    onSubmit() {
        if (this.password === this.confirm_password) {
             // tslint:disable-next-line:max-line-length
             this.user = new User(null, this.username, this.password, this.confirm_password, this.firstname, this.surname, this.email, this.address);
            // this.signUpService.addUser(this.user).subscribe(data => {
            //     console.log(data);
            // });
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    hideModal() {
        this.closeModal.emit();
    }
}