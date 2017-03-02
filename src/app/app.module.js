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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var app_component_1 = require('./app.component');
var collapse_component_1 = require('./collapse.component');
var modal_component_1 = require('./modal.component');
var menubar_component_1 = require('./menubar.component');
var body_component_1 = require('./body.component');
var order_component_1 = require('./order.component');
var sign_up_component_1 = require('./sign_up.component');
var example_service_1 = require('./service/example.service');
var signup_service_1 = require('./service/signup.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, http_1.JsonpModule, ng2_bootstrap_1.CollapseModule.forRoot(), ng2_bootstrap_1.ModalModule.forRoot()],
            declarations: [app_component_1.AppComponent, collapse_component_1.CollapseComponent, modal_component_1.ModalComponent, menubar_component_1.MenuBarComponent, body_component_1.BodyComponent, order_component_1.OrderComponent, sign_up_component_1.SignUpComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [example_service_1.ExampleService, signup_service_1.SignUpService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map