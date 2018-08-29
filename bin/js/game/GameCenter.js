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
    var WebGL = Laya.WebGL;
    var Handler = laya.utils.Handler;
    var GameCenter = /** @class */ (function (_super) {
        __extends(GameCenter, _super);
        function GameCenter() {
            var _this = _super.call(this) || this;
            _this.loginWnd = null;
            _this.stageWnd = null;
            GameCenter.instance = _this;
            return _this;
        }
        GameCenter.prototype.Regist = function () {
            //super.Regist();
            GameCenter.gameStage = game.GameStage.CreateNew();
            this.initStage();
        };
        GameCenter.prototype.UnRegist = function () {
            //super.UnRegist();
            this.loginWnd = null;
            this.stageWnd = null;
        };
        GameCenter.prototype.initStage = function () {
            Laya.MiniAdpter.init();
            Laya.init(1136, 640, WebGL);
            Laya.stage.bgColor = "#000000";
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
            Laya.loader.load([{ url: "res/atlas/myUI.atlas", type: Loader.ATLAS },
                { url: "res/atlas/game.atlas", type: Loader.ATLAS },
                { url: "ui.json", type: Loader.JSON }], Handler.create(this, this.initMainWnd));
        };
        GameCenter.prototype.initMainWnd = function () {
            //console.log("initMainWnd");
            View.uiMap = Laya.loader.getRes("ui.json");
            this.CreateLoginWnd();
        };
        GameCenter.prototype.CreateLoginWnd = function () {
            //console.log("CreateLoginWnd");
            this.loginWnd = new LoginWnd();
            Laya.stage.addChild(this.loginWnd);
            this.loginWnd.btn_start.on(Laya.Event.MOUSE_UP, this, this.CreateStageWnd);
            //this.loginWnd.btn_start
        };
        GameCenter.prototype.CreateStageWnd = function () {
            Laya.stage.removeChild(this.loginWnd);
            this.stageWnd = new ui.page.stageUI();
            Laya.stage.addChild(this.stageWnd);
            this.stageWnd.attack.on(Laya.Event.MOUSE_UP, this, this.tankAttack);
            this.stageWnd.up.on(Laya.Event.MOUSE_DOWN, this, this.tankUp);
            this.stageWnd.down.on(Laya.Event.MOUSE_DOWN, this, this.tankDown);
            this.stageWnd.right.on(Laya.Event.MOUSE_DOWN, this, this.tankRight);
            this.stageWnd.left.on(Laya.Event.MOUSE_DOWN, this, this.tankLeft);
            this.stageWnd.up.on(Laya.Event.MOUSE_UP, this, this.tankStopMove);
            this.stageWnd.down.on(Laya.Event.MOUSE_UP, this, this.tankStopMove);
            this.stageWnd.right.on(Laya.Event.MOUSE_UP, this, this.tankStopMove);
            this.stageWnd.left.on(Laya.Event.MOUSE_UP, this, this.tankStopMove);
        };
        GameCenter.prototype.tankAttack = function () {
            game.GameCenter.gameStage.mainTank.attack();
        };
        GameCenter.prototype.tankUp = function () {
            console.log("tankUp");
            game.GameCenter.gameStage.mainTank.turn(MoveDir.UP);
            game.GameCenter.gameStage.mainTank.ismoving = true;
        };
        GameCenter.prototype.tankDown = function () {
            game.GameCenter.gameStage.mainTank.turn(MoveDir.DOWN);
            game.GameCenter.gameStage.mainTank.ismoving = true;
        };
        GameCenter.prototype.tankLeft = function () {
            game.GameCenter.gameStage.mainTank.turn(MoveDir.LEFT);
            game.GameCenter.gameStage.mainTank.ismoving = true;
        };
        GameCenter.prototype.tankRight = function () {
            game.GameCenter.gameStage.mainTank.turn(MoveDir.RIGHT);
            game.GameCenter.gameStage.mainTank.ismoving = true;
        };
        GameCenter.prototype.tankStopMove = function () {
            game.GameCenter.gameStage.mainTank.ismoving = false;
            //game.GameCenter.gameStage.mainTank.stopMove(); 效果不好,移动一小段就矫正位置
        };
        GameCenter.instance = null;
        GameCenter.gameStage = null;
        return GameCenter;
    }(game.StageBase));
    game.GameCenter = GameCenter;
})(game || (game = {}));
new game.GameCenter();
//# sourceMappingURL=GameCenter.js.map