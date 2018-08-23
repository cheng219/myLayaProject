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
            this.camp = 1;
            game.GameCenter.gameStage.mainTank = this;
        }

        protected onFrameOnce() : void
        {
            super.onFrameOnce();
            let rect = new Laya.Rectangle(-30,-30,60,60)
            this.setBounds(rect);
            this._inited = true;
            this.frameLoop(30,this,this.attackLoop);
        }

        protected onFrameLoop() : void
        {
            if(game.GameCenter.gameStage.intersectWithOther(this,MoveDir.UP))
            {
                //console.log("遇到障碍");
            }else
            {
                //this.ismoving = true;
                super.move();
            }
        }

        protected attackLoop() : void
        {
            //this.attack();
        }

        public attack() : void
        {
            console.log("attack");
            let bullet = game.GameCenter.gameStage.requstPool() as Bullet;
            if(bullet != null)
            {
                bullet.pos(this.x,this.y);
                bullet.ismoving = true;
                bullet.camp = this.camp;
                bullet.speed = 10;
                //bullet.dir = this.Dir;
                bullet.rotation = this.rotation;
                //Laya.stage.addChild(bullet);
            }
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