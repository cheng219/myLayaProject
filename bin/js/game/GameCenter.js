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
            Laya.loader.load(["res/atlas/ui.atlas", "res/atlas/game.atlas", "prefab/bullet.prefab"], Handler.create(this, this.initMainWnd));
        };
        GameCenter.prototype.initMainWnd = function () {
            console.log("initMainWnd");
            //GameCenter.pageStage.showPages();
            this.CreateLoginWnd();
        };
        GameCenter.prototype.CreateLoginWnd = function () {
            console.log("CreateLoginWnd");
            this.loginWnd = new ui.page.loginUI();
            Laya.stage.addChild(this.loginWnd);
            this.loginWnd.btn_start.on(Laya.Event.MOUSE_UP, this, this.CreateStageWnd);
            console.log("attack");
            var bullet = new obj.Bullet();
            bullet.pos(100, 100);
            //bullet.ismoving = true;
            //bullet.camp = this.camp;
            //bullet.speed = 10;
            Laya.stage.addChild(bullet);
        };
        GameCenter.prototype.CreateStageWnd = function () {
            this.stageWnd = new ui.page.stageUI();
            Laya.stage.addChild(this.stageWnd);
            // let box : laya.ui.Box = this.stageWnd.map.getChildByName("item") as laya.ui.Box;
            // if(box != null)
            // {
            // }
        };
        GameCenter.instance = null;
        GameCenter.gameStage = null;
        return GameCenter;
    }(game.StageBase));
    game.GameCenter = GameCenter;
})(game || (game = {}));
new game.GameCenter();
//# sourceMappingURL=GameCenter.js.map