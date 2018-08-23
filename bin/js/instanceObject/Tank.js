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
* 坦克对象;
*/
var obj;
(function (obj) {
    var Tank = /** @class */ (function (_super) {
        __extends(Tank, _super);
        function Tank() {
            var _this = _super.call(this) || this;
            _this.id = 0;
            return _this;
        }
        Tank.prototype.onFrameOnce = function () {
            _super.prototype.onFrameOnce.call(this);
            var rect = new Laya.Rectangle(0, 0, 60, 60);
            this.setBounds(rect);
        };
        Tank.prototype.onFrameLoop = function () {
            if (game.GameCenter.gameStage.intersectWithOther(this, MoveDir.UP)) {
                //console.log("遇到障碍");
            }
            else {
                //this.y = this.y - 6;
                this.ismoving = true;
                _super.prototype.move.call(this);
            }
        };
        Tank.prototype.attack = function () {
        };
        Tank.prototype.intersectWithOther = function (other) {
            if (other instanceof obj.Bullet) {
                console.log("被击中");
            }
        };
        return Tank;
    }(obj.InstanceObject));
    obj.Tank = Tank;
})(obj || (obj = {}));
//# sourceMappingURL=Tank.js.map