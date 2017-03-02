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
var http_1 = require("@angular/http");
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
var ExampleService = (function () {
    function ExampleService(http) {
        this.http = http;
    }
    ExampleService.prototype.getFoursquare = function () {
        return Rx_1.Observable.forkJoin(this.http.get('https://api.foursquare.com/v2/venues/4c034d0cf56c2d7fa6c71c66/?client_id=2ANDJSV5P2FT3GNVOQNSDQQSPJ5XRNO5XQR2COKWNG0I1K5C&client_secret=NXTDWJVI4RNEKJIBAUIQBKCHL1IWYIJST1YOKOJOYFWNY4KT&v=20161019&limit=500')
            .map(function (res) { return res.json(); }));
    };
    ExampleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ExampleService);
    return ExampleService;
}());
exports.ExampleService = ExampleService;
//# sourceMappingURL=example.service.js.map