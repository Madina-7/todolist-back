function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/todo-list/todo-list.component */
    "./src/app/components/todo-list/todo-list.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'to-do-list';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "todo-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__["TodoListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/todo-list/todo-list.component */
    "./src/app/components/todo-list/todo-list.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/todo-list/todo-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/todo-list/todo-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: TodoListComponent */

  /***/
  function srcAppComponentsTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "crossed": a0
      };
    };

    function TodoListComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListComponent_div_6_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var todo_r1 = ctx.$implicit;
          return todo_r1.completed = $event;
        })("ngModelChange", function TodoListComponent_div_6_Template_input_ngModelChange_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var todo_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.updateItem(todo_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_div_6_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var todo_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.removeItem(todo_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", todo_r1.completed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, todo_r1.completed));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r1.title);
      }
    } //describe the class and after declare it 


    var TodoListComponent =
    /*#__PURE__*/
    function () {
      function TodoListComponent(http) {
        var _this = this;

        _classCallCheck(this, TodoListComponent);

        this.http = http;
        this.new_item = '';
        this.http.get('/api/task').subscribe(function (data) {
          console.log(data);
          _this.todos = data;
        }, function (error) {
          console.error('There was an error!', error);
        });
      }

      _createClass(TodoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addItem",
        value: function addItem() {
          var _this2 = this;

          if (this.new_item) {
            var newitem = {
              'title': this.new_item,
              'completed': false
            };
            this.http.post('/api/task', newitem).subscribe(function (data) {
              // retrieve updated list 
              _this2.http.get('/api/task').subscribe(function (data) {
                console.log(data); // send to html by replacing content of this.todos

                _this2.todos = data;
              }, function (error) {
                console.error('There was an error!', error);
              });
            }, function (error) {
              console.error('There was an error!', error);
            });
          }
        }
      }, {
        key: "updateItem",
        value: function updateItem(item) {
          var _this3 = this;

          this.http.put('/api/task', item).subscribe(function (data) {
            // retrieve updated list 
            _this3.http.get('/api/task').subscribe(function (data) {
              console.log(data); // send to html by replacing content of this.todos

              _this3.todos = data;
            }, function (error) {
              console.error('There was an error!', error);
            });
          }, function (error) {
            console.error('There was an error!', error);
          });
        }
      }, {
        key: "removeItem",
        value: function removeItem(todo) {
          var _this4 = this;

          // send id of task that needs to be deleted as query param
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('taskid', todo._id);
          var options = {
            params: httpParams
          };
          this.http.delete('/api/task', options).subscribe(function (data) {
            // retrieve updated list 
            _this4.http.get('/api/task').subscribe(function (data) {
              console.log(data); // send to html by replacing content of this.todos

              _this4.todos = data;
            }, function (error) {
              console.error('There was an error!', error);
            });
          }, function (error) {
            console.error('There was an error!', error);
          });
        }
      }]);

      return TodoListComponent;
    }();

    TodoListComponent.ɵfac = function TodoListComponent_Factory(t) {
      return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoListComponent,
      selectors: [["todo-list"]],
      decls: 7,
      vars: 2,
      consts: [["type", "text", "placeholder", "write here what you want to accomplish", 1, "todo-input", 3, "ngModel", "ngModelChange"], [1, "add", 3, "click"], ["class", "todo-item", 4, "ngFor", "ngForOf"], [1, "todo-item"], [1, "todo-item-left"], ["type", "checkbox", 1, "checkbox", 3, "ngModel", "ngModelChange"], [3, "ngClass"], [1, "remove-item"], [1, "remove-button", 3, "click"]],
      template: function TodoListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Let's Do This");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.new_item = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_Template_button_click_4_listener() {
            return ctx.addItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoListComponent_div_6_Template, 8, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.new_item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n.todo-input[_ngcontent-%COMP%] {\r\n    width:80%;\r\n    font-size:15px;\r\n    padding:10px;\r\n    margin-bottom: 16px;\r\n    border: 1px solid grey;\r\n    border-radius: 20px;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.add[_ngcontent-%COMP%] {\r\n    width:12%;\r\n}\r\n\r\n.todo-item[_ngcontent-%COMP%] {\r\n    margin-bottom:12px;\r\n    margin-top: 20px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align:center;\r\n            align-items:center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n }\r\n\r\n.remove-item[_ngcontent-%COMP%] {\r\n     cursor: pointer;\r\n     margin-left: 14px;\r\n     &:hoover {\r\n        color: black;\r\n     }\r\n }\r\n\r\n.todo-item-left[_ngcontent-%COMP%] {\r\n     display: -webkit-box;\r\n     display: flex;\r\n     -webkit-box-align: center;\r\n             align-items: center;\r\n }\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n     margin-left:20px;\r\n     background: white;\r\n     padding:5px;\r\n     -webkit-padding-after: 5px;\r\n             padding-block-end: 5px;\r\n     padding-bottom: 5px;\r\n     border: 1px solid grey;\r\n     border-radius: 3px;\r\n }\r\n\r\n.crossed[_ngcontent-%COMP%] {\r\n     text-decoration: line-through;\r\n }\r\n\r\n.remove-button[_ngcontent-%COMP%] {\r\n     border: none;\r\n     background-color: #e6e9ed;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLHlCQUE4QjtZQUE5Qiw4QkFBOEI7Q0FDakM7O0FBRUE7S0FDSSxlQUFlO0tBQ2YsaUJBQWlCO0tBQ2pCO1FBQ0csWUFBWTtLQUNmO0NBQ0o7O0FBRUE7S0FDSSxvQkFBYTtLQUFiLGFBQWE7S0FDYix5QkFBbUI7YUFBbkIsbUJBQW1CO0NBQ3ZCOztBQUVBO0tBQ0ksZ0JBQWdCO0tBQ2hCLGlCQUFpQjtLQUNqQixXQUFXO0tBQ1gsMEJBQXNCO2FBQXRCLHNCQUFzQjtLQUN0QixtQkFBbUI7S0FDbkIsc0JBQXNCO0tBQ3RCLGtCQUFrQjtDQUN0Qjs7QUFFQTtLQUNJLDZCQUE2QjtDQUNqQzs7QUFFQTtLQUNJLFlBQVk7S0FDWix5QkFBeUI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udG9kby1pbnB1dCB7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmFkZCB7XHJcbiAgICB3aWR0aDoxMiU7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiB9XHJcblxyXG4gLnJlbW92ZS1pdGVtIHtcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICAgJjpob292ZXIge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICB9XHJcbiB9XHJcblxyXG4gLnRvZG8taXRlbS1sZWZ0IHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIGJ1dHRvbiB7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICBwYWRkaW5nOjVweDtcclxuICAgICBwYWRkaW5nLWJsb2NrLWVuZDogNXB4O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiB9XHJcblxyXG4gLmNyb3NzZWQge1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gfVxyXG5cclxuIC5yZW1vdmUtYnV0dG9uIHtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTllZDtcclxuIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'todo-list',
          templateUrl: './todo-list.component.html',
          styleUrls: ['./todo-list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Madina\Desktop\dev\to-do-list\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map