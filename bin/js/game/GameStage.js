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
            _this.poolTanks = [];
            _this.mainTank = null;
            _this.minX = 30;
            _this.minY = 30;
            _this.maxX = 870; //900-30
            _this.maxY = 570; //600-30
            _this.bornPos = [{ x: 30, y: 30 }, { x: 420, y: 30 }, { x: 870, y: 30 }];
            _this.posIndex = 0;
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
            else if (brick.isPoolObj) {
                this.return2Pool(brick);
            }
        };
        GameStage.prototype.AddPool = function (brick) {
            if (brick instanceof obj.Bullet) {
                var len = this.poolBullets.push(brick);
                brick.pos(1100, 20 * len);
            }
            else if (brick instanceof obj.Tank) {
                var len = this.poolTanks.push(brick);
                brick.pos(1050, 60 * len);
            }
            //console.log("pool :"+this.poolBullets.length);
        };
        GameStage.prototype.requstPool = function (sort) {
            if (sort == ObjSort.BULLET) {
                var len = this.poolBullets.length;
                if (len > 0) {
                    var go = this.poolBullets[len - 1];
                    go.init();
                    this.poolBullets.splice(len - 1, 1);
                    //console.log("remain :" + this.poolBullets.length);
                    return go;
                }
            }
            else if (sort == ObjSort.TANK) {
                var len = this.poolTanks.length;
                if (len > 0) {
                    var go = this.poolTanks[len - 1];
                    go.init();
                    this.poolTanks.splice(len - 1, 1);
                    //console.log("remain :" + this.poolBullets.length);
                    return go;
                }
            }
            return null;
        };
        GameStage.prototype.return2Pool = function (brick) {
            brick.return2Pool();
            this.AddPool(brick);
        };
        /**检测碰撞 */
        GameStage.prototype.checkHit = function (bullet, dir) {
            //console.log("intersectWithOther id:"+tank.camp);
            if ((bullet.x <= this.minX && dir == MoveDir.LEFT)
                || (bullet.x >= this.maxX && dir == MoveDir.RIGHT)
                || (bullet.y <= this.minY && dir == MoveDir.UP)
                || (bullet.y >= this.maxY && dir == MoveDir.DOWN)) {
                bullet.beHit(null); //撞到边界
                return true;
            }
            for (var i = 0, len = this.objs.length; i < len; i++) {
                if (!this.objs[i].inited)
                    continue;
                if (this.objs[i] == bullet)
                    continue;
                if (this.objs[i].camp == bullet.camp)
                    continue;
                var diffX = Math.abs(this.objs[i].x - bullet.x);
                var diffY = Math.abs(this.objs[i].y - bullet.y);
                var diffW = this.objs[i].widthX / 2 + bullet.widthX / 2;
                var diffH = this.objs[i].heightY / 2 + bullet.heightY / 2;
                if (diffX > diffW || diffY > diffH) //距离过远
                    continue;
                if (this.objs[i] instanceof obj.Brick) {
                    if (this.objs[i].sort == BrickSort.WATER) {
                        continue; //子弹过水
                    }
                }
                if (diffX < diffW && diffY < diffH) {
                    //console.log("diffX :"+diffX+",diffW :"+diffW+",diffY :"+diffY+",diffH :"+diffH);
                    if (!this.objs[i].IsDead && !bullet.IsDead) {
                        this.objs[i].beHit(bullet);
                        bullet.beHit(this.objs[i]);
                        return true;
                    }
                }
            }
            return false;
        };
        /**检测碰撞 */
        GameStage.prototype.checkCanMove = function (tank, dir) {
            //console.log("intersectWithOther id:"+tank.camp);
            if ((tank.x <= this.minX && dir == MoveDir.LEFT)
                || (tank.x >= this.maxX && dir == MoveDir.RIGHT)
                || (tank.y <= this.minY && dir == MoveDir.UP)
                || (tank.y >= this.maxY && dir == MoveDir.DOWN)) {
                tank.stopMoveByOther(); //撞到边界
                return true;
            }
            for (var i = 0, len = this.objs.length; i < len; i++) {
                if (this.objs[i] instanceof obj.Bullet || !this.objs[i].inited)
                    continue;
                if (this.objs[i] == tank)
                    continue;
                var diffX = Math.abs(this.objs[i].x - tank.x);
                var diffY = Math.abs(this.objs[i].y - tank.y);
                var diffW = this.objs[i].widthX / 2 + tank.widthX / 2;
                var diffH = this.objs[i].heightY / 2 + tank.heightY / 2;
                if (diffX > diffW || diffY > diffH) //距离过远
                    continue;
                if (diffX < diffW && diffY < diffH) {
                    //console.log("diffX :"+diffX+",diffW :"+diffW+",diffY :"+diffY+",diffH :"+diffH);
                    if (!this.objs[i].IsDead && !tank.IsDead) {
                        tank.stopMoveByOther();
                        return true;
                    }
                }
            }
            return false;
        };
        GameStage.prototype.CreateEnemyTank = function () {
            var tank = game.GameCenter.gameStage.requstPool(ObjSort.TANK);
            if (tank != null) {
                var pos = this.bornPos[this.posIndex];
                tank.pos(pos.x, pos.y);
                tank.ismoving = true;
                tank.camp = 2;
                tank.speed = ConfigMng.enemyMoveSpeed;
                tank.bulletSpeed = ConfigMng.enemyBulletSpeed;
                tank.turn(MoveDir.DOWN);
                //Laya.stage.addChild(bullet);
                this.posIndex++;
                if (this.posIndex >= this.bornPos.length) {
                    this.posIndex = 0;
                }
            }
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
var ObjSort;
(function (ObjSort) {
    ObjSort[ObjSort["BRICK"] = 0] = "BRICK";
    ObjSort[ObjSort["TANK"] = 1] = "TANK";
    ObjSort[ObjSort["BULLET"] = 2] = "BULLET";
})(ObjSort || (ObjSort = {}));
//# sourceMappingURL=GameStage.js.map