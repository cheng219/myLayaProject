/*
* name;
*/
module game
{
    export class GameStage extends StageBase
    {
        protected objs : Array<obj.InstanceObject> = [];

        protected poolBullets : Array<obj.InstanceObject> = [];
        protected poolTanks : Array<obj.InstanceObject> = [];

        public mainTank : obj.Tank = null;

        protected minX : number = 30;
        protected minY : number = 30;
        protected maxX : number = 870;//900-30
        protected maxY : number = 570;//600-30

        protected bornPos : Array<any> = [{x:30,y:30},{x:420,y:30},{x:870,y:30}];

        public static CreateNew() : GameStage
        {
            if(GameCenter.gameStage == null)
            {
                GameCenter.gameStage = new GameStage();
            }else
            {
                GameCenter.gameStage.UnRegist();
                GameCenter.gameStage.Regist();
            }
            return GameCenter.gameStage;
        }
        constructor()
        {
            super();
        }
        public Regist() : void
        {

        }
        public UnRegist() : void
        {
            this.objs = [];
        }

        public AddInstanceObj(brick : obj.InstanceObject) : void
        {
            this.objs.push(brick);
        }

        public DelInstanceObj(brick : obj.InstanceObject) : void
        {
            let index : number = this.objs.indexOf(brick);
            if(index > -1)
            {
                this.objs.splice(index,1);
            }
            if(brick instanceof obj.Brick)
            {
                brick.destroy(true);
            }else if(brick.isPoolObj)
            {
                this.return2Pool(brick);
            }
        }
        public AddPool(brick : obj.InstanceObject) : void
        {
            if(brick instanceof obj.Bullet)
            {
                let len : number = this.poolBullets.push(brick);
                brick.pos(1100,20*len);
            }else if(brick instanceof obj.Tank)
            {
                let len : number = this.poolTanks.push(brick);
                brick.pos(1050,60*len);
            }
            //console.log("pool :"+this.poolBullets.length);
        }
        public requstPool(sort : ObjSort) : obj.InstanceObject
        {
            if(sort == ObjSort.BULLET)
            {
                let len : number = this.poolBullets.length;
                if(len > 0)
                {
                    let go = this.poolBullets[len - 1];
                    go.init();
                    this.poolBullets.splice(len - 1,1);
                    //console.log("remain :" + this.poolBullets.length);
                    return go;
                }
            }else if(sort == ObjSort.TANK)
            {
                let len : number = this.poolTanks.length;
                if(len > 0)
                {
                    let go = this.poolTanks[len - 1];
                    go.init();
                    this.poolTanks.splice(len - 1,1);
                    //console.log("remain :" + this.poolBullets.length);
                    return go;
                }
            }
            return null;
        }
        public return2Pool(brick : obj.InstanceObject) : void
        {
            brick.return2Pool();
            this.AddPool(brick);
        }
        /**检测碰撞 */
        public checkHit(bullet : obj.InstanceObject,dir : MoveDir) : boolean
        {
            //console.log("intersectWithOther id:"+tank.camp);
            if((bullet.x <= this.minX && dir == MoveDir.LEFT) 
            || (bullet.x >= this.maxX && dir == MoveDir.RIGHT)
            || (bullet.y <= this.minY && dir == MoveDir.UP)
            || (bullet.y >= this.maxY && dir == MoveDir.DOWN))
            {
                bullet.beHit(null);//撞到边界
                return true;
            } 
            for(let i = 0,len=this.objs.length;i < len;i++)
            {
                if(!this.objs[i].inited)
                    continue;
                if(this.objs[i] == bullet)
                    continue;
                if(this.objs[i].camp == bullet.camp)
                    continue;
                let diffX : number = Math.abs(this.objs[i].x - bullet.x);
                let diffY : number = Math.abs(this.objs[i].y - bullet.y);
                let diffW : number = this.objs[i].widthX/2 + bullet.widthX/2;
                let diffH : number = this.objs[i].heightY/2 + bullet.heightY/2;
                if(diffX > diffW || diffY > diffH)//距离过远
                    continue;
                if(this.objs[i] instanceof obj.Brick)
                {
                    if((this.objs[i] as obj.Brick).sort == BrickSort.WATER)
                    {
                        continue;//子弹过水
                    }
                }
                if(diffX < diffW && diffY < diffH)
                {
                    //console.log("diffX :"+diffX+",diffW :"+diffW+",diffY :"+diffY+",diffH :"+diffH);
                    if(!this.objs[i].IsDead && !bullet.IsDead)
                    {
                        this.objs[i].beHit(bullet);
                        bullet.beHit(this.objs[i]);
                        return true;
                    }
                }
            }
            return false;
        }
        /**检测碰撞 */
        public checkCanMove(tank : obj.InstanceObject,dir : MoveDir) : boolean
        {
            //console.log("intersectWithOther id:"+tank.camp);
            if((tank.x <= this.minX && dir == MoveDir.LEFT) 
            || (tank.x >= this.maxX && dir == MoveDir.RIGHT)
            || (tank.y <= this.minY && dir == MoveDir.UP)
            || (tank.y >= this.maxY && dir == MoveDir.DOWN))
            {
                tank.stopMoveByOther();//撞到边界
                return true;
            } 
            for(let i = 0,len=this.objs.length;i < len;i++)
            {
                if(this.objs[i] instanceof obj.Bullet || !this.objs[i].inited)
                    continue;
                if(this.objs[i] == tank)
                    continue;
                let diffX : number = Math.abs(this.objs[i].x - tank.x);
                let diffY : number = Math.abs(this.objs[i].y - tank.y);
                let diffW : number = this.objs[i].widthX/2 + tank.widthX/2;
                let diffH : number = this.objs[i].heightY/2 + tank.heightY/2;
                if(diffX > diffW || diffY > diffH)//距离过远
                    continue;
                if(diffX < diffW && diffY < diffH)
                {
                    //console.log("diffX :"+diffX+",diffW :"+diffW+",diffY :"+diffY+",diffH :"+diffH);
                    if(!this.objs[i].IsDead && !tank.IsDead)
                    {
                        tank.stopMoveByOther();
                        return true;
                    }
                }
            }
            return false;
        }

        protected posIndex : number = 0;
        public CreateEnemyTank() : void
        {
            let tank = game.GameCenter.gameStage.requstPool(ObjSort.TANK) as obj.Tank;
            if(tank != null)
            {
                let pos = this.bornPos[this.posIndex];
                tank.pos(pos.x,pos.y);
                tank.ismoving = true;
                tank.camp = 2;
                tank.speed = ConfigMng.enemyMoveSpeed;
                tank.bulletSpeed = ConfigMng.enemyBulletSpeed;
                tank.turn(MoveDir.DOWN);
                //Laya.stage.addChild(bullet);
                this.posIndex++;
                if(this.posIndex >= this.bornPos.length)
                {
                    this.posIndex = 0;
                }
            }
        }
    }
}
enum MoveDir
{
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
enum ObjSort
{
    BRICK,
    TANK,
    BULLET,
}