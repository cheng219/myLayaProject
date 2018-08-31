/*
* 坦克对象;
*/
module obj
{
    import Animation = laya.display.Animation;
    export class Tank extends InstanceObject
    {
        public id : number = 0;
        public bulletSpeed : number = 10;
        protected bornAnim : Animation = null;
        protected dieAnim : Animation = null;
        constructor()
        {
            super();
            this.camp = 1;
        }

        protected onFrameOnce() : void
        {
            super.onFrameOnce();
            this.widthX = ConfigMng.tanktWidth;
            this.heightY = ConfigMng.tanktWidth;
            this.dieAnim = new Animation();
            this.dieAnim.loadAnimation("anim/die.ani");
            this.dieAnim.visible = false; 
            this.addChild(this.dieAnim);
            this.dieAnim.pos(this.widthX / 2,this.heightY / 2);
            if(!this.isPoolObj)
            {
                game.GameCenter.gameStage.mainTank = this;
                this._inited = true;
                //this.graphics.drawRect(0,0,60,60,"#ff0000");
            }
        }
        public init() : void
        {
            super.init();
            this._inited = true;
            Laya.timer.loop(ConfigMng.autoAttackCd,this,this.attackLoop)
        }

        protected onFrameLoop() : void
        {
            if(this.ismoving && !this.isDead)//移动中才检测碰撞
            {
                if(game.GameCenter.gameStage.checkCanMove(this,this.dir))
                {
                    //console.log("遇到障碍");
                }else
                {
                    //this.ismoving = true;
                    super.move();
                }
            }
        }
        /**没两秒攻击一次 */
        protected attackLoop() : void
        {
            if(this.inited && this.isPoolObj)//敌人
                this.attack();
        }
        protected lastAttackTime : number = 0;
        public attack() : void
        {
            if(Laya.timer.currTimer - this.lastAttackTime < ConfigMng.attackCd)
            {
                return;
            }
            this.lastAttackTime = Laya.timer.currTimer;
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

        
        public beHit(other : InstanceObject) : void
        {
            if(other.camp != this.camp && this.isPoolObj)
            {
                this.dieAnim.visible = true; 
                this.dieAnim.play(0,true,"die");
                this.dieAnim.on(Laya.Event.COMPLETE,this,this.dieComplete)
                this.Dead();
                //game.GameCenter.gameStage.DelInstanceObj(this);
            }
            console.log("被击中");
        }
        public stopMoveByOther() : void
        {
            this.stopMove();
            if(this.isPoolObj)
            {
                Laya.timer.once(ConfigMng.autoTurnCd,this,this.autoTurn);
            }
        }

        protected dieComplete() : void
        {
            console.log("dieComplete");
            game.GameCenter.gameStage.DelInstanceObj(this);
        }

        /** 每1秒自动转向 */
        protected autoTurn() : void
        {
            let arr : Array<MoveDir> = [MoveDir.DOWN,MoveDir.LEFT,MoveDir.RIGHT,MoveDir.UP];
            arr.splice(arr.indexOf(this.dir),1);
            let index : number = Math.round(Math.random() * (arr.length - 1));
            let mdir : MoveDir = arr[index];
            //console.log("index:"+index + ",arr.length:"+arr.length+",mdir:"+mdir);
            if(mdir != undefined)
            {
                this.turn(mdir);
                this.ismoving = true;
            }
        }

        /**返回对象池，注销一些参数 */
		public return2Pool() : void
		{
            super.return2Pool();
            this.dieAnim.visible = false;
            this.dieAnim.offAll();
            this.offAll();
		}
    }
}