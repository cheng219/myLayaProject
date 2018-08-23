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
            _this.id = 0;
            _this.sort = 0;
            _this.camp = 0;
            //自定义的脚本会有时序问题，所以在此添加一个延时
            _this.frameOnce(1, _this, _this.onFrame);
            return _this;
        }
        Brick.prototype.onFrame = function () {
            //console.log("x:"+this.x + ",y:"+this.y + ",sort:"+this.sort);
            this.frameLoop(1, this, this.onLoop);
            if (this.sort != BrickSort.GRASS) {
                var rect = new Laya.Rectangle(0, 0, 60, 60);
                this.setBounds(rect);
            }
            else {
                var rect = new Laya.Rectangle(0, 0, 0, 0);
                this.setBounds(rect);
            }
        };
        Brick.prototype.onLoop = function () {
        };
        Brick.prototype.intersectWithOther = function (other) {
            if (other instanceof obj.Bullet) {
                console.log("被击中,销毁自己");
                //this.visible = false;
                //this.setBounds(this.zeroRect);
                game.GameCenter.gameStage.DelInstanceObj(this);
            }
        };
        return Brick;
    }(obj.InstanceObject));
    obj.Brick = Brick;
})(obj || (obj = {}));
var BrickSort;
(function (BrickSort) {
    BrickSort[BrickSort["WALL"] = 1] = "WALL";
    BrickSort[BrickSort["GRASS"] = 2] = "GRASS";
    BrickSort[BrickSort["WATER"] = 3] = "WATER";
    BrickSort[BrickSort["METAL"] = 4] = "METAL";
})(BrickSort || (BrickSort = {}));
//# sourceMappingURL=Brick.js.map