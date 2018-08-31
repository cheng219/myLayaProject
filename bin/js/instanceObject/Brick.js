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
            return _this;
        }
        Brick.prototype.onFrameOnce = function () {
            _super.prototype.onFrameOnce.call(this);
            //console.log("x:"+this.x + ",y:"+this.y + ",sort:"+this.sort);
            if (this.sort != BrickSort.GRASS) {
                this.widthX = ConfigMng.tanktWidth;
                this.heightY = ConfigMng.tanktWidth;
            }
            else {
                this.widthX = 0;
                this.heightY = 0;
            }
            this._inited = true;
        };
        Brick.prototype.onFrameLoop = function () {
            _super.prototype.onFrameLoop.call(this);
        };
        Brick.prototype.beHit = function (other) {
            _super.prototype.beHit.call(this, other);
            if (this.sort == BrickSort.WALL) {
                console.log("被击中,销毁自己");
                //this.visible = false;
                //this.setBounds(this.zeroRect);
                game.GameCenter.gameStage.DelInstanceObj(this);
            }
            else if (this.sort == BrickSort.METAL) {
                //金属必须强力子弹
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