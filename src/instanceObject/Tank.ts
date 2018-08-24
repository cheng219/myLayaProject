/*
* 坦克对象;
*/
module obj
{
    
    export class Tank extends InstanceObject
    {
        public id : number = 0;
        public bulletSpeed : number = 10;
        constructor()
        {
            super();
            this.camp = 1;
        }

        protected onFrameOnce() : void
        {
            super.onFrameOnce();
            if(!this.isPoolObj)
            {
                game.GameCenter.gameStage.mainTank = this;
                this.init();
            }
            //this.graphics.drawRect(0,0,60,60,"#ff0000");
        }
        public init() : void
        {
            this._inited = true;
            Laya.timer.loop(2000,this,this.attackLoop)
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
            if(this.isPoolObj)//敌人
                this.attack();
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
                bullet.speed = this.bulletSpeed;
                bullet.turn(this.dir);
                //Laya.stage.addChild(bullet);
            }
        }

        public intersectWithOther(other : InstanceObject) : void
        {
            if(other instanceof Bullet)
            {
                if(other.camp != this.camp && this.isPoolObj)
                {
                    game.GameCenter.gameStage.DelInstanceObj(this);
                }
                console.log("被击中");
            }else
            {
                this.stopMove();
                if(this.isPoolObj)
                {
                    this.autoTurn();
                }
            }
        }
         
        protected autoTurn() : void
        {
            let arr : Array<MoveDir> = [MoveDir.DOWN,MoveDir.LEFT,MoveDir.RIGHT,MoveDir.UP];
            arr.splice(arr.indexOf(this.dir),1);
            let index : number = Math.round(Math.random() * (arr.length - 1));
            let mdir : MoveDir = arr[index];
            console.log("index:"+index + ",arr.length:"+arr.length+",mdir:"+mdir);
            if(mdir != undefined)
            {
                this.turn(mdir);
                this.ismoving = true;
            }
        }
    }
}