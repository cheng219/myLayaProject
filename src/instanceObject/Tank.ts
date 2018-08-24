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
            if(!this.isPoolObj)
            {
                this.init();
            }
            //this.graphics.drawRect(0,0,60,60,"#ff0000");
        }
        public init() : void
        {
            this._inited = true;
            this.frameLoop(30,this,this.attackLoop);
        }

        protected onFrameLoop() : void
        {
            if(this.ismoving)//移动中才检测碰撞
            {
                if(game.GameCenter.gameStage.intersectWithOther(this,this.dir))
                {
                    //console.log("遇到障碍");
                }else
                {
                    //this.ismoving = true;
                    super.move();
                }
            }
        }

        protected attackLoop() : void
        {
            //this.attack();
        }

        public attack() : void
        {
            console.log("attack");
            let bullet = game.GameCenter.gameStage.requstPool(ObjSort.BULLET) as Bullet;
            if(bullet != null)
            {
                bullet.pos(this.x,this.y);
                bullet.ismoving = true;
                bullet.camp = this.camp;
                bullet.speed = 10;
                bullet.turn(this.dir);
                //Laya.stage.addChild(bullet);
            }
        }

        public intersectWithOther(other : InstanceObject) : void
        {
            if(other instanceof Bullet)
            {
                console.log("被击中");
            }else
            {
                this.stopMove();
            }
        }
    }
}