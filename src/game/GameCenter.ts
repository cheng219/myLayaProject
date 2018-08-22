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

        private loginWnd : ui.page.loginUI = null;
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
            Laya.loader.load(["res/atlas/ui.atlas","res/atlas/game.atlas"],Handler.create(this,this.initMainWnd));
        }
        private initMainWnd() : void
        {
            console.log("initMainWnd");
            //GameCenter.pageStage.showPages();
            this.CreateLoginWnd();
        }

        protected CreateLoginWnd() : void
        {
            console.log("CreateLoginWnd");
            this.loginWnd = new ui.page.loginUI();
            Laya.stage.addChild(this.loginWnd);
            this.loginWnd.btn_start.on(Laya.Event.MOUSE_UP,this,this.CreateStageWnd);
        }
        protected CreateStageWnd() : void
        {
            this.stageWnd = new ui.page.stageUI();
            Laya.stage.addChild(this.stageWnd);
            // let box : laya.ui.Box = this.stageWnd.map.getChildByName("item") as laya.ui.Box;
            // if(box != null)
            // {

            // }
        }
    }
}
new game.GameCenter();