var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var game;
(function (game) {
    var BrickItemUI = /** @class */ (function (_super) {
        __extends(BrickItemUI, _super);
        function BrickItemUI() {
            var _this = _super.call(this) || this;
            _this.sort = 0;
            _this.frameOnce(2, _this, _this.logArgs);
            return _this;
        }
        BrickItemUI.prototype.logArgs = function () {
            console.log("x:" + this.x + ",y:" + this.y + ",sort:" + this.sort);
        };
        return BrickItemUI;
    }(laya.ui.Box));
    game.BrickItemUI = BrickItemUI;
})(game || (game = {}));
//# sourceMappingURL=BrickItemUI.js.map