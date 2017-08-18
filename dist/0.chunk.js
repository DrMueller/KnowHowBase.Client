webpackJsonp([0],{

/***/ "../../../../../src/app/common/core-services/http/enums/api-endpoint.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiEndpoint; });
var ApiEndpoint;
(function (ApiEndpoint) {
    ApiEndpoint[ApiEndpoint["KnowHowBaseWebService"] = 0] = "KnowHowBaseWebService";
})(ApiEndpoint || (ApiEndpoint = {}));
;
//# sourceMappingURL=api-endpoint.enum.js.map

/***/ }),

/***/ "../../../../../src/app/common/core-services/http/enums/content-type.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentType; });
var ContentType;
(function (ContentType) {
    ContentType[ContentType["None"] = 0] = "None";
    ContentType[ContentType["ApplicationJson"] = 1] = "ApplicationJson";
})(ContentType || (ContentType = {}));
//# sourceMappingURL=content-type.enum.js.map

/***/ }),

/***/ "../../../../../src/app/common/core-services/http/enums/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_type_enum__ = __webpack_require__("../../../../../src/app/common/core-services/http/enums/content-type.enum.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__content_type_enum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_endpoint_enum__ = __webpack_require__("../../../../../src/app/common/core-services/http/enums/api-endpoint.enum.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__api_endpoint_enum__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/common/core-services/http/http-base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities__ = __webpack_require__("../../../../../src/app/common/utilities/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums__ = __webpack_require__("../../../../../src/app/common/core-services/http/enums/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpBaseService; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HttpBaseService = (function () {
    function HttpBaseService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    HttpBaseService.prototype.getAsync = function (relativeUrl, ctor) {
        if (ctor === void 0) { ctor = null; }
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var requestOptions = this.createRequestOptions();
        return this.processResponse(this.http.get(completeUrl, requestOptions), ctor);
    };
    HttpBaseService.prototype.getArrayAsync = function (relativeUrl, ctor) {
        return __awaiter(this, void 0, void 0, function () {
            var completeUrl, requestOptions, array, arrayResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        completeUrl = this.createCompleteUrl(relativeUrl);
                        requestOptions = this.createRequestOptions();
                        return [4 /*yield*/, this.processResponse(this.http.get(completeUrl, requestOptions))];
                    case 1:
                        array = _a.sent();
                        arrayResult = array.map(function (item) {
                            var newObj = __WEBPACK_IMPORTED_MODULE_3__utilities__["a" /* JsObjFactory */].create(item, ctor);
                            return newObj;
                        });
                        return [2 /*return*/, arrayResult];
                }
            });
        });
    };
    HttpBaseService.prototype.postAsync = function (relativeUrl, body, ctor, contentType) {
        if (ctor === void 0) { ctor = null; }
        if (contentType === void 0) { contentType = __WEBPACK_IMPORTED_MODULE_4__enums__["b" /* ContentType */].ApplicationJson; }
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        var requestOptions = this.createRequestOptions(contentType);
        return this.processResponse(this.http.post(completeUrl, body, requestOptions), ctor);
    };
    HttpBaseService.prototype.deleteAsync = function (relativeUrl) {
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var requestOptions = this.createRequestOptions();
        var result = this.processResponse(this.http.delete(completeUrl, requestOptions));
        return result;
    };
    HttpBaseService.prototype.putASync = function (relativeUrl, body, ctor, contentType) {
        if (ctor === void 0) { ctor = null; }
        if (contentType === void 0) { contentType = __WEBPACK_IMPORTED_MODULE_4__enums__["b" /* ContentType */].ApplicationJson; }
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        var requestOptions = this.createRequestOptions(contentType);
        return this.processResponse(this.http.put(completeUrl, body, requestOptions), ctor);
    };
    HttpBaseService.prototype.patchAsync = function (relativeUrl, body, ctor, contentType) {
        if (ctor === void 0) { ctor = null; }
        if (contentType === void 0) { contentType = __WEBPACK_IMPORTED_MODULE_4__enums__["b" /* ContentType */].ApplicationJson; }
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var requestOptions = this.createRequestOptions(contentType);
        return this.processResponse(this.http.patch(completeUrl, body, requestOptions), ctor);
    };
    HttpBaseService.prototype.processResponse = function (response, ctor) {
        if (ctor === void 0) { ctor = null; }
        var mappedResult = response.map(this.extractData);
        if (ctor) {
            mappedResult = mappedResult.map(function (f) {
                var newObj = __WEBPACK_IMPORTED_MODULE_3__utilities__["a" /* JsObjFactory */].create(f, ctor);
                return newObj;
            });
        }
        var result = mappedResult.toPromise();
        return result;
    };
    HttpBaseService.prototype.mapContentType = function (contentType) {
        switch (contentType) {
            case __WEBPACK_IMPORTED_MODULE_4__enums__["b" /* ContentType */].ApplicationJson:
                return 'application/json';
            default:
                throw new RangeError(contentType.toString() + ' is not recognized');
        }
    };
    HttpBaseService.prototype.createRequestOptions = function (contentType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        if (contentType) {
            headers.append('Content-Type', this.mapContentType(contentType));
        }
        var s = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* URLSearchParams */]();
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: true,
        });
        return requestOptions;
    };
    HttpBaseService.prototype.extractData = function (res) {
        var body;
        if (res.text()) {
            body = res.json();
        }
        if (!__WEBPACK_IMPORTED_MODULE_3__utilities__["b" /* JsObjUtilities */].isNullOrUndefined(body)) {
            return body;
        }
        return {};
    };
    HttpBaseService.prototype.createCompleteUrl = function (relativeUrl) {
        var result = this.baseUrl + '/' + relativeUrl;
        return result;
    };
    return HttpBaseService;
}());

//# sourceMappingURL=http-base.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/core-services/http/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums__ = __webpack_require__("../../../../../src/app/common/core-services/http/enums/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__enums__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_base_service__ = __webpack_require__("../../../../../src/app/common/core-services/http/http-base.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__http_base_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var map_1 = __webpack_require__("../../../../rxjs/operator/map.js");
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/toPromise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var toPromise_1 = __webpack_require__("../../../../rxjs/operator/toPromise.js");
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "../../../../rxjs/operator/toPromise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
/* tslint:enable:max-line-length */
/**
 * Converts an Observable sequence to a ES2015 compliant promise.
 *
 * @example
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Rejected Promise
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .throw(new Error('woops'))
 *   .toPromise();
 *
 * source
 *   .then((value) => console.log('Value: %s', value))
 *   .catch((err) => console.log('Error: %s', err));
 * // => Error: Error: woops
 *
 * // Setting via the config
 * Rx.config.Promise = RSVP.Promise;
 *
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Setting via the method
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise(RSVP.Promise);
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * @param {PromiseConstructor} [PromiseCtor] The constructor of the promise. If not provided,
 * it will look for a constructor first in Rx.config.Promise then fall back to
 * the native Promise constructor if available.
 * @return {Promise<T>} An ES2015 compatible promise with the last value from
 * the observable sequence.
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map