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
* 子弹对象;
*/
var obj;
(function (obj) {
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            var _this = _super.call(this) || this;
            _this.speed = 10;
            return _this;
        }
        Bullet.prototype.onFrameOnce = function () {
            _super.prototype.onFrameOnce.call(this);
            var rect = new Laya.Rectangle(0, 0, 60, 15);
            this.setBounds(rect);
        };
        Bullet.prototype.onFrameLoop = function () {
            if (game.GameCenter.gameStage.intersectWithOther(this, MoveDir.UP)) {
                //console.log("遇到障碍");
            }
            else {
                //this.y = this.y - 6;
                this.ismoving = true;
                _super.prototype.move.call(this);
            }
        };
        Bullet.prototype.intersectWithOther = function (other) {
            if (other instanceof obj.Tank || other instanceof obj.Brick) {
                console.log("击中其他，销毁自己");
                this.visible = false;
                game.GameCenter.gameStage.DelInstanceObj(this);
            }
        };
        return Bullet;
    }(obj.InstanceObject));
    obj.Bullet = Bullet;
})(obj || (obj = {}));
//# sourceMappingURL=Bullet.js.map