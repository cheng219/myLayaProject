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
            _this._speed = 6;
            _this._dir = MoveDir.UP;
            _this._ismoving = false;
            _this.zeroRect = new Laya.Rectangle(0, 0, 0, 0);
            _this.oneRect = new Laya.Rectangle(0, 0, 60, 60);
            _this.frameOnce(1, _this, _this.onFrameOnce);
            game.GameCenter.gameStage.AddInstanceObj(_this);
            return _this;
        }
        Object.defineProperty(InstanceObject.prototype, "speed", {
            set: function (speed) {
                this._speed = speed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InstanceObject.prototype, "dir", {
            set: function (dir) {
                this._dir = dir;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InstanceObject.prototype, "ismoving", {
            set: function (ismoving) {
                this._ismoving = ismoving;
            },
            enumerable: true,
            configurable: true
        });
        InstanceObject.prototype.onFrameOnce = function () {
            this.frameLoop(1, this, this.onFrameLoop);
        };
        InstanceObject.prototype.onFrameLoop = function () {
        };
        InstanceObject.prototype.move = function () {
            console.log("move ismoving : " + this._ismoving);
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
        };
        InstanceObject.prototype.intersectWithOther = function (other) {
        };
        return InstanceObject;
    }(laya.ui.Box));
    obj.InstanceObject = InstanceObject;
})(obj || (obj = {}));
//# sourceMappingURL=InstanceObject.js.map