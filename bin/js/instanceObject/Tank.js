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
            _this.bulletSpeed = 10;
            _this.camp = 1;
            return _this;
        }
        Tank.prototype.onFrameOnce = function () {
            _super.prototype.onFrameOnce.call(this);
            if (!this.isPoolObj) {
                game.GameCenter.gameStage.mainTank = this;
                this.init();
            }
            //this.graphics.drawRect(0,0,60,60,"#ff0000");
        };
        Tank.prototype.init = function () {
            this._inited = true;
            Laya.timer.loop(2000, this, this.attackLoop);
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
            if (this.isPoolObj) //敌人
                this.attack();
        };
        Tank.prototype.attack = function () {
            console.log("attack");
            var bullet = game.GameCenter.gameStage.requstPool(ObjSort.BULLET);
            if (bullet != null) {
                bullet.pos(this.x, this.y);
                bullet.ismoving = true;
                bullet.camp = this.camp;
                bullet.speed = this.bulletSpeed;
                bullet.turn(this.dir);
                //Laya.stage.addChild(bullet);
            }
        };
        Tank.prototype.intersectWithOther = function (other) {
            if (other instanceof obj.Bullet) {
                if (other.camp != this.camp && this.isPoolObj) {
                    game.GameCenter.gameStage.DelInstanceObj(this);
                }
                console.log("被击中");
            }
            else {
                this.stopMove();
                if (this.isPoolObj) {
                    this.autoTurn();
                }
            }
        };
        Tank.prototype.autoTurn = function () {
            var arr = [MoveDir.DOWN, MoveDir.LEFT, MoveDir.RIGHT, MoveDir.UP];
            arr.splice(arr.indexOf(this.dir), 1);
            var index = Math.round(Math.random() * (arr.length - 1));
            var mdir = arr[index];
            console.log("index:" + index + ",arr.length:" + arr.length + ",mdir:" + mdir);
            if (mdir != undefined) {
                this.turn(mdir);
                this.ismoving = true;
            }
        };
        return Tank;
    }(obj.InstanceObject));
    obj.Tank = Tank;
})(obj || (obj = {}));
//# sourceMappingURL=Tank.js.map