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
var app_component_1 = require('./app.component');
var nav_component_1 = require('./nav.component');
var aside_component_1 = require('./aside.component');
var article_component_1 = require('./article.component');
var articleLooping_1 = require('./articleLooping');
var hero_list_component_1 = require('./hero-list.component');
var router_1 = require('@angular/router');
var articleLooping_service_1 = require('./articleLooping.service');
var hello_component_1 = require('./hello.component');
//import {HeroListComponent} from './input.component';
var rout = [
    { path: '', redirectTo: 'aside-bar', pathMatch: 'full' },
    { path: 'aside-bar', component: aside_component_1.AsideComponent },
    { path: 'crisis', component: hello_component_1.CrisisListComponent },
    { path: 'hero', component: hero_list_component_1.HeroListComponent },
    { path: 'crisis', component: hello_component_1.CrisisListComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(rout)
            ],
            declarations: [
                app_component_1.AppComponent,
                hero_list_component_1.HeroListComponent, articleLooping_1.ArticleShow,
                hello_component_1.CrisisListComponent, nav_component_1.NavComponent, aside_component_1.AsideComponent, articleLooping_1.ArticleLooping, article_component_1.ArticleComponent
            ],
            providers: [articleLooping_service_1.Products],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map