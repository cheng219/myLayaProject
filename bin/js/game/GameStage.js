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
            _this.poolBullets = [];
            _this.mainTank = null;
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
            if (brick instanceof obj.Brick) {
                brick.destroy(true);
            }
            else if (brick instanceof obj.Bullet) {
                this.return2Pool(brick);
            }
            //Laya.stage.removeChild(brick);
        };
        GameStage.prototype.AddPool = function (brick) {
            this.poolBullets.push(brick);
            var index = this.poolBullets.indexOf(brick);
            brick.pos(1044, 20 * index);
            //console.log("pool :"+this.poolBullets.length);
        };
        GameStage.prototype.requstPool = function () {
            if (this.poolBullets.length > 0) {
                var go = this.poolBullets[0];
                go.init();
                this.poolBullets.splice(0, 1);
                console.log("remain :" + this.poolBullets.length);
                return go;
            }
        };
        GameStage.prototype.return2Pool = function (brick) {
            brick.return2Pool();
            this.AddPool(brick);
        };
        GameStage.prototype.intersectWithOther = function (tank, dir) {
            //console.log("intersectWithOther id:"+tank.camp);
            if (tank.x <= this.minX || tank.x >= this.maxX || tank.y <= this.minY || tank.y >= this.maxY)
                return true;
            for (var i = 0, len = this.objs.length; i < len; i++) {
                if (!this.objs[i].inited)
                    continue;
                if (this.objs[i] == tank || this.objs[i].camp == tank.camp) //这里会导致坦克穿透
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
                                //console.log("intersectWithOther other x:"+this.objs[i].x + ",y:"+this.objs[i].y + ",dir:"+dir);
                                intersect = true;
                            }
                            break;
                        case MoveDir.DOWN:
                            if (diffY > 0 && Math.abs(diffX) < 60) {
                                //console.log("intersectWithOther other x:"+this.objs[i].x + ",y:"+this.objs[i].y + ",dir:"+dir);
                                intersect = true;
                            }
                            break;
                        case MoveDir.LEFT:
                            if (diffX > 0 && Math.abs(diffY) < 60) {
                                //console.log("intersectWithOther other x:"+this.objs[i].x + ",y:"+this.objs[i].y + ",dir:"+dir);
                                intersect = true;
                            }
                            break;
                        case MoveDir.RIGHT:
                            if (diffX > 0 && Math.abs(diffY) < 60) {
                                //console.log("intersectWithOther other x:"+this.objs[i].x + ",y:"+this.objs[i].y + ",dir:"+dir);
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