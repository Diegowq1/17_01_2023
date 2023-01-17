var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Heroisdamarvel = /** @class */ (function () {
    function Heroisdamarvel(t, s, f, i) {
        this.teletransporte = t;
        this.seRegenerar = s;
        this.força = f;
        this.imortalidade = i;
    }
    Heroisdamarvel.prototype.caracteristicasherois = function () {
        console.log("Deadpool ".concat(this.imortalidade));
        console.log("Homem Aranha ".concat(this.teletransporte));
        console.log("Hulk ".concat(this.força, " ").concat(this.teletransporte));
    };
    return Heroisdamarvel;
}());
var herois = new Heroisdamarvel(true, false, false, true);
herois.caracteristicasherois();
var Vingadores = /** @class */ (function (_super) {
    __extends(Vingadores, _super);
    function Vingadores() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vingadores;
}(Heroisdamarvel));
var Vingadoresquemorreramnocinema = /** @class */ (function (_super) {
    __extends(Vingadoresquemorreramnocinema, _super);
    function Vingadoresquemorreramnocinema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vingadoresquemorreramnocinema;
}(Vingadores));
