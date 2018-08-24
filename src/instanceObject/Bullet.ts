/*
* 子弹对象;
*/
module obj
{
    export class Bullet extends InstanceObject
    {
        constructor()
        {
            super();
            this.speed = 10;
        }
        /**子弹从对象池取出才调用这里 */
        protected onFrameOnce() : void
        {
            super.onFrameOnce();
            if(this.dir == MoveDir.DOWN || this.dir == MoveDir.UP)
            {
                this.widthX = 60;
                this.heightY = 15;
            }else
            {
                this.widthX = 15;
                this.heightY = 60;
            }
        }
        public init() : void
        {
            super.init();
            this._inited = true;
            this.ismoving = true;
            //console.log("bullet init");
        }
        protected onFrameLoop() : void
        {
            if(!this.inited)return;
            if(!this.ismoving)return;
            if(game.GameCenter.gameStage.intersectWithOther(this,MoveDir.UP))
            {
                game.GameCenter.gameStage.DelInstanceObj(this);
                //console.log("遇到障碍");
            }else
            {
                super.move();
            }
        }

        public intersectWithOther(other : InstanceObject) : void
        {
            console.log("击中其他，销毁自己");
            //this.visible = false;
            game.GameCenter.gameStage.DelInstanceObj(this);
        }
    }
}