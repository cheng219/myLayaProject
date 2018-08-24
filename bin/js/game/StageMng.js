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
/**
* name
*/
var game;
(function (game) {
    var StageMng = /** @class */ (function (_super) {
        __extends(StageMng, _super);
        function StageMng() {
            var _this = _super.call(this) || this;
            _this.frameOnce(1, _this, _this.onFrameOnce);
            return _this;
        }
        StageMng.prototype.onFrameOnce = function () {
            console.log("onFrameOnce");
            Laya.timer.loop(5000, this, this.onFrameLoop);
        };
        StageMng.prototype.onFrameLoop = function () {
            console.log("onFrameLoop");
            game.GameCenter.gameStage.CreateEnemyTank();
        };
        return StageMng;
    }(laya.ui.Box));
    game.StageMng = StageMng;
})(game || (game = {}));
//# sourceMappingURL=StageMng.js.map