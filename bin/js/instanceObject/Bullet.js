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
            return _super.call(this) || this;
        }
        /**子弹从对象池取出才调用这里 */
        Bullet.prototype.onFrameOnce = function () {
            _super.prototype.onFrameOnce.call(this);
            if (this.dir == MoveDir.DOWN || this.dir == MoveDir.UP) {
                this.widthX = 2;
                this.heightY = 2;
            }
            else {
                this.widthX = 2;
                this.heightY = 2;
            }
        };
        Bullet.prototype.init = function () {
            _super.prototype.init.call(this);
            this._inited = true;
            this.ismoving = true;
            //console.log("bullet init");
        };
        Bullet.prototype.onFrameLoop = function () {
            if (!this.inited)
                return;
            if (!this.ismoving)
                return;
            if (game.GameCenter.gameStage.intersectWithOther(this, this.dir)) {
                //console.log("遇到障碍");
            }
            else {
                _super.prototype.move.call(this);
            }
        };
        Bullet.prototype.intersectWithOther = function (other) {
            console.log("击中其他，销毁自己");
            //this.visible = false;
            game.GameCenter.gameStage.DelInstanceObj(this);
        };
        return Bullet;
    }(obj.InstanceObject));
    obj.Bullet = Bullet;
})(obj || (obj = {}));
//# sourceMappingURL=Bullet.js.map