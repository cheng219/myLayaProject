/*
* 砖块运行时类;
*/
module obj
{
    export class Brick extends laya.ui.Box
    {
        public sort : number = 0;

        protected data : info.BrickInfo = null;
        constructor()
        {
            super();
            //自定义的脚本会有时序问题，所以在此添加一个延时
            this.frameOnce(2,this,this.onFrame);
            game.GameCenter.gameStage.AddBrick(this);
        }
        private onFrame():void
        {
            console.log("x:"+this.x + ",y:"+this.y + ",sort:"+this.sort);
            this.data = new info.BrickInfo();
            this.data.init(this);
            //加到map中
            this.frameLoop(1,this,this.onLoop);
        }

        private onLoop() : void
        {

        }
    }
}