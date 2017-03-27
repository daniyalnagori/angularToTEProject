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
var Products = (function () {
    function Products(name, price) {
        this.name = name;
        this.price = price;
    }
    return Products;
}());
exports.Products = Products;
var ArticleLooping = (function () {
    function ArticleLooping() {
        this.product = [];
        this.product = [new Products("daniyal", "gulshan-iqbal"), new Products("Fasih", "karachi")];
    }
    ArticleLooping.prototype.articleAdd = function (name, price) {
        console.log("the name is " + name.value);
        this.product.push(new Products(name.value, price.value));
    };
    ArticleLooping = __decorate([
        core_1.Component({
            selector: 'loop',
            template: "\n    <div style=\"background-color:white\" id=\"closeAll\">\n    <input type=\"text\" #name>\n    <input type=\"text\" #price>\n   \n<button (click)=\"articleAdd(name,price);\">save</button>\n</div>\n<div> \n <reddit-article \n *ngFor=\"let article of product\" \n[product]=\"article\">\n </reddit-article> \n</div> \n",
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleLooping);
    return ArticleLooping;
}());
exports.ArticleLooping = ArticleLooping;
var ArticleShow = (function () {
    function ArticleShow() {
    }
    ArticleShow.prototype.getIt = function () {
    };
    ArticleShow = __decorate([
        core_1.Component({
            selector: 'reddit-article ',
            inputs: ['product'],
            template: "\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-5\" style=\"background-color:white;margin-left:20px;border:1px solid black;\">\n        \n        <div style=\"margin-left:0px;height:230px;width:100px\">\n            <img src=\"images/teamofteams.png\" width=\"70px\" height=\"70px\" style=\"margin-left:30px\">\n            <h4 style=\"margin-top:25px;margin-left:40px;color:blue\">{{product.name}}</h4>\n            <div>\n          <div class=\"col-sm-3\">  <img src=\"images/location.jpg\" width=\"30px\" height=\"30\" style=\"margin-left:10px\"></div>\n<div class=\"col-sm-3\" style=\"margin-left:10px\">{{product.price}}</div>\n</div>\n<div class=\"col-sm-4\" style=\"margin-top:20px\">\n   <img src=\"images/profile.png\" style=\"width:40px;height:40px;\">\n  </div>   \n  <div class=\"col-sm-2\" style=\"margin-top:20px; margin-left:4px\">\n      0%\n  </div>\n     \n        </div>\n        \n    </div>\n    \n\n\n    <div class=\"col-sm-5\" style=\"margin-top:4px;background-color:white;margin-left:0px;border:1px solid black;margin-left:8px;\">\n\n        <div style=\"margin-left:0px;height:230px;width:100px\">\n            <img src=\"images/teamofteams.png\" width=\"70px\" height=\"70px\" style=\"margin-left:30px\">\n            <h4 style=\"margin-top:25px;margin-left:40px;color:blue\">{{product.name}}</h4>\n            <div>\n          <div class=\"col-sm-3\">  <img src=\"images/location.jpg\" width=\"30px\" height=\"30\" style=\"margin-left:10px\"></div>\n<div class=\"col-sm-3\" style=\"margin-left:10px\">{{product.price}}</div>\n</div>\n<div class=\"col-sm-4\" style=\"margin-top:20px\">\n   <img src=\"images/profile.png\" style=\"width:40px;height:40px;\">\n  </div>   \n  <div class=\"col-sm-2\" style=\"margin-top:20px; margin-left:4px\">\n      1%\n  </div>\n     \n        </div>\n    </div>\n\n  </div>\n  </div>\n         \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleShow);
    return ArticleShow;
}());
exports.ArticleShow = ArticleShow;
//# sourceMappingURL=articleLooping.js.map