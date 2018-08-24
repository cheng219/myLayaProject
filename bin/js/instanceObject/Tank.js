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
            _this.camp = 1;
            game.GameCenter.gameStage.mainTank = _this;
            return _this;
        }
        Tank.prototype.onFrameOnce = function () {
            _super.prototype.onFrameOnce.call(this);
            this._inited = true;
            this.frameLoop(30, this, this.attackLoop);
            this.graphics.drawRect(0, 0, 60, 60, "#ff0000");
        };
        Tank.prototype.onFrameLoop = function () {
            if (this.ismoving) //移动中才检测碰撞
             {
                if (game.GameCenter.gameStage.intersectWithOther(this, this.dir)) {
                    //console.log("遇到障碍");
                }
                else {
                    //this.ismoving = true;
                    _super.prototype.move.call(this);
                }
            }
        };
        Tank.prototype.attackLoop = function () {
            //this.attack();
        };
        Tank.prototype.attack = function () {
            console.log("attack");
            var bullet = game.GameCenter.gameStage.requstPool();
            if (bullet != null) {
                bullet.pos(this.x, this.y);
                bullet.ismoving = true;
                bullet.camp = this.camp;
                bullet.speed = 10;
                bullet.turn(this.dir);
                //Laya.stage.addChild(bullet);
            }
        };
        Tank.prototype.intersectWithOther = function (other) {
            if (other instanceof obj.Bullet) {
                console.log("被击中");
            }
            else {
                this.stopMove();
            }
        };
        return Tank;
    }(obj.InstanceObject));
    obj.Tank = Tank;
})(obj || (obj = {}));
//# sourceMappingURL=Tank.js.map