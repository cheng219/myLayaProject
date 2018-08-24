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
        }
        /**子弹从对象池取出才调用这里 */
        protected onFrameOnce() : void
        {
            super.onFrameOnce();
            this.widthX = ConfigMng.bulletWidth;
            this.heightY = ConfigMng.bulletWidth;
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
            if(game.GameCenter.gameStage.intersectWithOther(this,this.dir))
            {
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