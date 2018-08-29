/*
* name;
*/
module game
{
    import WebGL = Laya.WebGL;
    import Handler = laya.utils.Handler;
    export class GameCenter extends StageBase
    {
        public static instance : GameCenter = null;
        public static gameStage : game.GameStage = null;

        private loginWnd : LoginWnd = null;
        private stageWnd : ui.page.stageUI = null;
        constructor()
        {
            super();
            GameCenter.instance = this;
        }

        public Regist() : void
        {
            //super.Regist();
            GameCenter.gameStage = GameStage.CreateNew();
            this.initStage();
        }
        public UnRegist() : void
        {
            //super.UnRegist();
            this.loginWnd = null;
            this.stageWnd = null;
        }

        protected initStage() : void
        {
            Laya.MiniAdpter.init();
            Laya.init(1136,640,WebGL);
            Laya.stage.bgColor = "#000000";
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;  
            Laya.loader.load([{url:"res/atlas/myUI.atlas",type:Loader.ATLAS},
                {url:"ui.json",type:Loader.JSON}],Handler.create(this,this.initMainWnd));
        }
        private initMainWnd() : void
        {
            //console.log("initMainWnd");
            View.uiMap = Laya.loader.getRes("ui.json");
            this.CreateLoginWnd();
        }

        protected CreateLoginWnd() : void
        {
            //console.log("CreateLoginWnd");
            
            this.loginWnd = new LoginWnd();
            Laya.stage.addChild(this.loginWnd);
            this.loginWnd.btn_start.on(Laya.Event.MOUSE_UP,this,this.CreateStageWnd);
            //this.loginWnd.btn_start
        }

        protected CreateStageWnd() : void
        {
            Laya.stage.removeChild(this.loginWnd);
            this.stageWnd = new ui.page.stageUI();
            Laya.stage.addChild(this.stageWnd);
            this.stageWnd.attack.on(Laya.Event.MOUSE_UP,this,this.tankAttack);
            this.stageWnd.up.on(Laya.Event.MOUSE_DOWN,this,this.tankUp);
            this.stageWnd.down.on(Laya.Event.MOUSE_DOWN,this,this.tankDown);
            this.stageWnd.right.on(Laya.Event.MOUSE_DOWN,this,this.tankRight);
            this.stageWnd.left.on(Laya.Event.MOUSE_DOWN,this,this.tankLeft);
            this.stageWnd.up.on(Laya.Event.MOUSE_UP,this,this.tankStopMove);
            this.stageWnd.down.on(Laya.Event.MOUSE_UP,this,this.tankStopMove);
            this.stageWnd.right.on(Laya.Event.MOUSE_UP,this,this.tankStopMove);
            this.stageWnd.left.on(Laya.Event.MOUSE_UP,this,this.tankStopMove);
        }
        protected tankAttack() : void
        {
            game.GameCenter.gameStage.mainTank.attack();
        }
        protected tankUp() : void
        {
            console.log("tankUp");
            game.GameCenter.gameStage.mainTank.turn(MoveDir.UP);
            game.GameCenter.gameStage.mainTank.ismoving = true;
        }
        protected tankDown() : void
        {
            game.GameCenter.gameStage.mainTank.turn(MoveDir.DOWN);
            game.GameCenter.gameStage.mainTank.ismoving = true;
        }
        protected tankLeft() : void
        {
            game.GameCenter.gameStage.mainTank.turn(MoveDir.LEFT);
            game.GameCenter.gameStage.mainTank.ismoving = true;
        }
        protected tankRight() : void
        {
            game.GameCenter.gameStage.mainTank.turn(MoveDir.RIGHT);
            game.GameCenter.gameStage.mainTank.ismoving = true;
        }
        protected tankStopMove() : void
        {
            game.GameCenter.gameStage.mainTank.ismoving = false;
            //game.GameCenter.gameStage.mainTank.stopMove(); 效果不好,移动一小段就矫正位置
        }
    }
}
new game.GameCenter();