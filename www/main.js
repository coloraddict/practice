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
/*! exports provided: MyHammerConfig, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/login/login-page.component.ts");
/* harmony import */ var _landingpage_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landingpage/landing-page.component */ "./src/app/landingpage/landing-page.component.ts");
/* harmony import */ var _components_drug_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/drug-list.component */ "./src/app/components/drug-list.component.ts");
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./schedule/schedule */ "./src/app/schedule/schedule.ts");
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dropdown/dropdown.component */ "./src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var _components_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/radiobutton/radiobutton.component */ "./src/app/components/radiobutton/radiobutton.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _doctors_list_doctors_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./doctors_list/doctors.list */ "./src/app/doctors_list/doctors.list.ts");
/* harmony import */ var _patch_patch_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./patch/patch.component */ "./src/app/patch/patch.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






















var routes = [
    { path: 'login-page', component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPage"] },
    { path: 'landing-page', component: _landingpage_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPage"] },
    { path: 'schedule', component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_13__["Scheduler"] },
    { path: 'doctors_list', component: _doctors_list_doctors_list__WEBPACK_IMPORTED_MODULE_18__["DoctorsList"] },
    { path: 'patch_list', component: _patch_patch_component__WEBPACK_IMPORTED_MODULE_19__["PatchList"] },
    { path: 'drug_list', component: _components_drug_list_component__WEBPACK_IMPORTED_MODULE_12__["DrugList"] },
    { path: '**', redirectTo: 'login-page' }
];
var MyHammerConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyHammerConfig, _super);
    function MyHammerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHammerConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element, {
            touchAction: "pan-y",
        });
        return mc;
    };
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["HammerGestureConfig"]));

var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPage"], _landingpage_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPage"], _components_drug_list_component__WEBPACK_IMPORTED_MODULE_12__["DrugList"], _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["DropdownComponent"], _components_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_15__["RadiobuttonComponent"], _schedule_schedule__WEBPACK_IMPORTED_MODULE_13__["Scheduler"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["Header"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["Footer"], _doctors_list_doctors_list__WEBPACK_IMPORTED_MODULE_18__["DoctorsList"], _patch_patch_component__WEBPACK_IMPORTED_MODULE_19__["PatchList"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
                }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            providers: [{
                    // hammer instantion with custom config
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["HAMMER_GESTURE_CONFIG"],
                    useClass: MyHammerConfig,
                }],
            entryComponents: []
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

module.exports = "h1, h4 {\r\n    text-align: center;\r\n}\r\nh1 {\r\n    color: #0061c1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDEge1xyXG4gICAgY29sb3I6ICMwMDYxYzE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'medrep';
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener("deviceready", function () {
        }, false);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
                    multi: true
                }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/dropdown/dropdown.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\r\n    width: 100%;\r\n    background-color: transparent;\r\n    color: #424242;\r\n    padding: 10px;\r\n    font-size: 12px;\r\n    border: none;\r\n    cursor: pointer;\r\n    text-align: left;\r\n  }\r\n  \r\n  .dropbtn:hover, .dropbtn:focus {\r\n    background-color: transparent;\r\n    outline: none;\r\n  }\r\n  \r\n  .dropdown {\r\n    width: 100%;\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    height: 300px;\r\n    overflow: scroll;\r\n    position: absolute;\r\n    top:30px;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    overflow: auto;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown-content a {\r\n    color: black;\r\n    font-size: 12px;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  .dropdown a:hover {background-color: #ddd;}\r\n  \r\n  .show {display: block;}\r\n  \r\n  .ico {\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 0;\r\n  }\r\n  \r\n  .ico.down-arrow {\r\n    background: url(/assets/images/down-arrow.png) no-repeat;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLDhCQUE4QjtJQUM5QixjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtHQUN2Qjs7RUFFRDtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNkNBQTZDO0lBQzdDLFdBQVc7R0FDWjs7RUFFRDtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0dBQ2hCOztFQUVELG1CQUFtQix1QkFBdUIsQ0FBQzs7RUFFM0MsT0FBTyxlQUFlLENBQUM7O0VBRXZCO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7R0FDVjs7RUFFRDtJQUNFLHlEQUF5RDtHQUMxRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDozMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gIC5zaG93IHtkaXNwbGF5OiBibG9jazt9XHJcblxyXG4gIC5pY28ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5pY28uZG93bi1hcnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvZG93bi1hcnJvdy5wbmcpIG5vLXJlcGVhdDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/dropdown/dropdown.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\r\n  <button (click)=\"myFunction()\" class=\"dropbtn\">{{label}}</button>\r\n  <i class=\"ico down-arrow\"></i>\r\n  <div class=\"dropdown-content\" #dropdown>\r\n    <a href=\"javascript:void(0);\" *ngFor=\"let item of list\" [attr.item_id]=\"item.id\" (click)=\"onItemSelect($event)\">{{item.item_name}}</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dropdown/dropdown.component.ts ***!
  \***********************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.locationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isLocationChanged = [];
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent.prototype.myFunction = function () {
        this.dropdown.nativeElement.classList.toggle('show');
    };
    DropdownComponent.prototype.onItemSelect = function ($evt) {
        this.label = $evt.target.firstChild.nodeValue;
        this.hideDropdownMenu();
        this.isLocationChanged = {
            status: false,
            id: $evt.target.getAttribute("item_id")
        };
        this.locationChange.emit(this.isLocationChanged);
    };
    DropdownComponent.prototype.hideDropdownMenu = function () {
        this.dropdown.nativeElement.classList.remove('show');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "locationChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dropdown'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DropdownComponent.prototype, "dropdown", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/components/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/components/dropdown/dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/components/drug-list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/drug-list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filler {\r\n    display: block;\r\n    width: 0px;\r\n    padding: 18px 0;\r\n    background: rgba(0, 0, 255,.2);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    pointer-events: none;\r\n}\r\n\r\n.list li a {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.list li a .quantity {\r\n    font-weight: 500;\r\n}\r\n\r\n.list li {\r\n    position: relative;\r\n    padding: 0 10px;\r\n}\r\n\r\n.slidecontainer {\r\n    width: 100%; /* Width of the outside container */\r\n  }\r\n\r\n/* The slider itself */\r\n\r\n.slider {\r\n    -webkit-appearance: none;  /* Override default CSS styles */\r\n    -moz-appearance: none;\r\n         appearance: none;\r\n    width: 100%; /* Full-width */\r\n    height: 3px; /* Specified height */\r\n    background: #ddd; /* Grey background */\r\n    outline: none; /* Remove outline */\r\n    opacity: 0.5; /* Set transparency (for mouse-over effects on hover) */ /* 0.2 seconds transition on hover */\r\n    transition: opacity .2s;\r\n  }\r\n\r\n/* Mouse-over effects */\r\n\r\n.slider:hover {\r\n    opacity: 1; /* Fully shown on mouse-over */\r\n  }\r\n\r\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none; /* Override default look */\r\n    appearance: none;\r\n    width: 15px; /* Set a specific slider handle width */\r\n    height: 15px; /* Slider handle height */\r\n    background: #999; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n    border-radius: 50px;\r\n  }\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px; /* Set a specific slider handle width */\r\n    height: 25px; /* Slider handle height */\r\n    background: #4CAF50; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n  }\r\n\r\n.medicines.card {\r\n    height: 90vh;\r\n    overflow: auto;\r\n  }\r\n\r\n.medicines.card li a {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    color: #424242;\r\n    text-decoration: none;\r\n    outline: none;\r\n    padding: 3px 5px;\r\n  }\r\n\r\n.medicines.card li a:hover {\r\n    background: #999;\r\n    color: #fff;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcnVnLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0NBQ1g7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25COztBQUdEO0lBQ0ksWUFBWSxDQUFDLG9DQUFvQztHQUNsRDs7QUFFRCx1QkFBdUI7O0FBQ3ZCO0lBQ0UseUJBQXlCLEVBQUUsaUNBQWlDO0lBQzVELHNCQUFpQjtTQUFqQixpQkFBaUI7SUFDakIsWUFBWSxDQUFDLGdCQUFnQjtJQUM3QixZQUFZLENBQUMsc0JBQXNCO0lBQ25DLGlCQUFpQixDQUFDLHFCQUFxQjtJQUN2QyxjQUFjLENBQUMsb0JBQW9CO0lBQ25DLGFBQWEsQ0FBQyx3REFBd0QsQ0FDN0MscUNBQXFDO0lBQzlELHdCQUF3QjtHQUN6Qjs7QUFFRCx3QkFBd0I7O0FBQ3hCO0lBQ0UsV0FBVyxDQUFDLCtCQUErQjtHQUM1Qzs7QUFFRCxpSEFBaUg7O0FBQ2pIO0lBQ0UseUJBQXlCLENBQUMsMkJBQTJCO0lBQ3JELGlCQUFpQjtJQUNqQixZQUFZLENBQUMsd0NBQXdDO0lBQ3JELGFBQWEsQ0FBQywwQkFBMEI7SUFDeEMsaUJBQWlCLENBQUMsc0JBQXNCO0lBQ3hDLGdCQUFnQixDQUFDLHFCQUFxQjtJQUN0QyxvQkFBb0I7R0FDckI7O0FBRUQ7SUFDRSxZQUFZLENBQUMsd0NBQXdDO0lBQ3JELGFBQWEsQ0FBQywwQkFBMEI7SUFDeEMsb0JBQW9CLENBQUMsc0JBQXNCO0lBQzNDLGdCQUFnQixDQUFDLHFCQUFxQjtHQUN2Qzs7QUFFRDtJQUNFLGFBQWE7SUFDYixlQUFlO0dBQ2hCOztBQUVEO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsaUJBQWlCO0dBQ2xCOztBQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7R0FDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJ1Zy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIHBhZGRpbmc6IDE4cHggMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LC4yKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5saXN0IGxpIGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmxpc3QgbGkgYSAucXVhbnRpdHkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxpc3QgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG5cclxuLnNsaWRlY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBXaWR0aCBvZiB0aGUgb3V0c2lkZSBjb250YWluZXIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNsaWRlciBpdHNlbGYgKi9cclxuICAuc2xpZGVyIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIC8qIE92ZXJyaWRlIGRlZmF1bHQgQ1NTIHN0eWxlcyAqL1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsLXdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDNweDsgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDsgLyogR3JleSBiYWNrZ3JvdW5kICovXHJcbiAgICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmUgb3V0bGluZSAqL1xyXG4gICAgb3BhY2l0eTogMC41OyAvKiBTZXQgdHJhbnNwYXJlbmN5IChmb3IgbW91c2Utb3ZlciBlZmZlY3RzIG9uIGhvdmVyKSAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG4gIH1cclxuICBcclxuICAvKiBNb3VzZS1vdmVyIGVmZmVjdHMgKi9cclxuICAuc2xpZGVyOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNsaWRlciBoYW5kbGUgKHVzZSAtd2Via2l0LSAoQ2hyb21lLCBPcGVyYSwgU2FmYXJpLCBFZGdlKSBhbmQgLW1vei0gKEZpcmVmb3gpIHRvIG92ZXJyaWRlIGRlZmF1bHQgbG9vaykgKi8gXHJcbiAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBPdmVycmlkZSBkZWZhdWx0IGxvb2sgKi9cclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMTVweDsgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxNXB4OyAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZDogIzk5OTsgLyogR3JlZW4gYmFja2dyb3VuZCAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBDdXJzb3Igb24gaG92ZXIgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgd2lkdGg6IDI1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cclxuICAgIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7IC8qIEdyZWVuIGJhY2tncm91bmQgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXHJcbiAgfVxyXG5cclxuICAubWVkaWNpbmVzLmNhcmQge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICAubWVkaWNpbmVzLmNhcmQgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1lZGljaW5lcy5jYXJkIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzk5OTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/drug-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/drug-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<div class=\"card medicines\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <ul>\r\n                    <li *ngFor=\"let medicine of medicine_list\">\r\n                        <a href=\"javascript:void(0);\"> {{ medicine.med_name }}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-xs-12 content tab-container\" id=\"tab-content\">\r\n        <div class=\"card\">\r\n            <div class=\"tab-component\">\r\n                <div class=\"tabs\">\r\n                    <input id=\"tab1\" type=\"radio\" name=\"tabs\" checked=\"checked\" />\r\n                    <label for=\"tab1\" (click)=\"openTab($event);\">Mon</label>\r\n                        \r\n                    <input id=\"tab2\" type=\"radio\" name=\"tabs\" />\r\n                    <label for=\"tab2\" (click)=\"openTab($event);\">Tue</label>\r\n                        \r\n                    <input id=\"tab3\" type=\"radio\" name=\"tabs\" />\r\n                    <label for=\"tab3\" (click)=\"openTab($event);\">Wed</label>\r\n                        \r\n                    <input id=\"tab4\" type=\"radio\" name=\"tabs\" />\r\n                    <label for=\"tab4\" (click)=\"openTab($event);\">Thu</label>\r\n                    \r\n                    <input id=\"tab5\" type=\"radio\" name=\"tabs\" />\r\n                    <label for=\"tab5\" (click)=\"openTab($event);\">Fri</label>\r\n                    \r\n                    <input id=\"tab6\" type=\"radio\" name=\"tabs\" />\r\n                    <label for=\"tab6\" (click)=\"openTab($event);\">Sat</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-content\">\r\n                <section id=\"tab1-content\" class=\"active\">\r\n                    <ul class=\"list\" id=\"list\">\r\n                         <li *ngFor=\"let drug of list; let i = index;\"><a [attr.data-index]=\"i\" href=\"javascript:void(0);\" (click)=\"notify($event)\" hm-tap=\"onHammer\">{{drug.name}}<span class=\"quantity\">{{drug.quantity}}</span></a></li>\r\n                        <li *ngFor=\"let drug of drugs; let i = index;\">\r\n                            <a [attr.data-index]=\"i\" href=\"javascript:void(0);\" class=\"drugname\" (click)=\"populateDrugs()\">\r\n                                {{ (i+1) +'. ' + drug.med_name}}<span class=\"quantity\">{{quantity}}</span>\r\n                                <div class=\"slidecontainer\">\r\n                                    <input type=\"range\" min=\"1\" max=\"100\" value=\"0\" class=\"slider\" id=\"myRange\" (input)=\"onDrag($event)\">\r\n                                </div>\r\n                            </a>\r\n                            <span class=\"filler\"></span>\r\n                        </li>\r\n                    </ul>\r\n                </section>  \r\n                <section id=\"tab2-content\">\r\n                   <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"openModal($event)\"></drug-list> -->\r\n                    <!-- <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"modifyCount($event)\"></drug-list>\r\n                </section>\r\n                <section id=\"tab3-content\">\r\n                   <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"openModal($event)\"></drug-list> -->\r\n                    <!-- <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"modifyCount($event)\"></drug-list>\r\n                </section>\r\n                <section id=\"tab4-content\">\r\n                    <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"openModal($event)\"></drug-list> -->\r\n                    <!-- <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"modifyCount($event)\"></drug-list>\r\n                </section>\r\n                <section id=\"tab5-content\">\r\n                     <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"openModal($event)\"></drug-list> -->\r\n                    <!-- <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"modifyCount($event)\"></drug-list>\r\n                </section>\r\n                <section id=\"tab6-content\">\r\n                     <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"openModal($event)\"></drug-list> -->\r\n                    <!-- <drug-list [list]=\"drugs\" (result)=\"displayTotal($event)\" (openModifier)=\"modifyCount($event)\"></drug-list>\r\n                </section>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/drug-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/drug-list.component.ts ***!
  \***************************************************/
/*! exports provided: DrugList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugList", function() { return DrugList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/index.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mathjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





var DrugList = /** @class */ (function () {
    function DrugList(dataService) {
        this.dataService = dataService;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openModifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.medicine_list = [];
        this.total = 0;
        this.quantity = 0;
        this.ddOverlay = false;
        this.modifierStatus = false;
    }
    DrugList.prototype.ngOnInit = function () {
        var _this = this;
        var drugsobj = this.dataService.getMedicines().subscribe(function (data) {
            _this.medicine_list = data['records'];
            console.log(_this.medicine_list);
        }, function (error) { return console.log(error); });
    };
    DrugList.prototype.toggleDropdown = function ($event) {
        $event.target.parentNode.classList.toggle('active');
        this.ddOverlay = $event.target.parentNode.classList.contains('active');
    };
    DrugList.prototype.updateResult = function (obj_drug, p_bool) {
        var price = parseFloat(obj_drug.price).toFixed(2);
        if (p_bool) {
            this.total = mathjs__WEBPACK_IMPORTED_MODULE_3__["add"](this.total, price).toFixed(2);
        }
        else {
            if (this.total > 0) {
                this.total = mathjs__WEBPACK_IMPORTED_MODULE_3__["subtract"](this.total, price).toFixed(2);
            }
        }
        this.result.emit(this.total);
    };
    DrugList.prototype.clearHighlight = function () {
        var list = document.querySelectorAll(".list li");
        for (var i = 0; i < list.length; i++) {
            list[i].querySelector("a").classList.remove("active-drug");
        }
    };
    DrugList.prototype.selectItem = function ($evt, p_str) {
        $evt.target.parentNode.parentNode.parentNode.classList.remove("active");
        if (p_str == 'dist') {
            document.querySelector("#distname").innerHTML = $evt.target.getAttribute("value");
        }
        else if (p_str == 'loc') {
            document.querySelector("#locname").innerHTML = $evt.target.getAttribute("value");
        }
        this.ddOverlay = false;
    };
    DrugList.prototype.ngOnDestroy = function () {
        console.log("asdfhg");
    };
    DrugList.prototype.notify = function ($event) {
        this.selectedElement = $event.target.querySelector('.quantity');
        this.quantity = this.selectedElement.firstChild.nodeValue;
        this.modifierStatus = !this.modifierStatus;
        this.openModifier.emit({ event: this.modifierStatus, quantity: this.quantity });
    };
    DrugList.prototype.onPanRight = function ($event) {
        this.selectedElement = $event.target.querySelector('.quantity');
        this.quantity = this.selectedElement.firstChild.nodeValue;
        var filler = $event.target.parentNode.querySelector('.filler').style.width = this.quantity + '%';
        this.modifierStatus = !this.modifierStatus;
        if (this.quantity < 100) {
            this.quantity = mathjs__WEBPACK_IMPORTED_MODULE_3__["add"](this.quantity, 1).toFixed(0);
            this.openModifier.emit({ event: true, quantity: this.quantity, element: this.selectedElement, index: $event.target.getAttribute("data-index"), indicator: $event.target.getElementsByClassName('filler')[0] });
        }
    };
    DrugList.prototype.onPanLeft = function ($event) {
        this.selectedElement = $event.target.querySelector('.quantity');
        this.quantity = this.selectedElement.firstChild.nodeValue;
        this.modifierStatus = !this.modifierStatus;
        var filler = $event.target.parentNode.querySelector('.filler').style.width = this.quantity + '%';
        if (this.quantity > 0) {
            this.quantity = mathjs__WEBPACK_IMPORTED_MODULE_3__["subtract"](this.quantity, 1).toFixed(0);
            this.openModifier.emit({ event: false, quantity: this.quantity, element: this.selectedElement, index: $event.target.getAttribute("data-index"), indicator: $event.target.getElementsByClassName('filler')[0] });
        }
    };
    DrugList.prototype.populateDrugs = function () {
        console.log('asdas');
    };
    DrugList.prototype.onDrag = function ($event) {
        this.selectedElement = $event.target.parentNode.parentNode.querySelector('.quantity');
        this.quantity = this.selectedElement.firstChild.nodeValue;
        this.modifierStatus = !this.modifierStatus;
        this.openModifier.emit({ event: this.modifierStatus, quantity: this.quantity });
        $event.stopPropagation();
    };
    DrugList.prototype.openTab = function ($evt) { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DrugList.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DrugList.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DrugList.prototype, "openModifier", void 0);
    DrugList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'drug-list',
            template: __webpack_require__(/*! ./drug-list.component.html */ "./src/app/components/drug-list.component.html"),
            styles: [__webpack_require__(/*! ./drug-list.component.css */ "./src/app/components/drug-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], DrugList);
    return DrugList;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    width: 100%;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.footnote {\r\n    display: block;\r\n    font-size: 10px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixRQUFRO0lBQ1IsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59XHJcblxyXG4uZm9vdG5vdGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n        <div class=\"footnote\">Icons made by <a href=\"https://www.flaticon.com/packs/teamwork-52\" title=\"Teamwork\">Teamwork</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Footer = /** @class */ (function () {
    function Footer() {
    }
    Footer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        })
    ], Footer);
    return Footer;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-component {\r\n    background: #019be5;\r\n    /* box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.16);\r\n    -webkit-box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.16);\r\n    -moz-box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.16); */\r\n    /* margin-bottom: 5px; */\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n}\r\n.welcome-user {\r\n    display: block;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    /* margin-left: 15px; */\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n.back-arrow {\r\n    display: block;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n}\r\n.utility-icons a {\r\n    font-size: 20px;\r\n    padding: 5px 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEI7O3lEQUVxRDtJQUNyRCx5QkFBeUI7SUFDekIsd0NBQXdDO0NBQzNDO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb21wb25lbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzAxOWJlNTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAxcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDJweCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xNik7ICovXHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA1cHg7ICovXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuLndlbGNvbWUtdXNlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxNXB4OyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2stYXJyb3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi51dGlsaXR5LWljb25zIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container header-component\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <a href=\"javascript:void(0)\" class=\"back-arrow\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\r\n            \r\n        </div>\r\n        <div class=\"col-6\"><h2 class=\"welcome-user\">Welcome! Sunil</h2></div>\r\n        <div class=\"col utility-icons\">\r\n            <a href=\"javascript:void(0)\" class=\"pull-right\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i></a>\r\n            <a href=\"javascript:void(0)\" class=\"pull-right\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Header = /** @class */ (function () {
    function Header() {
    }
    Header = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], Header);
    return Header;
}());



/***/ }),

/***/ "./src/app/components/radiobutton/radiobutton.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/radiobutton/radiobutton.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-group-holder {\r\n    position: relative;\r\n}\r\n\r\n[type=\"radio\"]:checked,\r\n[type=\"radio\"]:not(:checked) {\r\n    position: absolute;\r\n    left: 0;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n[type=\"radio\"]:checked + label,\r\n[type=\"radio\"]:not(:checked) + label\r\n{\r\n    position: relative;\r\n    padding-left: 28px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n    color: #666;\r\n}\r\n\r\n[type=\"radio\"]:checked + label:before,\r\n[type=\"radio\"]:not(:checked) + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 18px;\r\n    height: 18px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n}\r\n\r\n[type=\"radio\"]:checked + label:after,\r\n[type=\"radio\"]:not(:checked) + label:after {\r\n    content: '';\r\n    width: 12px;\r\n    height: 12px;\r\n    background: #F87DA9;\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    border-radius: 100%;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n[type=\"radio\"]:not(:checked) + label:after {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n}\r\n\r\n[type=\"radio\"]:checked + label:after {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYWRpb2J1dHRvbi9yYWRpb2J1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0NBQ25COztBQUNEOzs7SUFHSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7Q0FDZjs7QUFDRDs7SUFFSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQjs7QUFDRDs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CO0lBRXBCLDBCQUEwQjtDQUM3Qjs7QUFDRDtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW8tZ3JvdXAtaG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkLFxyXG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwsXHJcblt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxyXG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsXHJcblt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjg3REE5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG5bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/radiobutton/radiobutton.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/radiobutton/radiobutton.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Template for Horizontal layout -->\r\n<div class=\"row\" *ngIf=\"isHorizontalLayout\">\r\n  <div class=\"col-xs-6 col-sm-6 col-md-6\" *ngFor=\"let option of options.labels\">\r\n    <p class=\"radio-group-holder\">\r\n      <input type=\"radio\" [attr.name]=\"options.group\" [attr.value]=\"option\" (click)=\"selectOption($event)\">\r\n      <label for=\"\">{{option}}</label>\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!isHorizontalLayout\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12\" *ngFor=\"let option of options.labels\">\r\n    <p class=\"radio-group-holder\">\r\n      <input type=\"radio\" [attr.name]=\"options.group\" [attr.value]=\"option\" (click)=\"selectOption($event)\">\r\n      <label for=\"\">{{option}}</label>\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/radiobutton/radiobutton.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/radiobutton/radiobutton.component.ts ***!
  \*****************************************************************/
/*! exports provided: RadiobuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiobuttonComponent", function() { return RadiobuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadiobuttonComponent = /** @class */ (function () {
    function RadiobuttonComponent() {
        this.isHorizontalLayout = false;
        this.selectedRadio = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RadiobuttonComponent.prototype.ngOnInit = function () {
        this.isHorizontalLayout = this.options.layout == 'horizontal' ? true : false;
        console.log(this.isHorizontalLayout);
    };
    RadiobuttonComponent.prototype.selectOption = function ($event) {
        this.selectedRadio.emit($event.target.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadiobuttonComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadiobuttonComponent.prototype, "selectedRadio", void 0);
    RadiobuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radiogroup',
            template: __webpack_require__(/*! ./radiobutton.component.html */ "./src/app/components/radiobutton/radiobutton.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./radiobutton.component.css */ "./src/app/components/radiobutton/radiobutton.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadiobuttonComponent);
    return RadiobuttonComponent;
}());



/***/ }),

/***/ "./src/app/doctors_list/doctors.list.css":
/*!***********************************************!*\
  !*** ./src/app/doctors_list/doctors.list.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3RvcnNfbGlzdC9kb2N0b3JzLmxpc3QuY3NzIn0= */"

/***/ }),

/***/ "./src/app/doctors_list/doctors.list.html":
/*!************************************************!*\
  !*** ./src/app/doctors_list/doctors.list.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<ul>\r\n    <li *ngFor=\"let doctor of doctors\">{{doctor.doctor_name}}</li>\r\n</ul>"

/***/ }),

/***/ "./src/app/doctors_list/doctors.list.ts":
/*!**********************************************!*\
  !*** ./src/app/doctors_list/doctors.list.ts ***!
  \**********************************************/
/*! exports provided: DoctorsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsList", function() { return DoctorsList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



var DoctorsList = /** @class */ (function () {
    function DoctorsList(dataService) {
        this.dataService = dataService;
        this.doctors = [];
    }
    DoctorsList.prototype.ngOnInit = function () {
        var _this = this;
        var doctorsobj = this.dataService.getDoctors('EVERSHINE').subscribe(function (data) {
            _this.doctors = data['records'];
            console.log(_this.doctors);
        }, function (error) { return console.log(error); });
    };
    DoctorsList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'doctors-list',
            template: __webpack_require__(/*! ./doctors.list.html */ "./src/app/doctors_list/doctors.list.html"),
            styles: [__webpack_require__(/*! ./doctors.list.css */ "./src/app/doctors_list/doctors.list.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], DoctorsList);
    return DoctorsList;
}());



/***/ }),

/***/ "./src/app/landingpage/landing-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/landingpage/landing-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand {\r\n    width: 30px;\r\n    height: 30px;\r\n    position: fixed;\r\n    top: 15px;\r\n    left: 15px;\r\n    z-index: 9;\r\n}\r\n\r\n.brand img {\r\n    width: 100%;\r\n}\r\n\r\n.page-header {\r\n    margin: 0;\r\n    /* padding: 0 10px; */\r\n}\r\n\r\n.page-header h1 {\r\n    margin: 0;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #3140a0;\r\n    text-align: left;\r\n}\r\n\r\n.page-header h4 {\r\n    margin: 10px 0;\r\n    font-size: 15px;\r\n    font-weight: 100;\r\n    color: #424242;\r\n    text-align: left;\r\n}\r\n\r\n.page-header p {\r\n    margin-top: 5px;\r\n    font-size: 11px;\r\n    font-weight: 400;\r\n    text-align: left;\r\n    color: #3140a0;\r\n}\r\n\r\n.page-header img {\r\n    width: 50px;\r\n}\r\n\r\n.page-header .left-block {\r\n    width: 10%;\r\n    float: left;\r\n}\r\n\r\n.page-header .right-block {\r\n    width: 85%;\r\n    float: right;\r\n    padding-left: 0px;\r\n}\r\n\r\n.client {\r\n    /* width: 50%; */\r\n    /* float: left; */\r\n    /* margin: 10px 0; */\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #3140a0;\r\n    text-align: left;\r\n}\r\n\r\n.location {\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    color: #424242;\r\n    text-align: left;\r\n}\r\n\r\n.list {\r\n    height: 60vh;\r\n    overflow: scroll;\r\n    /* padding-bottom: 160px; */\r\n}\r\n\r\n.list-footer {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    bottom: 0;\r\n    left: 0;\r\n    /* padding: 10px; */\r\n    /* background: #1de9b6; */\r\n    /* border-top: 1px solid #e7e7e7; */\r\n    box-sizing: border-box;\r\n    /* box-shadow: -1px -3px 10px #e7e7e7; */\r\n}\r\n\r\n.list-footer .label, .list-footer .total {\r\n    color: #3140a0;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    float: left;\r\n}\r\n\r\n.list-footer .total {\r\n    float: right;\r\n}\r\n\r\n.services li {\r\n    display: block;\r\n    width: 30%;\r\n    height: 135px;\r\n    text-align: center;\r\n    padding: 20px;\r\n    margin: 5px;\r\n    background: #fff;\r\n    float: left;\r\n    border:1px solid rgba(0,0,0,0.1);\r\n}\r\n\r\n.services li h3.service-name {\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n    color: #424242;\r\n    margin: 10px 0;\r\n}\r\n\r\n.services li p {\r\n    font-weight: 300;\r\n}\r\n\r\n/* .dropdown-component {\r\n    background: #3140a0;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    margin: 10px 0;\r\n} */\r\n\r\n.overlay {\r\n    width: 100%;\r\n    height: 100vh;\r\n    /* position: fixed; */\r\n    background: rgba(255,255,255,.7);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.wrapper-dropdown-2 {\r\n    /* Size and position */\r\n    position: relative; /* Enable absolute positioning for children and pseudo elements */\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    /* padding: 10px 15px; */\r\n\r\n    /* Styles */\r\n    background: #fff;\r\n    /* border-left: 5px solid grey; */\r\n    cursor: pointer;\r\n    outline: none;\r\n    text-align: left;\r\n    /* background: #3140a0; */\r\n    color: #424242;\r\n    border-radius: 5px;\r\n    /* margin: 10px 0; */\r\n}\r\n\r\n.wrapper-dropdown-2:after {\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    /* position: absolute;\r\n    right: 16px;\r\n    top: 50%; */\r\n    margin-top: -3px;\r\n    /* border-width: 6px 6px 0 6px; */\r\n    /* border-style: solid; */\r\n    /* border-color: grey transparent; */\r\n}\r\n\r\n.wrapper-dropdown-2 a {\r\n    text-decoration: none;\r\n    color: #3140a0;\r\n    /* font-size: 16px; */\r\n    /* font-weight: 500; */\r\n    /* margin-left: 50px; */\r\n        /* position: absolute;\r\n        left: 0; */\r\n}\r\n\r\n.wrapper-dropdown-2 .dropdown {\r\n    /* Size & position */\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    right: 0px;\r\n    z-index: 9;\r\n    padding: 0;\r\n      \r\n    height: 300px;\r\n    overflow: scroll;\r\n  \r\n    /* Styles */\r\n    background: white;\r\n    transition: all 0.3s ease-out;\r\n    list-style: none;\r\n\r\n    /* Hiding */\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    text-align: left;\r\n}\r\n\r\n.wrapper-dropdown-2 .dropdown li a {\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #333;\r\n    /* border-left: 5px solid; */\r\n    padding: 10px;\r\n    transition: all 0.3s ease-out;\r\n    border-bottom: 1px solid #e7e7e7;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    position: relative;\r\n}\r\n\r\n.wrapper-dropdown-2 .dropdown li:nth-child(1) a { \r\n    border-left-color: #00ACED;\r\n}\r\n\r\n.wrapper-dropdown-2 .dropdown li:nth-child(2) a {\r\n    border-left-color: #4183C4;\r\n}\r\n\r\n.wrapper-dropdown-2 .dropdown li:nth-child(3) a {\r\n    border-left-color: #3B5998;\r\n}\r\n\r\n.wrapper-dropdown-2 .dropdown li i {\r\n    margin-right: 5px;\r\n    color: inherit;\r\n    vertical-align: middle;\r\n}\r\n\r\n/* Hover state */\r\n\r\n.wrapper-dropdown-2 .dropdown li:hover a {\r\n    color: grey;\r\n}\r\n\r\n.wrapper-dropdown-2.active:after {\r\n    border-width: 0 6px 6px 6px;\r\n}\r\n\r\n.wrapper-dropdown-2.active .dropdown {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n}\r\n\r\n/* MODAL POPUP */\r\n\r\n.modal-popup {\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 99;\r\n    background: rgba(0,0,0,.3);\r\n}\r\n\r\n.modal-popup.active {\r\n    display: block;\r\n}\r\n\r\n.modal-popup .modal-content {\r\n    width: 200px;\r\n    min-height: 50px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-left: -100px;\r\n    background: #fff;\r\n    padding: 15px;\r\n    box-sizing: border-box;\r\n    text-align: center; \r\n}\r\n\r\n.modal-popup .modal-content input {\r\n    width: 50%;\r\n    margin: 0 10px;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    border:1px solid #e7e7e7;\r\n}\r\n\r\n.modal-popup .modal-content button {\r\n    background: transparent;\r\n    border: none;\r\n}\r\n\r\n.btn-fat {\r\n    padding: 15px;\r\n    /* background: #f00; */\r\n    border: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ3BhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFVBQVU7SUFDVixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksV0FBVztJQUNYLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztBQUlEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw0QkFBNEI7Q0FDL0I7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixRQUFRO0lBQ1Isb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLHlDQUF5QztDQUM1Qzs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7Ozs7O0lBS0k7O0FBRUo7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztDQUNkOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQixDQUFDLGtFQUFrRTtJQUN0RixZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5Qjs7SUFFekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Y7O2dCQUVZO0lBQ1osaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIscUNBQXFDO0NBQ3hDOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtRQUNwQjttQkFDVztDQUNsQjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7O0lBRVgsY0FBYztJQUNkLGlCQUFpQjs7SUFFakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsaUJBQWlCOztJQUVqQixZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHVCQUF1QjtDQUMxQjs7QUFFRCxpQkFBaUI7O0FBRWpCO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtDQUN4Qjs7QUFJRCxpQkFBaUI7O0FBQ2pCO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZ3BhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJhbmQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG5cclxuLmJyYW5kIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIHBhZGRpbmc6IDAgMTBweDsgKi9cclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMxNDBhMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciBoNCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciBwIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICMzMTQwYTA7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciAubGVmdC1ibG9jayB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciAucmlnaHQtYmxvY2sge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4uY2xpZW50IHtcclxuICAgIC8qIHdpZHRoOiA1MCU7ICovXHJcbiAgICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICAgIC8qIG1hcmdpbjogMTBweCAwOyAqL1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMzE0MGEwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmxvY2F0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmxpc3Qge1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAxNjBweDsgKi9cclxufVxyXG5cclxuLmxpc3QtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQ6ICMxZGU5YjY7ICovXHJcbiAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNzsgKi9cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBib3gtc2hhZG93OiAtMXB4IC0zcHggMTBweCAjZTdlN2U3OyAqL1xyXG59XHJcblxyXG4ubGlzdC1mb290ZXIgLmxhYmVsLCAubGlzdC1mb290ZXIgLnRvdGFsIHtcclxuICAgIGNvbG9yOiAjMzE0MGEwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubGlzdC1mb290ZXIgLnRvdGFsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnNlcnZpY2VzIGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuLnNlcnZpY2VzIGxpIGgzLnNlcnZpY2UtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnNlcnZpY2VzIGxpIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLyogLmRyb3Bkb3duLWNvbXBvbmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzE0MGEwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufSAqL1xyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLndyYXBwZXItZHJvcGRvd24tMiB7XHJcbiAgICAvKiBTaXplIGFuZCBwb3NpdGlvbiAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBFbmFibGUgYWJzb2x1dGUgcG9zaXRpb25pbmcgZm9yIGNoaWxkcmVuIGFuZCBwc2V1ZG8gZWxlbWVudHMgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIC8qIHBhZGRpbmc6IDEwcHggMTVweDsgKi9cclxuXHJcbiAgICAvKiBTdHlsZXMgKi9cclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZXk7ICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIC8qIGJhY2tncm91bmQ6ICMzMTQwYTA7ICovXHJcbiAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIG1hcmdpbjogMTBweCAwOyAqL1xyXG59XHJcblxyXG4ud3JhcHBlci1kcm9wZG93bi0yOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgdG9wOiA1MCU7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgLyogYm9yZGVyLXdpZHRoOiA2cHggNnB4IDAgNnB4OyAqL1xyXG4gICAgLyogYm9yZGVyLXN0eWxlOiBzb2xpZDsgKi9cclxuICAgIC8qIGJvcmRlci1jb2xvcjogZ3JleSB0cmFuc3BhcmVudDsgKi9cclxufVxyXG5cclxuLndyYXBwZXItZHJvcGRvd24tMiBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzE0MGEwO1xyXG4gICAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDUwMDsgKi9cclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA1MHB4OyAqL1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwOyAqL1xyXG59XHJcblxyXG4ud3JhcHBlci1kcm9wZG93bi0yIC5kcm9wZG93biB7XHJcbiAgICAvKiBTaXplICYgcG9zaXRpb24gKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIFxyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgXHJcbiAgICAvKiBTdHlsZXMgKi9cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgIC8qIEhpZGluZyAqL1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLndyYXBwZXItZHJvcGRvd24tMiAuZHJvcGRvd24gbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLndyYXBwZXItZHJvcGRvd24tMiAuZHJvcGRvd24gbGk6bnRoLWNoaWxkKDEpIGEgeyBcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDBBQ0VEO1xyXG59XHJcblxyXG4ud3JhcHBlci1kcm9wZG93bi0yIC5kcm9wZG93biBsaTpudGgtY2hpbGQoMikgYSB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQxODNDNDtcclxufVxyXG5cclxuLndyYXBwZXItZHJvcGRvd24tMiAuZHJvcGRvd24gbGk6bnRoLWNoaWxkKDMpIGEge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMzQjU5OTg7XHJcbn1cclxuXHJcbi53cmFwcGVyLWRyb3Bkb3duLTIgLmRyb3Bkb3duIGxpIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi8qIEhvdmVyIHN0YXRlICovXHJcblxyXG4ud3JhcHBlci1kcm9wZG93bi0yIC5kcm9wZG93biBsaTpob3ZlciBhIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4ud3JhcHBlci1kcm9wZG93bi0yLmFjdGl2ZTphZnRlciB7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgNnB4IDZweCA2cHg7XHJcbn1cclxuXHJcbi53cmFwcGVyLWRyb3Bkb3duLTIuYWN0aXZlIC5kcm9wZG93biB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLyogTU9EQUwgUE9QVVAgKi9cclxuLm1vZGFsLXBvcHVwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjMpO1xyXG59XHJcblxyXG4ubW9kYWwtcG9wdXAuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubW9kYWwtcG9wdXAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cclxuXHJcbi5tb2RhbC1wb3B1cCAubW9kYWwtY29udGVudCBpbnB1dCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZTdlN2U3O1xyXG59XHJcblxyXG4ubW9kYWwtcG9wdXAgLm1vZGFsLWNvbnRlbnQgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYnRuLWZhdCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogI2YwMDsgKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/landingpage/landing-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/landingpage/landing-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<div class=\"overlay\" *ngIf=\"ddOverlay\"></div>\r\n<div class=\"container\">\r\n\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            &nbsp;\r\n        </div>\r\n    </div> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <ul class=\"services\">\r\n                <li (click)=\"loadPatchList()\">\r\n                    <img src=\"assets/images/calendar.png\" alt=\"\">\r\n                    <h3 class=\"service-name\">Todays Schedule</h3>\r\n                </li>\r\n                <li (click)=\"loadScheduler()\">\r\n                    <img src=\"assets/images/timeline_64.png\" alt=\"\">\r\n                    <h3 class=\"service-name\">Tour Planner</h3>\r\n                </li>\r\n                <li (click)=\"loadDoctorsList()\">\r\n                    <img src=\"assets/images/my_doctors_64.png\" alt=\"\">\r\n                    <h3 class=\"service-name\">My Doctors</h3>\r\n                </li>\r\n                <li>\r\n                    <img src=\"assets/images/campaign_64.png\" alt=\"\">\r\n                    <h3 class=\"service-name\">Campaign</h3>\r\n                </li>\r\n                <li>\r\n                    <img src=\"assets/images/reports_64.png\" alt=\"\">\r\n                    <h3 class=\"service-name\">Reports</h3>\r\n                </li>\r\n                <li>\r\n                    <img src=\"assets/images/my_chemist_64.png\" alt=\"\">\r\n                    <h3 class=\"service-name\">My Chemist</h3>\r\n                </li>\r\n                <li>\r\n                    <img src=\"assets/images/settings_64.png\" alt=\"\">\r\n                    <h3 class=\"service-name\">User Settings</h3>\r\n                </li>\r\n            </ul>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-xs-12 text-center content page-header\">\r\n            <div class=\"card\">\r\n                <div class=\"back\">\r\n                    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <div class=\"left-block\">\r\n                    <span><img src=\"assets/images/sales-report.png\" alt=\"\"></span>\r\n                </div>\r\n                <div class=\"right-block\">\r\n                    <h1>Daily Sales</h1>\r\n                    <p>Sunday: Jan 27, 2019</p>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-xs-12 content\">\r\n            <div class=\"card\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <app-dropdown [list]=\"locations\" [label]=\"location_label\" (locationChange)=\"onSelection($event)\"></app-dropdown>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <app-radiogroup [options]=\"customers\" (selectedRadio)=\"onOptionSelect($event)\"></app-radiogroup>\r\n                    </div>\r\n                </div>\r\n                <app-dropdown [list]=\"distributors\" [label]=\"distributor_label\" *ngIf=\"isDistributorSelected\"></app-dropdown>\r\n                <app-dropdown [list]=\"doctors\" [label]=\"doctor_label\" *ngIf=\"isDoctorSelected\"></app-dropdown>\r\n                <hr>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    \r\n</div>\r\n<footer></footer>\r\n<div class=\"modal-popup\" id=\"modal-popup\" (click)=\"hidePopup($event)\">\r\n    <div class=\"modal-content\">\r\n        <button (click)=\"increment()\"><img src=\"assets/images/plus.png\" alt=\"\"></button>\r\n        <input type=\"text\" value={{count}} />\r\n        <button (click)=\"decrement()\"><img src=\"assets/images/minus.png\" alt=\"\"></button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/landingpage/landing-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/landingpage/landing-page.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LandingPage = /** @class */ (function () {
    function LandingPage(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        // ddOverlay:boolean = false;
        this.medicines = [];
        this.total = 0;
        this.ddOverlay = false;
        this.isDistributorSelected = false;
        this.isDoctorSelected = false;
        this.distributor_label = 'Select Distributor';
        this.location_label = 'Select Location';
        this.doctor_label = 'Select Doctor';
        this.customers = {
            "group": "customers",
            "layout": "horizontal",
            "labels": ["Doctor", "Distributor"]
        };
    }
    LandingPage.prototype.toggleDropdown = function ($event) {
        $event.target.parentNode.classList.toggle('active');
        this.ddOverlay = $event.target.parentNode.classList.contains('active');
    };
    LandingPage.prototype.selectItem = function ($evt, p_str) {
        $evt.target.parentNode.parentNode.parentNode.classList.remove("active");
        if (p_str == 'dist') {
            document.querySelector("#distname").innerHTML = $evt.target.getAttribute("value");
        }
        else if (p_str == 'loc') {
            document.querySelector("#locname").innerHTML = $evt.target.childNodes[1].textContent;
        }
        this.ddOverlay = false;
    };
    LandingPage.prototype.openTab = function ($event) {
        var tab_id;
        this.closeAllTabs();
        tab_id = $event.target.getAttribute("for");
        document.getElementById(tab_id + '-content').classList.remove("hide");
        document.getElementById(tab_id + '-content').classList.add("active");
    };
    LandingPage.prototype.closeAllTabs = function () {
        var content_list = document.querySelectorAll(".tab-content section");
        for (var i = 0; i < content_list.length; i++) {
            content_list[i].classList.remove('active');
            content_list[i].classList.add('hide');
        }
    };
    LandingPage.prototype.displayTotal = function ($event) {
        this.total = $event;
    };
    LandingPage.prototype.increment = function () {
    };
    LandingPage.prototype.decrement = function () { };
    LandingPage.prototype.ngOnInit = function () {
        // let area = this.dataService.getArea().subscribe(
        // 	(data) => {
        // 		this.locations = data['records'];
        // 		console.log(this.locations);
        // 	},
        // 	error => console.log(error)
        // );
    };
    LandingPage.prototype.openModal = function ($event) {
        this.count = $event.quantity;
        var modal = document.getElementById("modal-popup");
        modal.classList.add("active");
    };
    LandingPage.prototype.hidePopup = function ($event) {
        $event.target.classList.remove("active");
    };
    LandingPage.prototype.modifyCount = function ($event) {
        $event.element.firstChild.textContent = $event.quantity;
        var total = document.getElementById('total').firstChild.textContent = '100';
    };
    LandingPage.prototype.onSelection = function ($evt) {
        this.loadDistributors($evt.id);
    };
    LandingPage.prototype.loadDistributors = function (item_id) {
        var _this = this;
        var distributor = this.dataService.getDistributors(item_id).subscribe(function (data) {
            _this.distributors = data['records'];
            console.log(_this.distributors);
        }, function (error) { return console.log(error); });
    };
    LandingPage.prototype.onOptionSelect = function ($event) {
        if ($event.toLowerCase() == 'distributor') {
            this.isDistributorSelected = true;
            this.isDoctorSelected = false;
        }
        else if ($event.toLowerCase() == 'doctor') {
            this.isDoctorSelected = true;
            this.isDistributorSelected = false;
        }
    };
    LandingPage.prototype.showSelectedList = function () {
    };
    LandingPage.prototype.loadScheduler = function () {
        this.router.navigateByUrl('/schedule');
    };
    LandingPage.prototype.loadDoctorsList = function () {
        this.router.navigateByUrl('/doctors_list');
    };
    LandingPage.prototype.loadPatchList = function () {
        this.router.navigateByUrl('/patch_list');
    };
    LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landingpage/landing-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landingpage/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingPage);
    return LandingPage;
}());



/***/ }),

/***/ "./src/app/login/login-page.component.css":
/*!************************************************!*\
  !*** ./src/app/login/login-page.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-size: 20px;\r\n    font-family: roboto;\r\n}\r\n\r\n.login-page {\r\n    display: block;\r\n    min-height: 100vh;\r\n    background: rgba(49,64,160,1);\r\n    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(49,64,160,1)), color-stop(100%, rgba(0,151,136,1)));\r\n    background: linear-gradient(to bottom, rgba(49,64,160,1) 0%, rgba(0,151,136,1) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3140a0', endColorstr='#009788', GradientType=0 );\r\n}\r\n\r\n.form-holder {\r\n    width: 100%;\r\n    min-height: 100px;\r\n    position: relative;\r\n    position: fixed;\r\n    top: 20%;\r\n    left: 0;\r\n}\r\n\r\n.brand {\r\n    width: 100%;\r\n    /* position: fixed;\r\n    top: 30%;\r\n    left: 0; */ \r\n    margin-left: 0;\r\n    text-align: center;\r\n}\r\n\r\n.brand h1 {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-size: 30px;\r\n    color: #fff;\r\n}\r\n\r\nimg {\r\n    width: 100px;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* .brand .text {\r\n    font-size: 30px;\r\n    color: #fff;\r\n} */\r\n\r\n/* .login-form {\r\n    width: 250px;\r\n    position: fixed;\r\n    bottom: 25%;\r\n    left: 50%;\r\n    margin-left: -125px;\r\n} */\r\n\r\ninput {\r\n    width: 90%;\r\n    text-align: left;\r\n    padding: 10px;\r\n    background: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #cccccc38;\r\n}\r\n\r\n.user_credential {\r\n    color:#ffffff;\r\n}\r\n\r\ninput.user_credential::-webkit-input-placeholder {\r\n    color: #ddd;\r\n}\r\n\r\nbutton {\r\n    width: 100%;\r\n    color: rgba(49,64,160,1);\r\n    text-align: center;\r\n    font-weight: 500;\r\n}\r\n\r\n.loginButton {\r\n\tbox-shadow:inset 0px 1px 3px 0px #91b8b3;\r\n\tbackground-color:#fafafa;\r\n\tborder-radius:5px;\r\n\tborder:1px solid #566963;\r\n    display: block;\r\n    max-width: 100px;\r\n\tcursor:pointer;\r\n\tcolor:#313fa0;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight: 700;\r\n\tpadding:10px 20px;\r\n    text-decoration:none;\r\n    margin: 15px auto;\r\n}\r\n\r\n.loginButton:hover {\r\n\tbackground-color:#e8e7e7;\r\n}\r\n\r\n.loginButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .login-page {\r\n        width: 500px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .brand {\r\n        width: 500px;\r\n        left: auto;\r\n        margin: 0 auto;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOEJBQThCO0lBRTlCLDRIQUE0SDtJQUk1SCxxRkFBcUY7SUFDckYscUhBQXFIO0NBQ3hIOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxRQUFRO0NBQ1g7O0FBRUQ7SUFDSSxZQUFZO0lBQ1o7O2VBRVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGVBQWU7Q0FDbEI7O0FBRUQ7OztJQUdJOztBQUVKOzs7Ozs7SUFNSTs7QUFFSjtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUNBQW1DO0NBQ3RDOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtDQUdDLHlDQUF5QztDQUN6Qyx5QkFBeUI7Q0FHekIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCLGVBQWU7Q0FDZixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtDQUNyQjs7QUFDRDtDQUNDLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1I7O0FBR0Q7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxlQUFlO0tBQ2xCOztDQUVKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG59XHJcblxyXG4ubG9naW4tcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0OSw2NCwxNjAsMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoNDksNjQsMTYwLDEpIDAlLCByZ2JhKDAsMTUxLDEzNiwxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDQ5LDY0LDE2MCwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgwLDE1MSwxMzYsMSkpKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg0OSw2NCwxNjAsMSkgMCUsIHJnYmEoMCwxNTEsMTM2LDEpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgICAgIHJnYmEoNDksNjQsMTYwLDEpIDAlLCByZ2JhKDAsMTUxLDEzNiwxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDQ5LDY0LDE2MCwxKSAwJSwgcmdiYSgwLDE1MSwxMzYsMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDQ5LDY0LDE2MCwxKSAwJSwgcmdiYSgwLDE1MSwxMzYsMSkgMTAwJSk7XHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzMxNDBhMCcsIGVuZENvbG9yc3RyPScjMDA5Nzg4JywgR3JhZGllbnRUeXBlPTAgKTtcclxufVxyXG5cclxuLmZvcm0taG9sZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbGVmdDogMDsgKi8gXHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJyYW5kIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKiAuYnJhbmQgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0gKi9cclxuXHJcbi8qIC5sb2dpbi1mb3JtIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjVweDtcclxufSAqL1xyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYzM4O1xyXG59XHJcblxyXG4udXNlcl9jcmVkZW50aWFsIHtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuXHJcbmlucHV0LnVzZXJfY3JlZGVudGlhbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2RkZDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHJnYmEoNDksNjQsMTYwLDEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxvZ2luQnV0dG9uIHtcclxuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMHB4IDFweCAzcHggMHB4ICM5MWI4YjM7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDBweCAxcHggM3B4IDBweCAjOTFiOGIzO1xyXG5cdGJveC1zaGFkb3c6aW5zZXQgMHB4IDFweCAzcHggMHB4ICM5MWI4YjM7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czo1cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOjVweDtcclxuXHRib3JkZXItcmFkaXVzOjVweDtcclxuXHRib3JkZXI6MXB4IHNvbGlkICM1NjY5NjM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0Y29sb3I6IzMxM2ZhMDtcclxuXHRmb250LWZhbWlseTpBcmlhbDtcclxuXHRmb250LXNpemU6MTVweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdHBhZGRpbmc6MTBweCAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxufVxyXG4ubG9naW5CdXR0b246aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6I2U4ZTdlNztcclxufVxyXG4ubG9naW5CdXR0b246YWN0aXZlIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR0b3A6MXB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxvZ2luLXBhZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuYnJhbmQge1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login-page.component.html":
/*!*************************************************!*\
  !*** ./src/app/login/login-page.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <div class=\"form-holder\">\r\n                <div class=\"brand\">\r\n                    <img src=\"assets/images/brand-logo.png\" alt=\"\">\r\n                    <h1 class=\"text\">MEDRep</h1>\r\n                    <input type=\"text\" placeholder=\"Username\" class=\"user_credential\" />\r\n                    <input type=\"password\" placeholder=\"Password\" class=\"user_credential\" />\r\n                    <a href=\"#\" routerLinkActive=\"active\" routerLink=\"/login-page\" class=\"loginButton\" (click)=\"onLogin()\">LOGIN</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login-page.component.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-page.component.ts ***!
  \***********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var LoginPage = /** @class */ (function () {
    function LoginPage(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.user_obj = {
            email: 'ajay@j.com',
            password: '123'
        };
    }
    LoginPage.prototype.onLogin = function () {
        // this.dataService.loginuser(this.user_obj).subscribe( (result) => {
        //     console.log(result);
        // })
        this.router.navigate(['/landing-page']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/login/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login/login-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/patch/patch.component.css":
/*!*******************************************!*\
  !*** ./src/app/patch/patch.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".query-preparation.container {\r\n    padding: 5px;\r\n}\r\n\r\n.query-preparation .card-body {\r\n    padding: 0;\r\n}\r\n\r\n.query-preparation label, .query-preparation  input[type=text]{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.query-preparation label {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #646464;\r\n    text-align: left;\r\n}\r\n\r\n.query-preparation input[type=text]{\r\n    font-size: 14px;\r\n    color: #019be5;\r\n    border: none;\r\n    border-bottom: 1px solid #f7f7f7;\r\n    background: transparent;\r\n    outline: none;\r\n}\r\n\r\n.query-preparation input[type=text]::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #a6a6a6;\r\n    opacity: 1;\r\n}\r\n\r\n.query-preparation input[type=text]::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #a6a6a6;\r\n    opacity: 1;\r\n}\r\n\r\n.query-preparation input[type=text]::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #a6a6a6;\r\n    opacity: 1;\r\n}\r\n\r\n.query-preparation input[type=text]:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color: #a6a6a6;\r\n}\r\n\r\n.query-preparation input[type=text]::-ms-input-placeholder { /* Microsoft Edge */\r\n    color: #a6a6a6;\r\n}\r\n\r\n.query-preparation .pop-out {\r\n    width: 12px;\r\n    height: 12px;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 0;\r\n}\r\n\r\n.query-preparation .pop-out img {\r\n    width: 100%;\r\n}\r\n\r\n.list li {\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.list li a {\r\n    display: block;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    color: #7b7b7b;\r\n    text-decoration: none;\r\n    padding: 3px 5px;\r\n}\r\n\r\n.list li a:hover {\r\n    background: #999;\r\n    color: #fff;\r\n}\r\n\r\n.query-preparation .btn-submit {\r\n    width: 50%;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    background: #019be5;\r\n}\r\n\r\n.query-preparation .alert-danger {\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    padding: 5px 10px;\r\n    color: #000;\r\n}\r\n\r\n.modal-container {\r\n    overflow: hidden;\r\n}\r\n\r\n.modal-container .modal-body {\r\n    height: 90vh;\r\n    overflow: scroll;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0Y2gvcGF0Y2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixjQUFjO0NBQ2pCOztBQUVELGlFQUFtRCwwQ0FBMEM7SUFDekYsZUFBZTtJQUNmLFdBQVc7Q0FDZDs7QUFIRCw2REFBbUQsMENBQTBDO0lBQ3pGLGVBQWU7SUFDZixXQUFXO0NBQ2Q7O0FBSEQsbURBQW1ELDBDQUEwQztJQUN6RixlQUFlO0lBQ2YsV0FBVztDQUNkOztBQUVELDREQUE0RCw2QkFBNkI7SUFDckYsZUFBZTtDQUNsQjs7QUFFRCw2REFBNkQsb0JBQW9CO0lBQzdFLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osT0FBTztDQUNWOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhdGNoL3BhdGNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlcnktcHJlcGFyYXRpb24uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnF1ZXJ5LXByZXBhcmF0aW9uIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnF1ZXJ5LXByZXBhcmF0aW9uIGxhYmVsLCAucXVlcnktcHJlcGFyYXRpb24gIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucXVlcnktcHJlcGFyYXRpb24gbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnF1ZXJ5LXByZXBhcmF0aW9uIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAxOWJlNTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucXVlcnktcHJlcGFyYXRpb24gaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgIGNvbG9yOiAjYTZhNmE2O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4gIFxyXG4ucXVlcnktcHJlcGFyYXRpb24gaW5wdXRbdHlwZT10ZXh0XTotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6ICNhNmE2YTY7XHJcbn1cclxuICBcclxuLnF1ZXJ5LXByZXBhcmF0aW9uIGlucHV0W3R5cGU9dGV4dF06Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICBjb2xvcjogI2E2YTZhNjtcclxufVxyXG5cclxuLnF1ZXJ5LXByZXBhcmF0aW9uIC5wb3Atb3V0IHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5xdWVyeS1wcmVwYXJhdGlvbiAucG9wLW91dCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5saXN0IGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4ubGlzdCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjN2I3YjdiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogM3B4IDVweDtcclxufVxyXG5cclxuLmxpc3QgbGkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5xdWVyeS1wcmVwYXJhdGlvbiAuYnRuLXN1Ym1pdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMTliZTU7XHJcbn1cclxuXHJcbi5xdWVyeS1wcmVwYXJhdGlvbiAuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWJvZHkge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/patch/patch.component.html":
/*!********************************************!*\
  !*** ./src/app/patch/patch.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<div class=\"container query-preparation\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\" *ngIf=\"noRecords\">\r\n                <div class=\"col\">\r\n                    <div class=\"alert alert-danger\" role=\"alert\">\r\n                        No patches found for {{selectedArea}}. Please select a different area.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"\">Which area are you going to cover today?</label>\r\n                    <input type=\"text\" value={{selectedArea}} class=\"field left\" placeholder=\"Select Area\" readonly (click)=\"openArea(area)\">\r\n                    <span class=\"pop-out\"><img src=\"assets/images/pop-out.png\" alt=\"\" (click)=\"openArea(area)\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">&nbsp;</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"\">Which patch would you target today?</label>\r\n                    <input type=\"text\" value={{selectedPatch}} class=\"field left\" placeholder=\"Select Patch\" readonly (click)=\"openPatch(patch)\">\r\n                    <span class=\"pop-out\"><img src=\"assets/images/pop-out.png\" alt=\"\" (click)=\"openPatch(patch)\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">&nbsp;</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"\">Select a Doctor on your selected patch</label>\r\n                    <input type=\"text\" value={{selectedDoctor}} class=\"field left\" placeholder=\"Select Doctor\" readonly (click)=\"openDoctor(doctor)\">\r\n                    <span class=\"pop-out\"><img src=\"assets/images/pop-out.png\" alt=\"\" (click)=\"openDoctor(doctor)\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">&nbsp;</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col text-center\">\r\n                    <button class=\"btn btn-primary btn-submit\" (click)=\"loadMedicines()\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   \r\n<ul>\r\n    <li *ngFor=\"let patch of patches\">{{patch.patch}}</li>\r\n</ul>\r\n</div>\r\n\r\n<ng-template #area let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Select Area</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <ul class=\"list\">\r\n            <li *ngFor=\"let area of area_list; let i=index;\">\r\n                <a href=\"javascript:void(0);\" (click)=\"selectArea(area, i); modal.dismiss('Cross click')\"> {{ area.area_name }}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n    </div> -->\r\n</ng-template>\r\n\r\n<ng-template #patch let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Select Patch</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <ul class=\"list\">\r\n          <li *ngFor=\"let patch of patch_list; let i=index;\">\r\n             <a href=\"javascript:void(0);\" (click)=\"selectPatch(patch, i); modal.dismiss('Cross click')\"> {{ patch.patch_name }}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n    </div> -->\r\n</ng-template>\r\n\r\n<ng-template #doctor let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Select Doctor</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <ul class=\"list\">\r\n            <li *ngFor=\"let doctor of doctor_list\">\r\n                <a href=\"javascript:void(0);\" (click)=\"selectDoctor(doctor.doctor_name, modal);\"> {{ doctor.doctor_name }}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n    </div> -->\r\n</ng-template>\r\n\r\n<ng-template #medicine let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Units</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <ul class=\"list\">\r\n            <li *ngFor=\"let medicine of medicine_list\">\r\n                <a href=\"javascript:void(0);\"> {{ medicine.med_name }}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n    </div> -->\r\n</ng-template>"

/***/ }),

/***/ "./src/app/patch/patch.component.ts":
/*!******************************************!*\
  !*** ./src/app/patch/patch.component.ts ***!
  \******************************************/
/*! exports provided: PatchList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchList", function() { return PatchList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PatchList = /** @class */ (function () {
    function PatchList(dataService, modalService, router) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.router = router;
        this.patch_list = [];
        this.area_list = [];
        this.doctor_list = [];
        this.medicine_list = [];
        this.selectedArea = '';
        this.selectedPatch = '';
        this.selectedDoctor = '';
        this.noRecords = false;
    }
    PatchList.prototype.ngOnInit = function () {
        var _this = this;
        var area_obj = this.dataService.getArea().subscribe(function (data) {
            _this.area_list = data['records'];
            // console.log(this.area_list);
        }, function (error) { return console.log(error); });
    };
    PatchList.prototype.openArea = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PatchList.prototype.openPatch = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PatchList.prototype.openDoctor = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PatchList.prototype.openMedicine = function (content) {
        var _this = this;
        console.log(content);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PatchList.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PatchList.prototype.selectArea = function (p_area, id) {
        var _this = this;
        this.selectedArea = p_area.area_name;
        var patchesobj = this.dataService.getPatches(p_area.area_id).subscribe(function (data) {
            if (data['records']) {
                _this.patch_list = data['records'];
            }
            if (data['message']) {
                _this.noRecords = true;
                setTimeout(function () {
                    _this.noRecords = false;
                    _this.selectedArea = '';
                }, 3000);
                console.log(data['message']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    PatchList.prototype.selectPatch = function (p_patch, id) {
        var _this = this;
        this.selectedPatch = p_patch.patch_name;
        var doctorobj = this.dataService.getDoctors(p_patch.patch_name).subscribe(function (data) {
            _this.doctor_list = data['records'];
            // console.log(this.doctor_list);
        }, function (error) { return console.log(error); });
    };
    PatchList.prototype.selectDoctor = function (p_doctorname, m) {
        var _this = this;
        this.selectedDoctor = p_doctorname;
        var medicineobj = this.dataService.getMedicines().subscribe(function (data) {
            _this.medicine_list = data['records'];
            _this.activeModal = _this.modalService.open(_this.templateRef, { ariaLabelledBy: "modal-basic-title", backdrop: "static", keyboard: false, windowClass: "modal-container" });
        }, function (error) { return console.log(error); });
        m.dismiss('Cross click');
    };
    PatchList.prototype.loadMedicines = function () {
        this.router.navigateByUrl('/drug_list');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('medicine'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], PatchList.prototype, "templateRef", void 0);
    PatchList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'patch-list',
            template: __webpack_require__(/*! ./patch.component.html */ "./src/app/patch/patch.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./patch.component.css */ "./src/app/patch/patch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PatchList);
    return PatchList;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.css":
/*!***************************************!*\
  !*** ./src/app/schedule/schedule.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal-month-view .cal-day-cell {\r\n    min-height: auto;\r\n    height: 30px;\r\n    padding:0;\r\n}\r\n\r\n.cal-month-view .cal-cell-top {\r\n    min-height: auto;\r\n    padding: 0x;\r\n}\r\n\r\n.cal-month-view .cal-day-number {\r\n    margin: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n.cal-month-view .cal-day-badge, .cal-month-view .cal-event {\r\n    display: none;\r\n}\r\n\r\n.cal-month-view .cal-cell {\r\n    align-items: center;\r\n    padding-top: 8px;\r\n    font-weight: 500;\r\n}\r\n\r\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\r\n    font-size: 12px;\r\n}\r\n\r\n.cal-month-view .cal-open-day-events {\r\n    display: none;\r\n}\r\n\r\n.timeline_group {\r\n    width: 100%;\r\n    height: 35px;\r\n}\r\n\r\n.btn-timeline {\r\n    width: 33.33%;\r\n    padding: 10px 0;\r\n}\r\n\r\n.timeline-navigator {\r\n    width: 100%;\r\n    height: 40px;\r\n    background: #337ab7;\r\n}\r\n\r\n.btn-navigate {\r\n    position: absolute!important;\r\n}\r\n\r\n.btn-previous {\r\n    float: none;\r\n    clear: left;\r\n    left: 0;\r\n    border: none;\r\n    padding: 10px;\r\n}\r\n\r\n.btn-next {\r\n    float: none;\r\n    clear: right;\r\n    right: 0;\r\n    border: none;\r\n    padding: 10px;\r\n}\r\n\r\n.timeline-display {\r\n    float: none;\r\n    clear: both;\r\n    position: absolute!important;\r\n    left: 50%;\r\n    margin-left: -50px!important;\r\n    color: #fff;\r\n}\r\n\r\n.cal-month-view {\r\n    border: 1px solid #337ab7;\r\n}\r\n\r\n.cal-month-view .cal-cell-row .cal-cell:hover, .cal-month-view .cal-cell.cal-has-events.cal-open {\r\n    background: #337ab7;\r\n    color: #fff;    \r\n}\r\n\r\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n}\r\n\r\n.cal-month-view .cal-day-number {\r\n    opacity: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osUUFBUTtJQUNSLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtJQUNiLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLFlBQVk7Q0FDZjs7QUFDRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwge1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6MDtcclxufVxyXG5cclxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC10b3Age1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDB4O1xyXG59XHJcblxyXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktbnVtYmVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWJhZGdlLCAuY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IC5jYWwtZGF5LW51bWJlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGltZWxpbmVfZ3JvdXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5idG4tdGltZWxpbmUge1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLW5hdmlnYXRvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzdhYjc7XHJcbn1cclxuXHJcbi5idG4tbmF2aWdhdGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmV2aW91cyB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tbmV4dCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNsZWFyOiByaWdodDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWRpc3BsYXkge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHghaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmNhbC1tb250aC12aWV3IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzdhYjc7XHJcbn1cclxuXHJcbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93IC5jYWwtY2VsbDpob3ZlciwgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC5jYWwtaGFzLWV2ZW50cy5jYWwtb3BlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzM3YWI3O1xyXG4gICAgY29sb3I6ICNmZmY7ICAgIFxyXG59XHJcblxyXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtd2Vla2VuZCAuY2FsLWRheS1udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LW51bWJlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/schedule/schedule.html":
/*!****************************************!*\
  !*** ./src/app/schedule/schedule.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<div class=\"container\" style=\"overflow: auto;\">\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n      <div class=\"btn-group timeline_group\">\r\n          <div\r\n            class=\"btn btn-primary btn-timeline\"\r\n            (click)=\"setView(CalendarView.Month)\"\r\n            [class.active]=\"view === CalendarView.Month\"\r\n          >\r\n            Monthly\r\n          </div>\r\n          <div\r\n            class=\"btn btn-primary btn-timeline\"\r\n            (click)=\"setView(CalendarView.Week)\"\r\n            [class.active]=\"view === CalendarView.Week\"\r\n          >\r\n            Weekly\r\n          </div>\r\n          <div\r\n            class=\"btn btn-primary btn-timeline\"\r\n            (click)=\"setView(CalendarView.Day)\"\r\n            [class.active]=\"view === CalendarView.Day\"\r\n          >\r\n            Daily\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"btn-group timeline-navigator\">\r\n            <div\r\n              class=\"btn btn-primary btn-navigate btn-previous\"\r\n              mwlCalendarPreviousView\r\n              [view]=\"view\"\r\n              [(viewDate)]=\"viewDate\"\r\n              (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n            >\r\n            <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div\r\n              class=\"btn btn-outline-secondary timeline-display\"\r\n              mwlCalendarToday\r\n              [(viewDate)]=\"viewDate\"\r\n            >\r\n            <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n            </div>\r\n            <div\r\n              class=\"btn btn-primary btn-navigate btn-next\"\r\n              mwlCalendarNextView\r\n              [view]=\"view\"\r\n              [(viewDate)]=\"viewDate\"\r\n              (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n            >\r\n            <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-md-4\">\r\n          <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n        </div> -->\r\n        \r\n      </div>  \r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n      <div [ngSwitch]=\"view\">\r\n        <mwl-calendar-month-view\r\n          *ngSwitchCase=\"CalendarView.Month\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"events\"\r\n          [refresh]=\"refresh\"\r\n          [activeDayIsOpen]=\"activeDayIsOpen\"\r\n          (dayClicked)=\"dayClicked($event.day)\"\r\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n        >\r\n        </mwl-calendar-month-view>\r\n        <mwl-calendar-week-view\r\n          *ngSwitchCase=\"CalendarView.Week\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"events\"\r\n          [refresh]=\"refresh\"\r\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n        >\r\n        </mwl-calendar-week-view>\r\n        <mwl-calendar-day-view\r\n          *ngSwitchCase=\"CalendarView.Day\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"events\"\r\n          [refresh]=\"refresh\"\r\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n        >\r\n        </mwl-calendar-day-view>\r\n      </div>\r\n      </div>\r\n    </div>\r\n      <!-- Everything you see below is just for the demo, you don't need to include it in your app -->\r\n      \r\n      <br /><br /><br />\r\n      \r\n     <!--  <h3>\r\n        Edit events\r\n        <button class=\"btn btn-primary pull-right\" (click)=\"addEvent()\">\r\n          Add new\r\n        </button>\r\n        <div class=\"clearfix\"></div>\r\n      </h3>\r\n      \r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Title</th>\r\n              <th>Primary color</th>\r\n              <th>Secondary color</th>\r\n              <th>Starts at</th>\r\n              <th>Ends at</th>\r\n              <th>Remove</th>\r\n            </tr>\r\n          </thead>\r\n      \r\n          <tbody>\r\n            <tr *ngFor=\"let event of events\">\r\n              <td>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  [(ngModel)]=\"event.title\"\r\n                  (keyup)=\"refresh.next()\"\r\n                />\r\n              </td>\r\n              <td>\r\n                <input\r\n                  type=\"color\"\r\n                  [(ngModel)]=\"event.color.primary\"\r\n                  (change)=\"refresh.next()\"\r\n                />\r\n              </td>\r\n              <td>\r\n                <input\r\n                  type=\"color\"\r\n                  [(ngModel)]=\"event.color.secondary\"\r\n                  (change)=\"refresh.next()\"\r\n                />\r\n              </td>\r\n              <td>\r\n                <input\r\n                  class=\"form-control\"\r\n                  type=\"text\"\r\n                  mwlFlatpickr\r\n                  [(ngModel)]=\"event.start\"\r\n                  (ngModelChange)=\"refresh.next()\"\r\n                  [altInput]=\"true\"\r\n                  [convertModelValue]=\"true\"\r\n                  [enableTime]=\"true\"\r\n                  dateFormat=\"Y-m-dTH:i\"\r\n                  altFormat=\"F j, Y H:i\"\r\n                  placeholder=\"Not set\"\r\n                />\r\n              </td>\r\n              <td>\r\n                <input\r\n                  class=\"form-control\"\r\n                  type=\"text\"\r\n                  mwlFlatpickr\r\n                  [(ngModel)]=\"event.end\"\r\n                  (ngModelChange)=\"refresh.next()\"\r\n                  [altInput]=\"true\"\r\n                  [convertModelValue]=\"true\"\r\n                  [enableTime]=\"true\"\r\n                  dateFormat=\"Y-m-dTH:i\"\r\n                  altFormat=\"F j, Y H:i\"\r\n                  placeholder=\"Not set\"\r\n                />\r\n              </td>\r\n              <td>\r\n                <button class=\"btn btn-danger\" (click)=\"deleteEvent(event)\">\r\n                  Delete\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div> -->\r\n      \r\n      <ng-template #modalContent let-close=\"close\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Event action occurred</h5>\r\n          <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div>\r\n            Action:\r\n            <pre>{{ modalData?.action }}</pre>\r\n          </div>\r\n          <div>\r\n            Event:\r\n            <pre>{{ modalData?.event | json }}</pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n            OK\r\n          </button>\r\n        </div>\r\n      </ng-template>\r\n    </div>"

/***/ }),

/***/ "./src/app/schedule/schedule.ts":
/*!**************************************!*\
  !*** ./src/app/schedule/schedule.ts ***!
  \**************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");






var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var Scheduler = /** @class */ (function () {
    function Scheduler(modal) {
        var _this = this;
        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    Scheduler.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    Scheduler.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    };
    Scheduler.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    Scheduler.prototype.addEvent = function () {
        this.events = this.events.concat([
            {
                title: 'New event',
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ]);
    };
    Scheduler.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    Scheduler.prototype.setView = function (view) {
        this.view = view;
    };
    Scheduler.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], Scheduler.prototype, "modalContent", void 0);
    Scheduler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'scheduler',
            template: __webpack_require__(/*! ./schedule.html */ "./src/app/schedule/schedule.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./schedule.css */ "./src/app/schedule/schedule.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], Scheduler);
    return Scheduler;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = "http://localhost/medrep/";
    }
    DataService.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                'Authorization': "bc5ac4d4704afce664db8bafa6449e77"
            },
        });
        return next.handle(request);
    };
    DataService.prototype.getMedicines = function () {
        return this.http.get(this.baseUrl + 'medicines/read.php');
    };
    DataService.prototype.getArea = function () {
        return this.http.get(this.baseUrl + 'area/read.php');
    };
    DataService.prototype.getDistributors = function (item_id) {
        return this.http.get(this.baseUrl + 'distributors/102' + item_id);
    };
    DataService.prototype.getDoctors = function (patch) {
        return this.http.get(this.baseUrl + 'doctors/read.php?patch=' + patch);
    };
    DataService.prototype.getPatches = function (area_id) {
        return this.http.get(this.baseUrl + 'patch/read.php?area_id=' + area_id);
    };
    DataService.prototype.loginuser = function (obj) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.baseUrl + 'login.php', obj);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (!/localhost/.test(document.location.host)) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\medrep-cordova\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map