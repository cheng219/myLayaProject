/*
* name;
*/
module game
{
    export class GameStage extends StageBase
    {
        protected objs : Array<obj.InstanceObject> = [];

        protected poolBullets : Array<obj.InstanceObject> = [];

        public mainTank : obj.Tank = null;

        protected minX : number = 0;
        protected minY : number = 0;
        protected maxX : number = 540;//600-60
        protected maxY : number = 840;//900-60

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
            }else if(brick instanceof obj.Bullet)
            {
                this.return2Pool(brick);
            }
            //Laya.stage.removeChild(brick);
        }
        public AddPool(brick : obj.InstanceObject) : void
        {
            this.poolBullets.push(brick);
            let index = this.poolBullets.indexOf(brick);
            brick.pos(1044,20*index);
            //console.log("pool :"+this.poolBullets.length);
        }
        public requstPool() : obj.InstanceObject
        {
            if(this.poolBullets.length > 0)
            {
                let go = this.poolBullets[0];
                go.init();
                this.poolBullets.splice(0,1);
                console.log("remain :" + this.poolBullets.length);
                return go;
            }
        }
        public return2Pool(brick : obj.InstanceObject) : void
        {
            brick.return2Pool();
            this.AddPool(brick);
        }

        public intersectWithOther(tank : obj.InstanceObject,dir : MoveDir) : boolean
        {
            //console.log("intersectWithOther id:"+tank.camp);
            if(tank.x <= this.minX || tank.x >= this.maxX || tank.y <= this.minY || tank.y >= this.maxY)
                return true;
            for(let i = 0,len=this.objs.length;i < len;i++)
            {
                if(!this.objs[i].inited)
                    continue;
                if(this.objs[i] == tank || this.objs[i].camp == tank.camp)//这里会导致坦克穿透
                    continue;
                let diffX : number = this.objs[i].x - tank.x;
                let diffY : number = this.objs[i].y - tank.y;
                if(diffX > 60 || diffY > 60)//距离过远,必然不相交,减少getBounds消耗
                    continue;
                if(this.objs[i].getBounds().intersects(tank.getBounds()))
                {
                    let intersect : boolean = false;
                    switch(dir)
                    {
                        case MoveDir.UP:
                            if(diffY < 0 && Math.abs(diffX)  < 60)
                            {
                                //console.log("intersectWithOther other x:"+this.objs[i].x + ",y:"+this.objs[i].y + ",dir:"+dir);
                                intersect = true;
                            }
                            break;
                        case MoveDir.DOWN:
                            if(diffY > 0 && Math.abs(diffX) < 60)
                            {
                                //console.log("intersectWithOther other x:"+this.objs[i].x + ",y:"+this.objs[i].y + ",dir:"+dir);
                                intersect = true;
                            }
                            break;
                        case MoveDir.LEFT:
                            if(diffX > 0 && Math.abs(diffY) < 60)
                            {
                                //console.log("intersectWithOther other x:"+this.objs[i].x + ",y:"+this.objs[i].y + ",dir:"+dir);
                                intersect = true;
                            }
                            break;
                        case MoveDir.RIGHT:
                            if(diffX > 0 && Math.abs(diffY) < 60)
                            {
                                //console.log("intersectWithOther other x:"+this.objs[i].x + ",y:"+this.objs[i].y + ",dir:"+dir);
                                intersect = true;
                            }
                            break;
                    }
                    if(intersect)
                    {
                        this.objs[i].intersectWithOther(tank);
                        tank.intersectWithOther(this.objs[i]);
                        return true;
                    }
                }
            }
            return false;
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