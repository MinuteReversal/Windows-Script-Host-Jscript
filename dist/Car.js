"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DemoCar;
(function (DemoCar) {
    var Car = /** @class */ (function () {
        function Car() {
            this.color = "red";
        }
        Car.prototype.drive = function () {
            WScript.Echo(this.color + " car are go.");
        };
        return Car;
    }());
    new Car().drive();
    var FlyCar = /** @class */ (function (_super) {
        __extends(FlyCar, _super);
        function FlyCar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FlyCar.prototype.fly = function () {
            WScript.Echo(this.color + " car can fly.");
        };
        return FlyCar;
    }(Car));
    new FlyCar().fly();
})(DemoCar || (DemoCar = {}));
