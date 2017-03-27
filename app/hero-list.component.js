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
var articleLooping_service_1 = require('./articleLooping.service');
var HeroListComponent = (function () {
    function HeroListComponent(products) {
        this.products = products;
        this.course = [];
        this.course = this.products.groups();
    }
    HeroListComponent.prototype.onSubmit = function (url, name, tel, number, price, description, date, color) {
        this.products.insertData(url, name, tel, number, price, description, date, color);
        console.log(url, name, tel, number, price, description, date, color);
        //this.course.push({url,name,tel,number,price,description,date,color});
        //if(this.onSubmit ){
        //alert("your card is added")
        //}
    };
    HeroListComponent = __decorate([
        core_1.Component({
            selector: 'hero',
            template: "\n  \n\n\n<h1 style=\"margin-left:550px;color:silver\">Enter Your Cards</h1>\n\n<div style=\"margin-top:31px;margin-left:200px;width:1000px;border-radius: 20px;background-color:#F5F5F5;border:1px solid  black\">\n<fieldset>\n\n\n<div class=\"form-group row\">\n  <label for=\"url\" class=\"col-xs-2 col-form-label\" style=\"margin-left:0px\">URL</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"url\" placeholder=\"http://getbootstrap.com\" id=\"url\" #url>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"name\" class=\"col-xs-2 col-form-label\">Name:</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"name\" placeholder=\"daniyal\" id=\"name\" #name>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <label for=\"tel\" class=\"col-xs-2 col-form-label\">Appearance</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"tel\" placeholder=\"1-(555)-555-5555\" id=\"tel\" #tel>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <label for=\"number\" class=\"col-xs-2 col-form-label\">Number</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"number\" placeholder=\"0343-2556551\" id=\"number\" #number>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"address\" class=\"col-xs-2 col-form-label\">Address</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"tel\" placeholder=\"karachi\" id=\"address\" #price>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"description\" class=\"col-xs-2 col-form-label\">Description</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"tel\" placeholder=\"description\" id=\"description\" #description>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"date\" class=\"col-xs-2 col-form-label\">Date</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"date\" placeholder=\"2011-08-19\" id=\"date\" #date>\n  </div>\n</div>\n\n\n<div class=\"form-group row\">\n  <label for=\"color\" class=\"col-xs-2 col-form-label\">Color</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"color\" placeholder=\"#563d7c\" id=\"color\" #color>\n  </div>\n</div>\n<button (click)=\"onSubmit(url.value,name.value,tel.value,number.value,price.value,description.value,date.value,color.value)\">submit</button>\n\n"
        }), 
        __metadata('design:paramtypes', [articleLooping_service_1.Products])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map