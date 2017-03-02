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
// import { MenuBarComponent } from './menubar.component';
var example_service_1 = require('./service/example.service');
var BodyComponent = (function () {
    function BodyComponent(exampleService) {
        this.exampleService = exampleService;
        this.isOrder = false;
    }
    BodyComponent.prototype.getExample = function () {
        var _this = this;
        this.exampleService.getFoursquare().subscribe(function (data) {
            console.log(data);
            _this.foursquareData = data[0];
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BodyComponent.prototype, "isOrder", void 0);
    BodyComponent = __decorate([
        core_1.Component({
            selector: 'body-app',
            templateUrl: '../html/body.component.html',
        }), 
        __metadata('design:paramtypes', [example_service_1.ExampleService])
    ], BodyComponent);
    return BodyComponent;
}());
exports.BodyComponent = BodyComponent;
//# sourceMappingURL=body.component.js.map