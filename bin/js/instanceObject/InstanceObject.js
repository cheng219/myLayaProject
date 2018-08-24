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
var obj;
(function (obj) {
    var InstanceObject = /** @class */ (function (_super) {
        __extends(InstanceObject, _super);
        function InstanceObject() {
            var _this = _super.call(this) || this;
            _this.isPoolObj = false;
            _this._inited = false;
            /**阵营(相等则不碰撞检测) */
            _this._camp = 0;
            /**移动速度 */
            _this._speed = 6;
            /**朝向 */
            _this._dir = MoveDir.UP;
            /**是否移动中 */
            _this._ismoving = false;
            /**对象碰撞宽度 */
            _this.widthX = 60;
            /**对象碰撞高度 */
            _this.heightY = 60;
            //自定义的脚本会有时序问题，所以在此添加一个延时
            _this.frameOnce(1, _this, _this.onFrameOnce);
            return _this;
        }
        Object.defineProperty(InstanceObject.prototype, "inited", {
            get: function () {
                return this._inited;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InstanceObject.prototype, "camp", {
            get: function () {
                return this._camp;
            },
            /**阵营(相等则不碰撞检测) */
            set: function (camp) {
                this._camp = camp;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InstanceObject.prototype, "speed", {
            /**移动速度 */
            set: function (speed) {
                this._speed = speed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InstanceObject.prototype, "dir", {
            get: function () {
                return this._dir;
            },
            /**朝向 */
            set: function (dir) {
                this._dir = dir;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InstanceObject.prototype, "ismoving", {
            get: function () {
                return this._ismoving;
            },
            /**是否移动中 */
            set: function (ismoving) {
                this._ismoving = ismoving;
            },
            enumerable: true,
            configurable: true
        });
        /**对象初始化后延迟一帧后执行的函数 */
        InstanceObject.prototype.onFrameOnce = function () {
            if (this.isPoolObj) {
                game.GameCenter.gameStage.AddPool(this);
            }
            else {
                game.GameCenter.gameStage.AddInstanceObj(this);
            }
            this.frameLoop(1, this, this.onFrameLoop);
        };
        /**每帧执行的函数 */
        InstanceObject.prototype.onFrameLoop = function () {
        };
        /**移动 */
        InstanceObject.prototype.move = function () {
            //console.log("move ismoving : "+this._ismoving);
            if (!this._ismoving)
                return;
            switch (this.rotation) {
                case 0:
                    this.y = this.y - this._speed;
                    break;
                case 90:
                    this.x = this.x + this._speed;
                    break;
                case 180:
                    this.y = this.y + this._speed;
                    break;
                case 270:
                    this.x = this.x - this._speed;
                    break;
                default:
                    console.log("move rotation：" + this.rotation);
                    break;
            }
        };
        /**移动停止,矫正位置*/
        InstanceObject.prototype.stopMove = function () {
            if (this._ismoving) {
                this._ismoving = false;
                //console.log("before this.x :"+this.x  + ",this.y:"+this.y);
                this.x = Math.round((this.x - 30) / 60) * 60 + 30;
                this.y = Math.round((this.y - 30) / 60) * 60 + 30;
                //console.log("after this.x :"+this.x  + ",this.y:"+this.y);
            }
        };
        /**转向 */
        InstanceObject.prototype.turn = function (dir) {
            switch (dir) {
                case MoveDir.UP:
                    this.rotation = 0;
                    break;
                case MoveDir.RIGHT:
                    this.rotation = 90;
                    break;
                case MoveDir.DOWN:
                    this.rotation = 180;
                    break;
                case MoveDir.LEFT:
                    this.rotation = 270;
                    break;
            }
            this.dir = dir;
        };
        /**被其他物体碰撞 */
        InstanceObject.prototype.intersectWithOther = function (other) {
        };
        /**初始化 */
        InstanceObject.prototype.init = function () {
            game.GameCenter.gameStage.AddInstanceObj(this);
        };
        /**返回对象池，注销一些参数 */
        InstanceObject.prototype.return2Pool = function () {
            this._inited = false;
            this._ismoving = false;
        };
        return InstanceObject;
    }(laya.ui.Box));
    obj.InstanceObject = InstanceObject;
})(obj || (obj = {}));
//# sourceMappingURL=InstanceObject.js.map