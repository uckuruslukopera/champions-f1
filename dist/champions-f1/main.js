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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"r-index container-fluid\">\n  <div class=\"r-index__header row\">\n    <app-header></app-header>\n  </div>\n  <div class=\"r-index__content row\">\n    <router-outlet></router-outlet>\n  </div>\n  <div *ngIf=\"isLoading\" class=\"r-index__loading\">\n      <img src=\"assets/images/gifs/loading.gif\"/>\n  </div>\n</div>"

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
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_ergast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ergast.service */ "./src/app/services/ergast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(loadingService, ergastService, changeDetector) {
        this.loadingService = loadingService;
        this.ergastService = ergastService;
        this.changeDetector = changeDetector;
        this.isLoading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.loadingStatus$.subscribe(function (status) {
            _this.isLoading = status;
            _this.changeDetector.detectChanges();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"],
            _services_ergast_service__WEBPACK_IMPORTED_MODULE_2__["ErgastService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_race_list_race_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/race-list/race-list.component */ "./src/app/components/race-list/race-list.component.ts");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _routes_champions_champions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/champions/champions.component */ "./src/app/routes/champions/champions.component.ts");
/* harmony import */ var _routes_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/page-not-found/page-not-found.component */ "./src/app/routes/page-not-found/page-not-found.component.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_selectbox_selectbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/selectbox/selectbox.component */ "./src/app/components/selectbox/selectbox.component.ts");
/* harmony import */ var _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/result-list/result-list.component */ "./src/app/components/result-list/result-list.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/components/pagination/pagination.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'home', component: _routes_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'champions/:year', component: _routes_champions_champions_component__WEBPACK_IMPORTED_MODULE_8__["ChampionsComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '404', component: _routes_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] },
    { path: '**', component: _routes_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_race_list_race_list_component__WEBPACK_IMPORTED_MODULE_6__["RaceListComponent"],
                _routes_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _routes_champions_champions_component__WEBPACK_IMPORTED_MODULE_8__["ChampionsComponent"],
                _routes_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _components_selectbox_selectbox_component__WEBPACK_IMPORTED_MODULE_11__["SelectboxComponent"],
                _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_12__["ResultListComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-header__left\">\n    <h1 routerLink=\"/home\">F1 Champions</h1>\n</div>\n<div class=\"c-header__middle\">\n    <span class=\"d-none d-md-none d-lg-inline\">Select a year to display races: </span>\n    <app-selectbox [options]=\"yearOptions\" [value]=\"selectedYear\" (changeEvent)=\"onYearSelected($event)\"></app-selectbox>\n</div>\n<div class=\"c-header__right hidden-md\">\n    <span class=\"d-none d-sm-none d-md-inline\">\n        <a href=\"https://github.com/uckuruslukopera/champions-f1\" target=\"blank\">View on GitHub</a>\n    </span>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_ergast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ergast.service */ "./src/app/services/ergast.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(configService, ergastService, router) {
        this.configService = configService;
        this.ergastService = ergastService;
        this.router = router;
        this.notHomepage = false;
        this.yearOptions = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yearOptions = this.configService.getYearOptions();
        this.ergastService.selectedYear$.subscribe(function (year) {
            if (year > 0) {
                _this.selectedYear = year;
            }
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (e) {
            _this.notHomepage = e['url'].includes('/champions');
        });
    };
    HeaderComponent.prototype.onYearSelected = function (e) {
        if (e) {
            this.router.navigate(['/champions', e]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.c-header'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "true", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.c-header--with-select'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "notHomepage", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _services_ergast_service__WEBPACK_IMPORTED_MODULE_3__["ErgastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <ul class=\"pagination\">\n        <li class=\"page-item\" [ngClass]=\"{'disabled': currentPage === 1}\">\n          <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"previous($event)\">\n              <span aria-hidden=\"true\">&laquo;</span>\n              <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li *ngFor=\"let i of pages; \" class=\"page-item\" [ngClass]=\"{'disabled': (currentPage === i)}\">\n          <a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"go(i)\">{{i}}</a>\n        </li>\n        <li class=\"page-item\" [ngClass]=\"{'disabled': (currentPage === pages?.length)}\">\n          <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"next($event)\">\n              <span aria-hidden=\"true\">&raquo;</span>\n              <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n    </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
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

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.ngOnChanges = function () {
        if (this.count) {
            var pageCount = Math.ceil(this.count / this.pageSize);
            this.pages = Array.from(Array(pageCount).keys()).map(function (i) { return i + 1; });
        }
    };
    PaginationComponent.prototype.previous = function (e) {
        this.go(this.currentPage - 1);
    };
    PaginationComponent.prototype.next = function (e) {
        this.go(this.currentPage + 1);
    };
    PaginationComponent.prototype.go = function (e) {
        if (this.currentPage !== e)
            this.pageSelected.emit(e);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.c-pagination'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "true", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "pageSelected", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/components/pagination/pagination.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/race-list/race-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/race-list/race-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"c-race-list__wrapper list-group\">\n  <li *ngFor=\"let race of races\"\n      (click)=\"onRaceSelected(race)\"\n      class=\"list-group-item d-flex justify-content-between align-items-center c-race-list__item\"\n      [ngClass]=\"{'c-race-list__item--selected': race?.round === selectedRace?.round}\">\n      {{ race?.raceName }}\n    <span class=\"badge badge-info badge-pill\">{{ race?.date  | date:'MMM d' }}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/race-list/race-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/race-list/race-list.component.ts ***!
  \*************************************************************/
/*! exports provided: RaceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceListComponent", function() { return RaceListComponent; });
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

var RaceListComponent = /** @class */ (function () {
    function RaceListComponent() {
        this.raceSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RaceListComponent.prototype.ngOnInit = function () {
    };
    RaceListComponent.prototype.onRaceSelected = function (race) {
        this.selectedRace = race;
        this.raceSelectedEvent.emit(race);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.c-race-list'),
        __metadata("design:type", Object)
    ], RaceListComponent.prototype, "true", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RaceListComponent.prototype, "races", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RaceListComponent.prototype, "raceSelectedEvent", void 0);
    RaceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-race-list',
            template: __webpack_require__(/*! ./race-list.component.html */ "./src/app/components/race-list/race-list.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RaceListComponent);
    return RaceListComponent;
}());



/***/ }),

/***/ "./src/app/components/result-list/result-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/result-list/result-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-result-list__wrapper\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Fastest</th>\n            <th scope=\"col\">Constructor</th>\n            <th class=\"d-none d-xs-non d-sm-block\" scope=\"col\">Status</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let result of results\" class=\"c-result-list__item\" [ngClass]=\"{'c-result-list__item--champion': isDriverWorldChampion(result?.Driver)}\">\n                <th scope=\"row\">{{ result?.position }}</th>\n                <td>\n                    <a href=\"{{ result?.Driver?.url }}\" target=\"blank\">\n                        {{ result?.Driver?.givenName }} {{ result?.Driver?.familyName }} \n                        <i class=\"fas fa-external-link-alt\"></i>\n                    </a>\n                    <i class=\"fas fa-crown\" data-toggle=\"tooltip\" [title]=\"championToolTipText\"></i>\n                </td>\n                <td>{{ result?.FastestLap?.AverageSpeed?.speed }} {{ result?.FastestLap?.AverageSpeed?.units }} - {{ result?.FastestLap?.Time?.time }}</td>\n                <td><a href=\"{{ result?.Constructor?.url }}\" target=\"blank\">{{ result?.Constructor?.name }} <i class=\"fas fa-external-link-alt\"></i></a></td>\n                <td class=\"d-none d-xs-none d-sm-block\">{{ result?.status }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/result-list/result-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/result-list/result-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultListComponent", function() { return ResultListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ergast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ergast.service */ "./src/app/services/ergast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultListComponent = /** @class */ (function () {
    function ResultListComponent(ergastService) {
        this.ergastService = ergastService;
    }
    ResultListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedYear;
        this.ergastService.worldChampion$.subscribe(function (response) {
            if (response && response['StandingsTable']
                && response['StandingsTable']['StandingsLists']
                && response['StandingsTable']['StandingsLists'].length
                && response['StandingsTable']['StandingsLists'][0]['DriverStandings']
                && response['StandingsTable']['StandingsLists'][0]['DriverStandings'].length
                && response['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]
                && response['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']) {
                _this.worldChampion = response['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver'];
            }
        });
        this.ergastService.selectedYear$.subscribe(function (year) {
            selectedYear = year;
            _this.championToolTipText = selectedYear + " world champion";
            _this.ergastService.getSelectedYearsWorldChampion(selectedYear);
        });
    };
    ResultListComponent.prototype.isDriverWorldChampion = function (driver) {
        if (driver && this.worldChampion)
            return this.worldChampion.driverId === driver.driverId;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.c-result-list'),
        __metadata("design:type", Object)
    ], ResultListComponent.prototype, "true", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ResultListComponent.prototype, "results", void 0);
    ResultListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-list',
            template: __webpack_require__(/*! ./result-list.component.html */ "./src/app/components/result-list/result-list.component.html")
        }),
        __metadata("design:paramtypes", [_services_ergast_service__WEBPACK_IMPORTED_MODULE_1__["ErgastService"]])
    ], ResultListComponent);
    return ResultListComponent;
}());



/***/ }),

/***/ "./src/app/components/selectbox/selectbox.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/selectbox/selectbox.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select [(ngModel)]=\"value\" \n        [disabled]=\"isDisabled\"\n        (ngModelChange)=\"changeHandler($event)\">\n<option *ngFor=\"let option of options; let i = index;\"\n        [attr.selected]=\"value == option.value ? true : null\"\n        [ngValue]=\"option.value\"\n        [disabled]=\"option.disabled || option.value === '-1'\">{{option.text}}</option>\n</select>\n\n"

/***/ }),

/***/ "./src/app/components/selectbox/selectbox.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/selectbox/selectbox.component.ts ***!
  \*************************************************************/
/*! exports provided: SelectboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectboxComponent", function() { return SelectboxComponent; });
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

var SelectboxComponent = /** @class */ (function () {
    function SelectboxComponent() {
        this.class = 'c-selectbox';
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabled = false;
        this.isLg = false;
    }
    SelectboxComponent.prototype.ngOnInit = function () {
        if (!this.options)
            return;
        if (!this.value)
            this.value = this.options[0].value;
    };
    SelectboxComponent.prototype.changeHandler = function ($event) {
        this.changeEvent.emit(this.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], SelectboxComponent.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectboxComponent.prototype, "changeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.c-selectbox--disabled'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectboxComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.c-selectbox--lg'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectboxComponent.prototype, "isLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectboxComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectboxComponent.prototype, "options", void 0);
    SelectboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selectbox',
            template: __webpack_require__(/*! ./selectbox.component.html */ "./src/app/components/selectbox/selectbox.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SelectboxComponent);
    return SelectboxComponent;
}());



/***/ }),

/***/ "./src/app/routes/champions/champions.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/champions/champions.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"r-champions__content row\">\n    <div class=\"r-champions__result-list col-sm-12 col-md-8\">\n        <div class=\"r-champions__result-list__label\">RACE RESULTS</div>\n        <div *ngIf=\"!raceResults?.length\" class=\"r-champions__result-list__no-data\">\n            <i class=\"far fa-flag\"></i>\n            <span>Select a race to display results</span>\n        </div>\n        <app-result-list *ngIf=\"raceResults?.length\" [results]=\"raceResults\"></app-result-list>\n        <app-pagination *ngIf=\"raceResults?.length\"  [count]=\"resultCount\" [currentPage]=\"resultCurrentPage\" [pageSize]=\"pageSize\" (pageSelected)=\"resultPageSelected($event)\"></app-pagination>\n    </div>\n    <div class=\"r-champions__race-list col-sm-12 col-md-4\">\n        <div class=\"r-champions__race-list__label\">Select a race to view the results</div>\n        <app-race-list [races]=\"races\" (raceSelectedEvent)=\"getRaceResults($event)\"></app-race-list>\n        <app-pagination [count]=\"raceCount\" [currentPage]=\"raceCurrentPage\" [pageSize]=\"pageSize\" (pageSelected)=\"racePageSelected($event)\"></app-pagination>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/champions/champions.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/champions/champions.component.ts ***!
  \*********************************************************/
/*! exports provided: ChampionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionsComponent", function() { return ChampionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ergast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ergast.service */ "./src/app/services/ergast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChampionsComponent = /** @class */ (function () {
    function ChampionsComponent(route, ergastService) {
        this.route = route;
        this.ergastService = ergastService;
        this.pageSize = 10;
    }
    ChampionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ergastService.races$.subscribe(function (response) {
            if (response && response['RaceTable'] && response['RaceTable']['Races']) {
                _this.races = response['RaceTable']['Races'];
                _this.raceCount = Number(response['total']);
                _this.raceCurrentPage = (Number(response['offset']) / _this.pageSize) + 1;
                _this.raceResults = [];
            }
        });
        this.ergastService.results$.subscribe(function (response) {
            if (response && response['RaceTable']
                && response['RaceTable']['Races']
                && response['RaceTable']['Races'].length
                && response['RaceTable']['Races'][0]
                && response['RaceTable']['Races'][0]['Results']
                && response['RaceTable']['Races'][0]['Results'].length) {
                _this.raceResults = response['RaceTable']['Races'][0]['Results'];
                _this.resultCount = Number(response['total']);
                _this.resultCurrentPage = (Number(response['offset']) / _this.pageSize) + 1;
            }
        });
        this.route.params.subscribe(function (params) {
            _this.selectedYear = +params['year'];
            if (!_this.selectedYear)
                return;
            _this.ergastService.getSelectedYearsRaces(_this.selectedYear, _this.pageSize);
        });
    };
    ChampionsComponent.prototype.racePageSelected = function (e) {
        this.raceCurrentPage = e;
        this.ergastService.getSelectedYearsRaces(this.selectedYear, this.pageSize, ((e - 1) * this.pageSize));
    };
    ChampionsComponent.prototype.resultPageSelected = function (e) {
        this.resultCurrentPage = e;
        this.ergastService.getSelectedRacesResults(this.selectedYear, this.selectedRound, this.pageSize, ((e - 1) * this.pageSize));
    };
    ChampionsComponent.prototype.getRaceResults = function (race) {
        if (!race)
            return;
        this.selectedRound = +race.round;
        this.ergastService.getSelectedRacesResults(this.selectedYear, this.selectedRound, this.pageSize);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.r-champions'),
        __metadata("design:type", Object)
    ], ChampionsComponent.prototype, "true", void 0);
    ChampionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-champions',
            template: __webpack_require__(/*! ./champions.component.html */ "./src/app/routes/champions/champions.component.html")
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_ergast_service__WEBPACK_IMPORTED_MODULE_2__["ErgastService"]])
    ], ChampionsComponent);
    return ChampionsComponent;
}());



/***/ }),

/***/ "./src/app/routes/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/routes/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"r-home__caption\">\n  <h2>Welcome to home of the Champions!</h2>\n  <h4>Select a year to display the race list:</h4>\n  <app-selectbox [options]=\"yearOptions\" (changeEvent)=\"onYearSelected($event)\" [isLg]=\"true\"></app-selectbox>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HomeComponent(configService, router) {
        this.configService = configService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.yearOptions = this.configService.getYearOptions();
    };
    HomeComponent.prototype.onYearSelected = function (e) {
        console.log(e);
        this.router.navigate(['/champions', e]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.r-home'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "true", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/routes/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/routes/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/routes/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"r-page-not-found__no-data\">\n    <i class=\"far fa-flag\"></i>\n    <span>You can't always get what you want But if you try sometime you find You get what you need</span>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.r-page-not-found'),
        __metadata("design:type", Object)
    ], PageNotFoundComponent.prototype, "true", void 0);
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/routes/page-not-found/page-not-found.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.prototype.getConfiguration = function (key) {
        if (key) {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"][key];
        }
    };
    ConfigService.prototype.getYearOptions = function () {
        var years = this.calculateAvailableYears();
        var yearOptions = years.map(function (y) {
            return { value: y, text: y.toString(), disabled: false };
        });
        yearOptions = [{ value: -1, text: 'Please select a year', disabled: true }].concat(yearOptions);
        return yearOptions;
    };
    // Helpers
    ConfigService.prototype.calculateAvailableYears = function () {
        var yearRange = this.getConfiguration('yearRange');
        var years = [];
        if (yearRange) {
            var startYear = yearRange.startYear, endYear = yearRange.endYear;
            for (var i = startYear; i <= endYear; i++) {
                years.push(i);
            }
        }
        return years;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/ergast.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ergast.service.ts ***!
  \********************************************/
/*! exports provided: ErgastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErgastService", function() { return ErgastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ErgastService = /** @class */ (function () {
    function ErgastService(configService, httpClient, loadingService) {
        this.configService = configService;
        this.httpClient = httpClient;
        this.loadingService = loadingService;
        this.selectedYear$ = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this.races$ = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.results$ = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.worldChampion$ = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.serviceUrl = this.configService.getConfiguration('api');
        this.responseType = this.configService.getConfiguration('responseType');
        this.responseKey = this.configService.getConfiguration('responseKey');
    }
    ErgastService.prototype.getSelectedYearsRaces = function (year, pageSize, offset) {
        var _this = this;
        if (pageSize === void 0) { pageSize = 10; }
        if (offset === void 0) { offset = 0; }
        this.selectedYear$.next(year);
        if (!this.serviceUrl)
            return;
        var url = this.serviceUrl.concat("/" + year);
        this.get(url, { limit: pageSize, offset: offset })
            .subscribe(function (races) { return _this.races$.next(races); });
    };
    ErgastService.prototype.getSelectedRacesResults = function (year, round, pageSize, offset) {
        var _this = this;
        if (pageSize === void 0) { pageSize = 10; }
        if (offset === void 0) { offset = 0; }
        if (!this.serviceUrl)
            return;
        var url = this.serviceUrl.concat("/" + year + "/" + round + "/results");
        this.get(url, { limit: pageSize, offset: offset })
            .subscribe(function (results) { return _this.results$.next(results); });
    };
    ErgastService.prototype.getSelectedYearsWorldChampion = function (year, pageSize) {
        var _this = this;
        if (pageSize === void 0) { pageSize = 1; }
        if (!this.serviceUrl)
            return;
        var url = this.serviceUrl.concat("/" + year + "/driverStandings");
        this.get(url, { limit: pageSize })
            .subscribe(function (driver) { return _this.worldChampion$.next(driver); });
    };
    // Helpers
    ErgastService.prototype.get = function (url, queryParams) {
        var _this = this;
        if (queryParams === void 0) { queryParams = {}; }
        var urlWithResponseType = url.concat("." + this.responseType);
        this.loadingService.showLoading();
        return this.httpClient.get(urlWithResponseType, { params: queryParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return _this.handleResponse(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.handleError(error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingService.hideLoading(); }));
    };
    ErgastService.prototype.handleResponse = function (response) {
        return (this.responseKey && response[this.responseKey]) ? response[this.responseKey] : response;
    };
    ErgastService.prototype.handleError = function (error) {
        console.log(error);
        return error;
    };
    ErgastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
    ], ErgastService);
    return ErgastService;
}());



/***/ }),

/***/ "./src/app/services/loading.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loadingStatus$ = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    LoadingService.prototype.showLoading = function () {
        this.loadingStatus$.next(true);
    };
    LoadingService.prototype.hideLoading = function () {
        this.loadingStatus$.next(false);
    };
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



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
var environment = {
    production: false,
    // If there were a dev/test/staging api urls, this would be more useful -- MT
    api: 'https://ergast.com/api/f1',
    responseType: 'json',
    responseKey: 'MRData',
    yearRange: {
        startYear: 2005,
        endYear: 2015
    }
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sites\champions-f1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map