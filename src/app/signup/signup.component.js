"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_1 = require('./model/user');
var signup_service_1 = require('./service/signup.service');
var SignUpComponent = (function () {
    function SignUpComponent(signUpService) {
        this.signUpService = signUpService;
        this.isValid = false;
        this.signUpTitle = 'Sign Up';
        this.closeModal = new core_1.EventEmitter();
    }
    SignUpComponent.prototype.onSubmit = function () {
        if (this.password == this.confirm_password) {
            this.user = new user_1.User(null, this.username, this.password, this.confirm_password, this.firstname, this.surname, this.email, this.address);
            // this.signUpService.addUser(this.user).subscribe(data => {
            //     console.log(data);
            // });
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
    };
    SignUpComponent.prototype.hideModal = function () {
        this.closeModal.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SignUpComponent.prototype, "closeModal", void 0);
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'sign-up',
            templateUrl: '../html/sign_up.component.html',
        }), 
        __metadata('design:paramtypes', [signup_service_1.SignUpService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign_up.component.js.map