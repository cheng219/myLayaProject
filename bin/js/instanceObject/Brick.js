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
* 砖块运行时类;
*/
var obj;
(function (obj) {
    var Brick = /** @class */ (function (_super) {
        __extends(Brick, _super);
        function Brick() {
            var _this = _super.call(this) || this;
            _this.sort = 0;
            _this.data = null;
            //自定义的脚本会有时序问题，所以在此添加一个延时
            _this.frameOnce(2, _this, _this.onFrame);
            game.GameCenter.gameStage.AddBrick(_this);
            return _this;
        }
        Brick.prototype.onFrame = function () {
            console.log("x:" + this.x + ",y:" + this.y + ",sort:" + this.sort);
            this.data = new info.BrickInfo();
            this.data.init(this);
            //加到map中
            this.frameLoop(1, this, this.onLoop);
        };
        Brick.prototype.onLoop = function () {
        };
        return Brick;
    }(laya.ui.Box));
    obj.Brick = Brick;
})(obj || (obj = {}));
//# sourceMappingURL=Brick.js.map