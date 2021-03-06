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
var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.arrayCompare = function (a, b) {
        if (a.length != b.length) {
            return false;
        }
        for (var i in a) {
            if (a[i] instanceof Array && b[i] instanceof Array) {
                if (!this.arrayCompare(a[i], b[i])) {
                    return false;
                }
            }
            else if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    };
    return HelperService;
}());
HelperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], HelperService);
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map