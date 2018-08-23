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
* name;
*/
var game;
(function (game) {
    var GameStage = /** @class */ (function (_super) {
        __extends(GameStage, _super);
        function GameStage() {
            var _this = _super.call(this) || this;
            _this.objs = [];
            _this.minX = 0;
            _this.minY = 0;
            _this.maxX = 540; //600-60
            _this.maxY = 840; //900-60
            return _this;
        }
        GameStage.CreateNew = function () {
            if (game.GameCenter.gameStage == null) {
                game.GameCenter.gameStage = new GameStage();
            }
            else {
                game.GameCenter.gameStage.UnRegist();
                game.GameCenter.gameStage.Regist();
            }
            return game.GameCenter.gameStage;
        };
        GameStage.prototype.Regist = function () {
        };
        GameStage.prototype.UnRegist = function () {
            this.objs = [];
        };
        GameStage.prototype.AddInstanceObj = function (brick) {
            this.objs.push(brick);
        };
        GameStage.prototype.DelInstanceObj = function (brick) {
            var index = this.objs.indexOf(brick);
            if (index > -1) {
                this.objs.splice(index, 1);
            }
            brick.destroy(true);
            Laya.stage.removeChild(brick);
        };
        GameStage.prototype.intersectWithOther = function (tank, dir) {
            //console.log("intersectWithOther id:"+brick.id);
            if (tank.x <= this.minX || tank.x >= this.maxX || tank.y <= this.minY || tank.y >= this.maxY)
                return true;
            for (var i = 0, len = this.objs.length; i < len; i++) {
                if (this.objs[i] == tank)
                    continue;
                var diffX = this.objs[i].x - tank.x;
                var diffY = this.objs[i].y - tank.y;
                if (diffX > 60 || diffY > 60) //距离过远,必然不相交,减少getBounds消耗
                    continue;
                if (this.objs[i].getBounds().intersects(tank.getBounds())) {
                    var intersect = false;
                    switch (dir) {
                        case MoveDir.UP:
                            if (diffY < 0 && Math.abs(diffX) < 60) {
                                console.log("intersectWithOther other x:" + this.objs[i].x + ",y:" + this.objs[i].y + ",dir:" + dir);
                                intersect = true;
                            }
                            break;
                        case MoveDir.DOWN:
                            if (diffY > 0 && Math.abs(diffX) < 60) {
                                console.log("intersectWithOther other x:" + this.objs[i].x + ",y:" + this.objs[i].y + ",dir:" + dir);
                                intersect = true;
                            }
                            break;
                        case MoveDir.LEFT:
                            if (diffX > 0 && Math.abs(diffY) < 60) {
                                console.log("intersectWithOther other x:" + this.objs[i].x + ",y:" + this.objs[i].y + ",dir:" + dir);
                                intersect = true;
                            }
                            break;
                        case MoveDir.RIGHT:
                            if (diffX > 0 && Math.abs(diffY) < 60) {
                                console.log("intersectWithOther other x:" + this.objs[i].x + ",y:" + this.objs[i].y + ",dir:" + dir);
                                intersect = true;
                            }
                            break;
                    }
                    if (intersect) {
                        this.objs[i].intersectWithOther(tank);
                        tank.intersectWithOther(this.objs[i]);
                        return true;
                    }
                }
            }
            return false;
        };
        return GameStage;
    }(game.StageBase));
    game.GameStage = GameStage;
})(game || (game = {}));
var MoveDir;
(function (MoveDir) {
    MoveDir[MoveDir["UP"] = 0] = "UP";
    MoveDir[MoveDir["DOWN"] = 1] = "DOWN";
    MoveDir[MoveDir["LEFT"] = 2] = "LEFT";
    MoveDir[MoveDir["RIGHT"] = 3] = "RIGHT";
})(MoveDir || (MoveDir = {}));
//# sourceMappingURL=GameStage.js.map