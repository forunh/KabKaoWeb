import { Component, Input, ViewChild, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';
import { SignUpService } from '../service/signup.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
})
export class SignUpComponent {
    user: User;
    isValid = false;
    hiddenCfPassMatch = true;
    signUpTitle = 'Sign Up';
    @ViewChild('signUpModal')
    private modalComponent: ModalComponent;

    username: string;
    password: string;
    confirm_password: string;
    first_name: string;
    last_name: string;
    email: string;
    address: string;

    constructor(private signUpService: SignUpService) { }

    onSubmit() {
        if (this.password === this.confirm_password) {
            // tslint:disable-next-line:max-line-length
            this.user = new User(null, this.username, this.password, this.confirm_password, this.first_name, this.last_name, this.email, this.address);
            this.signUpService.addUser(this.user).subscribe(data => {
                console.log(data);
            });
            this.isValid = true;
            this.hiddenCfPassMatch = true;
            this.username = null;
            this.password = null;
            this.confirm_password = null;
            this.first_name = null;
            this.last_name = null;
            this.email = null;
            this.address = null;
        } else {
            this.hiddenCfPassMatch = false;
            this.isValid = false;
        }
    }

    openModal() {
        this.isValid = false;
        this.modalComponent.showChildModal();
    }

    closeModal() {
        this.modalComponent.hideChildModal();
    }

    clearAlert() {
        this.hiddenCfPassMatch = true;
    }
}