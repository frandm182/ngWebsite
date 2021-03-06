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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JumbotronComponent = (function () {
    function JumbotronComponent() {
        this.jbtHeading = 'Hello, world!';
        this.jbtText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
        this.jbtBtnText = 'Read more';
        this.jbtBtnUrl = 'http://test.com';
    }
    return JumbotronComponent;
}());
JumbotronComponent = __decorate([
    core_1.Component({
        selector: 'jumbotron',
        template: "\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n            <h1>{{jbtHeading}}</h1>\n            <p>{{jbtText}}</p>\n            <p><a class=\"btn btn-primary btn-lg\" href=\"{{jbtBtnUrl}}\" role=\"button\">{{jbtBtnText}}</a></p>\n        </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [])
], JumbotronComponent);
exports.JumbotronComponent = JumbotronComponent;
//# sourceMappingURL=jumbotron.component.js.map