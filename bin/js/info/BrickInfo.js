/*
* 砖块数据类;
*/
var info;
(function (info) {
    var BrickInfo = /** @class */ (function () {
        function BrickInfo() {
            this.sort = BrickInfoSort.EMPTY;
            this.x = 0;
            this.y = 0;
        }
        BrickInfo.prototype.init = function (brick) {
            this.x = brick.x;
            this.y = brick.y;
            this.sort = brick.sort;
            console.log("this.sort :" + (this.sort == BrickInfoSort.WALL));
        };
        return BrickInfo;
    }());
    info.BrickInfo = BrickInfo;
})(info || (info = {}));
var BrickInfoSort;
(function (BrickInfoSort) {
    BrickInfoSort[BrickInfoSort["EMPTY"] = 0] = "EMPTY";
    BrickInfoSort[BrickInfoSort["WALL"] = 1] = "WALL";
    BrickInfoSort[BrickInfoSort["GRASS"] = 2] = "GRASS";
    BrickInfoSort[BrickInfoSort["WATER"] = 3] = "WATER";
    BrickInfoSort[BrickInfoSort["METAL"] = 4] = "METAL";
    //敌人
    //自己的基地
})(BrickInfoSort || (BrickInfoSort = {}));
//# sourceMappingURL=BrickInfo.js.map