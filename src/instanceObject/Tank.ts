/*
* 坦克对象;
*/
module obj
{
    
    export class Tank extends InstanceObject
    {
        public id : number = 0;
        constructor()
        {
            super();
        }

        protected onFrameOnce() : void
        {
            super.onFrameOnce();
            let rect = new Laya.Rectangle(0,0,60,60)
            this.setBounds(rect);
        }

        protected onFrameLoop() : void
        {
            if(game.GameCenter.gameStage.intersectWithOther(this,MoveDir.UP))
            {
                //console.log("遇到障碍");
            }else
            {
                //this.y = this.y - 6;
                this.ismoving = true;
                super.move();
            }
        }

        protected attack() : void
        {

        }

        public intersectWithOther(other : InstanceObject) : void
        {
            if(other instanceof Bullet)
            {
                console.log("被击中");
            }
        }
    }
}