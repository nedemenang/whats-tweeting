(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/guards/authentication.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__["FlashMessagesModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment_dev__WEBPACK_IMPORTED_MODULE_14__["environment"].apiKey
                })
            ],
            providers: [
                _services_validation_service__WEBPACK_IMPORTED_MODULE_15__["ValidationService"],
                _services_query_service__WEBPACK_IMPORTED_MODULE_16__["QueryService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"],
                _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nagm-map {\n    height: 500px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGNBQWM7R0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmFnbS1tYXAge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"lat && lng\">\n\n\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" (mapClick)=\"onChooseLocation($event)\">\n    <agm-marker\n    [latitude]=\"lat\"\n    [longitude]=\"lng\"\n    [iconUrl]=\"'assets/images/icons8-twitter-48.png'\">\n        <agm-info-window>\n            <h3><strong>Howdy!</strong></h3>\n            <p>Searching from here!</p>\n        </agm-info-window>\n</agm-marker>\n</agm-map>\n\n\n  <div class=\"row\">\n    <div class=\"col s4\">\n      <ul class=\"collection with-header\">\n        <li class=\"collection-header\"><h4>Trends</h4></li>\n      <li class=\"collection-item\" *ngFor=\"let trend of trends\">\n          <a href=\"https://twitter.com/search?q={{trend.query}}\" target=\"_blank\">{{ trend.name }}</a><br>\n      </li>\n    </ul>\n    </div>\n    <div class=\"col s4\">\n      <ul class=\"collection with-header\">\n        <li class=\"collection-header\"><h4>Tweets</h4></li>\n        <li class=\"collection-item\" *ngFor=\"let tweet of tweets\">\n            <img src={{tweet.user.profileImage}} alt=\"\" class=\"circle\">\n            <span class=\"title\">{{ tweet.user.name }}</span> - \n            <span class=\"title\">@{{ tweet.user.screenName }}</span>\n            <p>{{ tweet.text }}</p><br>\n            <a href=\"https://twitter.com/{{tweet.user.screenName}}/status/{{tweet.idString}}\" target=\"_blank\">View Status</a><br>\n          </li>\n          </ul>\n      </div>\n\n      <div class=\"col s4\">\n        <ul class=\"collection with-header\">\n          <li class=\"collection-header\"><h4>Users</h4></li>\n          <li class=\"collection-item\" *ngFor=\"let user of users\">\n            <img src={{user.profileImage}} alt=\"\" class=\"circle\">\n            <span class=\"title\">{{ user.name }}</span>\n            <p>@{{user.screenName}}<br>\n              {{user.description}}<br>\n              {{user.location}}<br>\n              <a href=\"https://twitter.com/{{user.screenName}}\" target=\"_blank\">Twitter profile</a><br>\n            </p>\n          </li>\n          </ul>\n        </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(queryService, router, flashMessage) {
        this.queryService = queryService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.lat = 6.51873660071218;
        this.lng = 3.3731851104219004;
        this.q = "KabirSingh";
        this.geocode = "";
        this.searchRadius = 5;
        this.locationChosen = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getUserLocation();
    };
    DashboardComponent.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
    };
    DashboardComponent.prototype.onChooseLocation = function (event) {
        var _this = this;
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        this.locationChosen = true;
        this.geocode = this.lat + ',' + this.lng + ',' + this.searchRadius + "km";
        this.queryService.getTrends(this.lat, this.lng).subscribe(function (data) {
            _this.trends = data;
        }, function (error) {
            _this.flashMessage.show(error._body, {
                cssClass: 'card-panel red',
                timeout: 6000
            });
            _this.router.navigate(['/dashboard']);
        });
        this.queryService.getTweets(this.geocode).subscribe(function (data) {
            _this.tweets = data;
        }, function (error) {
            _this.flashMessage.show(error._body, {
                cssClass: 'card-panel red',
                timeout: 6000
            });
            _this.router.navigate(['/dashboard']);
        });
        this.queryService.getUsers(this.geocode).subscribe(function (data) {
            _this.users = lodash__WEBPACK_IMPORTED_MODULE_4__["uniqWith"](data, lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"]);
        }, function (error) {
            _this.flashMessage.show(error._body, {
                cssClass: 'card-panel red',
                timeout: 6000
            });
            _this.router.navigate(['/dashboard']);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_1__["QueryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n        width: -webkit-fill-available;\n}\n\n#overlay {\n    position: fixed; /* Sit on top of the page content */\n    top: 0; \n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5); /* Black background with opacity */\n    z-index: -2; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLDhCQUE4QjtDQUNyQzs7QUFFRDtJQUNJLGdCQUFnQixDQUFDLG9DQUFvQztJQUNyRCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0NBQWtDLENBQUMsbUNBQW1DO0lBQ3RFLFlBQVksQ0FBQyxxRkFBcUY7SUFDbEcsZ0JBQWdCLENBQUMsNEJBQTRCO0NBQ2hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbiNvdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIHRvcDogMDsgXG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IC0yOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"index-banner\" class=\"parallax-container\">\n    <div class=\"section no-pad-bot\">\n      <div class=\"container\">\n        <br><br>\n        <h1 class=\"header center white-text text-lighten-2\">What's Tweeting?</h1>\n        <div class=\"row center\">\n          <h5 class=\"header col s12 white-text\">Stay up to date in the twitterverse...</h5>\n        </div>\n        <div class=\"row center\">\n          <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\" id=\"download-button\" class=\"btn-large waves-effect waves-light blue lighten-1\">Get Started</a>\n        </div>\n        <br><br>\n\n      </div>\n    </div>\n    <div class=\"parallax\"><img src=\"../../../assets/images/twitter-on-phone.jpg\" alt=\"Unsplashed background img 1\"></div>\n  </div>\n\n\n  <div class=\"container\">\n    <div class=\"section\">\n\n      <!--   Icon Section   -->\n      <div class=\"row\">\n        <div class=\"col s12 m4\">\n          <div class=\"icon-block\">\n            <h2 class=\"center brown-text\"><i class=\"material-icons\">trending_up</i></h2>\n            <h5 class=\"center\">Trends</h5>\n\n            <p class=\"light\">Find out the trending topics around certain geographical areas. Never be left in the dark as to what demands your attention.</p>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"icon-block\">\n            <h2 class=\"center brown-text\"><i class=\"material-icons\">group</i></h2>\n            <h5 class=\"center\">Users</h5>\n\n            <p class=\"light\">Find out active tweeter users around certain geographical locations. .</p>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"icon-block\">\n            <h2 class=\"center brown-text\"><i class=\"material-icons\">network_wifi</i></h2>\n            <h5 class=\"center\">Tweets</h5>\n\n            <p class=\"light\">Find out what people are tweeting around certain geographical locations around the world</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"parallax-container valign-wrapper\">\n    <div class=\"section no-pad-bot center\">\n      <div class=\"container\">\n        <div class=\"row center\">\n          <h5 class=\"col s12 white-text\">A way to make sense out of all the information on twitter.</h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"parallax\"><img src=\"../../../assets/images/twitter-location.jpg\" alt=\"Unsplashed background img 2\"></div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"section\">\n\n      <div class=\"row\">\n        <div class=\"col s12 center\">\n          <h3><i class=\"mdi-content-send brown-text\"></i></h3>\n          <h4>Some Twitter Facts</h4>\n          <p class=\"left-align light\">There are 330M monthly active users, with a total of 1.3 billion account created. 5% of active users access the site via mobile. 83% of the world's leaders are on twitter. There are 500 million tweets sent each day. Thats' 6,000 tweets every second. A day's worth of tweets will fill a 10 million page book.</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"parallax-container valign-wrapper\">\n    <div class=\"section no-pad-bot\">\n      <div class=\"container\">\n        <div class=\"row center\">\n          <h5 class=\"header col s12 white-text\">Twitter like you've never known</h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"parallax\"><img src=\"../../../assets/images/twitter-user2.jpg\" alt=\"Unsplashed background img 3\"></div>\n  </div>\n\n  <footer class=\"page-footer blue\">\n    <div class=\"container center\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <h5 class=\"white-text\">About Me</h5>\n          <p class=\"grey-text text-lighten-4\">Saving the world, one line of code at a time!</p>\n\n\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container center\">\n      Made by <a class=\"brown-text text-lighten-3\" href=\"https://github.com/nedemenang\">nedemenang</a>\n      </div>\n    </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    #login-body {\n      display: flex;\n      min-height: 100vh;\n      flex-direction: column;\n      background: url('twitter-packages.jpg');\n      background-size: cover;\n      background-position: center;\n    }\n\n    main {\n      flex: 1 0 auto;\n    }\n\n    body {\n      background: #fff;\n    }\n\n    .input-field input[type=date]:focus + label,\n    .input-field input[type=text]:focus + label,\n    .input-field input[type=email]:focus + label,\n    .input-field input[type=password]:focus + label {\n      color: #e91e63;\n    }\n\n    .input-field input[type=date]:focus,\n    .input-field input[type=text]:focus,\n    .input-field input[type=email]:focus,\n    .input-field input[type=password]:focus {\n      border-bottom: 2px solid #e91e63;\n      box-shadow: none;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLHdDQUErRDtNQUMvRCx1QkFBdUI7TUFDdkIsNEJBQTRCO0tBQzdCOztJQUVEO01BQ0UsZUFBZTtLQUNoQjs7SUFFRDtNQUNFLGlCQUFpQjtLQUNsQjs7SUFFRDs7OztNQUlFLGVBQWU7S0FDaEI7O0lBRUQ7Ozs7TUFJRSxpQ0FBaUM7TUFDakMsaUJBQWlCO0tBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgI2xvZ2luLWJvZHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHdpdHRlci1wYWNrYWdlcy5qcGdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cblxuICAgIG1haW4ge1xuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgfVxuXG4gICAgYm9keSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cblxuICAgIC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPWRhdGVdOmZvY3VzICsgbGFiZWwsXG4gICAgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMgKyBsYWJlbCxcbiAgICAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMgKyBsYWJlbCxcbiAgICAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMgKyBsYWJlbCB7XG4gICAgICBjb2xvcjogI2U5MWU2MztcbiAgICB9XG5cbiAgICAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1kYXRlXTpmb2N1cyxcbiAgICAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbiAgICAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsXG4gICAgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTkxZTYzO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"login-body\">\n    <div class=\"section\"></div>\n    <main>\n        \n        <div class=\"section\"></div>\n  \n        <div class=\"section\"></div>\n  \n        <div class=\"container\" style=\"text-align: right\">\n          <div class=\"z-depth-1 grey lighten-4 row\" style=\"display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE; text-align: right\">\n  \n            <form class=\"col s12\" (submit)=\"onLoginSubmit()\">\n                <h5 class=\"blue-text\" style=\"text-align: center\">Login</h5>\n              <div class='row'>\n                <div class='col s12'>\n                </div>\n              </div>\n  \n              <div class='row'>\n                <div class='input-field col s12'>\n                  <input class='validate' [(ngModel)]=\"identifier\" type='email' name='email' id='email' />\n                  <label for='email'>Enter your username or email</label>\n                </div>\n              </div>\n  \n              <div class='row'>\n                <div class='input-field col s12'>\n                  <input class='validate' [(ngModel)]=\"password\" type='password' name='password' id='password' />\n                  <label for='password'>Enter your password</label>\n                </div>\n                <label style='float: right;'>\n                  <a class='pink-text' href='#!'><b>Forgot Password?</b></a>\n                </label>\n              </div>\n  \n              <br />\n      \n                <div class='row'>\n                  <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect blue'>Login</button>\n                </div>\n        \n            </form>\n            <div class='row'>\n                <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/register']\">Create account</a>\n            </div>\n          </div>\n        </div>  \n      <div class=\"section\"></div>\n      <div class=\"section\"></div>\n    </main>\n  \n  </body>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router, flashMessage) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            identifier: this.identifier,
            password: this.password
        };
        this.authenticationService.authenticateUser(user).subscribe(function (data) {
            // console.log(data)
            _this.authenticationService.storeUserData(data.data.token, data.data.user);
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            console.log(error);
            _this.flashMessage.show(error._body, {
                cssClass: 'card-panel red',
                timeout: 6000
            });
            _this.router.navigate(['/login']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n        margin-top: 10px;\n        margin-right: 10px;\n        text-align: left;\n}\n\n#tweeting {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGlCQUFpQjtDQUN4Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3R3ZWV0aW5nIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"blue\" role=\"navigation\">\n    <div class=\"nav-wrapper container\">\n      <a href=\"#\">\n          <img src=\"../../../assets/images/white-tweeter.png\" alt=\"Smiley face\" height=\"30\" width=\"32\">\n      </a>\n        <a class=\"navbar-brand\" style=\"font-display: blue; font-size: 25px;\" id=\"tweeting\" href=\"#\">Whats Tweeting?</a>\n      <ul class=\"right hide-on-med-and-down\">\n          <li *ngIf=\"authenticationService.loggedIn()\" class=\"nav-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n  \n          <li *ngIf=\"!authenticationService.loggedIn()\" class=\"nav-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/register']\">Register</a>\n          </li>\n          <li *ngIf=\"!authenticationService.loggedIn()\" class=\"nav-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\">Login</a>\n            </li>\n            <li *ngIf=\"authenticationService.loggedIn()\" class=\"nav-item active\">\n                <a class=\"nav-link\" [routerLinkActive]=\"['active']\" (click)=\"onLogoutClick()\" >Logout</a>\n              </li>\n      </ul>\n\n      <ul id=\"nav-mobile\" class=\"sidenav\">\n        <li><a href=\"#\">Navbar Link</a></li>\n      </ul>\n      <a href=\"#\" data-target=\"nav-mobile\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authenticationService, router, flashMessage) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authenticationService.logout();
        this.flashMessage.show("You are logged out", {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col s4\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h4>Users</h4></li>\n    \n  </ul>\n  </div>\n  <div class=\"col s6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h4>Query Searches</h4></li>\n      <li class=\"collection-item\" *ngFor=\"let query of user.queries\">\n          <span class=\"title\" *ngIf=\"query.longitude\">long: {{ query.longitude }} - </span> \n          <span class=\"title\" *ngIf=\"query.latitude\">lat: {{ query.latitude }}</span>\n          <span class=\"title\" *ngIf=\"query.query\">query: {{ query.query }}</span>\n          \n        </li>\n        </ul>\n    </div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authenticationService, router, flashMessage) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.getProfile().subscribe(function (data) {
            console.log(data.data.user);
            _this.user = data.data.user;
        }, function (error) {
            _this.flashMessage.show(error._body, {
                cssClass: 'card-panel red',
                timeout: 6000
            });
            _this.router.navigate(['/dashboard']);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    #register-body {\n        display: flex;\n        min-height: 100vh;\n        flex-direction: column;\n        background: url('twitter-packages.jpg');\n        background-size: cover;\n        background-position: center;\n      }\n  \n      main {\n        flex: 1 0 auto;\n      }\n  \n      body {\n        background: #fff;\n      }\n  \n      .input-field input[type=date]:focus + label,\n      .input-field input[type=text]:focus + label,\n      .input-field input[type=email]:focus + label,\n      .input-field input[type=password]:focus + label {\n        color: #e91e63;\n      }\n  \n      .input-field input[type=date]:focus,\n      .input-field input[type=text]:focus,\n      .input-field input[type=email]:focus,\n      .input-field input[type=password]:focus {\n        border-bottom: 2px solid #e91e63;\n        box-shadow: none;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHdDQUErRDtRQUMvRCx1QkFBdUI7UUFDdkIsNEJBQTRCO09BQzdCOztNQUVEO1FBQ0UsZUFBZTtPQUNoQjs7TUFFRDtRQUNFLGlCQUFpQjtPQUNsQjs7TUFFRDs7OztRQUlFLGVBQWU7T0FDaEI7O01BRUQ7Ozs7UUFJRSxpQ0FBaUM7UUFDakMsaUJBQWlCO09BQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgI3JlZ2lzdGVyLWJvZHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90d2l0dGVyLXBhY2thZ2VzLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgfVxuICBcbiAgICAgIG1haW4ge1xuICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIH1cbiAgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cbiAgXG4gICAgICAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1kYXRlXTpmb2N1cyArIGxhYmVsLFxuICAgICAgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMgKyBsYWJlbCxcbiAgICAgIC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyArIGxhYmVsLFxuICAgICAgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzICsgbGFiZWwge1xuICAgICAgICBjb2xvcjogI2U5MWU2MztcbiAgICAgIH1cbiAgXG4gICAgICAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1kYXRlXTpmb2N1cyxcbiAgICAgIC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxuICAgICAgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLFxuICAgICAgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOTFlNjM7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"register-body\">\n    <div class=\"section\"></div>\n    <main>\n        \n\n        <div class=\"container\" style=\"text-align: right\">\n          <div class=\"z-depth-1 grey lighten-4 row\" style=\"display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE; text-align: right\">\n  \n            <form class=\"col s12\" (submit)=\"onRegisterSubmit()\">\n                <h5 class=\"blue-text\" style=\"text-align: center\">Register</h5>\n              <div class='row'>\n                <div class='col s12'>\n                </div>\n              </div>\n\n              <div class='row'>\n                  <div class='input-field col s12'>\n                    <input class='validate' [(ngModel)]=\"name\" type='text' name='name' id='name' />\n                    <label for='name'>Enter your name</label>\n                  </div>\n                </div>\n\n                <div class='row'>\n                    <div class='input-field col s12'>\n                      <input class='validate' [(ngModel)]=\"username\" type='text' name=\"username\" id='username' />\n                      <label for='username'>Enter your username</label>\n                    </div>\n                  </div>\n  \n              <div class='row'>\n                <div class='input-field col s12'>\n                  <input class='validate' [(ngModel)]=\"email\" type='text' name=\"email\" id='email' />\n                  <label for='email'>Enter your email</label>\n                </div>\n              </div>\n  \n              <div class='row'>\n                <div class='input-field col s12'>\n                  <input class='validate' [(ngModel)]=\"password\" type='password' name='password' id='password' />\n                  <label for='password'>Enter your password</label>\n                </div>\n                <label style='float: right;'>\n                  <a class='pink-text' [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\"><b>Already Registered?</b></a>\n                </label>\n              </div>\n  \n              <br />\n      \n                <div class='row'>\n                  <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect blue'>Register</button>\n                </div>\n        \n            </form>\n            \n          </div>\n        </div>  \n      <div class=\"section\"></div>\n      <div class=\"section\"></div>\n    </main>\n  \n  </body>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authenticationService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authenticationService = authenticationService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'card-panel red', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use valid email', { cssClass: 'card-panel red', timeout: 3000 });
            return false;
        }
        //Register user
        this.authenticationService.registerUser(user).subscribe(function (data) {
            _this.flashMessage.show('You are now registered!', { cssClass: 'card-panel green', timeout: 3000 });
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.flashMessage.show(error._body, { cssClass: 'card-panel red', timeout: 6000 });
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/authentication.guard.ts":
/*!************************************************!*\
  !*** ./src/app/guards/authentication.guard.ts ***!
  \************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function () {
        if (this.authenticationService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthenticationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var token = localStorage.getItem('id_token');
        headers.append('Authorization', "Bearer " + token);
        headers.append('Content-Type', 'application/json');
        var userData = JSON.parse(localStorage.getItem('user'));
        return this.http.get("users/" + userData.id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        var userData = localStorage.getItem('user');
        this.authenticationToken = token;
        this.user = userData;
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authenticationToken = token;
        this.user = user;
    };
    AuthenticationService.prototype.logout = function () {
        this.authenticationToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthenticationService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])("id_token");
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/query.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/query.service.ts ***!
  \*******************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryService = /** @class */ (function () {
    function QueryService(http) {
        this.http = http;
    }
    QueryService.prototype.getUsers = function (geocode) {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + this.authenticationToken);
        return this.http.get("tweets/users/" + geocode + "/", { headers: headers })
            .map(function (response) { return response.json().data.users; });
    };
    QueryService.prototype.getTrends = function (lat, long) {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + this.authenticationToken);
        return this.http.get("tweets/trends/" + lat + "/" + long, { headers: headers })
            .map(function (response) { return response.json().data.trends; });
    };
    QueryService.prototype.getTweets = function (geocode) {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + this.authenticationToken);
        return this.http.get("tweets/" + geocode + "/", { headers: headers })
            .map(function (response) { return response.json().data.statuses; });
    };
    QueryService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authenticationToken = token;
    };
    QueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    apiKey: 'AIzaSyBtnPuBERz2F_R9ZUIRMd0UcCq1luCzVB4'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andeladeveloper/DEV/whats-tweeting/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map