import { Component, Input, ViewChild, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { ModalComponent } from '../modal/modal.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
})
export class SignUpComponent {
    message: string;
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

    constructor(private userService: UserService) { }

    public onSubmit() {
        if (this.password === this.confirm_password) {
            // tslint:disable-next-line:max-line-length
            this.isValid = true;
            this.user = new User(null, this.username, this.password, this.confirm_password, this.first_name, this.last_name, this.email, this.address);
            this.userService.addUser(this.user).catch(this.handleError).subscribe(data => {
                console.log('complete');
                this.message = 'Signup complete.';
                this.hiddenCfPassMatch = true;
                this.username = null;
                this.password = null;
                this.confirm_password = null;
                this.first_name = null;
                this.last_name = null;
                this.email = null;
                this.address = null;
            }, error => {
                this.message = error.error.message;
            });
        } else {
            this.hiddenCfPassMatch = false;
        }
    }

    public openModal() {
        this.isValid = false;
        this.modalComponent.showChildModal();
    }

    public closeModal() {
        this.modalComponent.hideChildModal();
    }

    public clearAlert() {
        this.hiddenCfPassMatch = true;
    }

    handleError(error: any) {
        return Observable.throw(error.json());
    }
}