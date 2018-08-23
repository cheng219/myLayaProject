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
        protected onFrameOnce() : void
        {
            super.onFrameOnce();
            let rect = new Laya.Rectangle(0,0,60,15)
            this.setBounds(rect);
            this._inited = true;
        }

        protected onFrameLoop() : void
        {
            if(!this.inited)return;
            if(game.GameCenter.gameStage.intersectWithOther(this,MoveDir.UP))
            {
                console.log("遇到障碍");
            }else
            {
                //this.y = this.y - 6;
                //this.ismoving = true;
                //super.move();
            }
        }

        public intersectWithOther(other : InstanceObject) : void
        {
            if(other instanceof Tank || other instanceof Brick)
            {
                console.log("击中其他，销毁自己");
                this.visible = false;
                game.GameCenter.gameStage.DelInstanceObj(this);
            }
        }
    }
}