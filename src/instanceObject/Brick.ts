/*
* 砖块运行时类;
*/
module obj
{
    export class Brick extends InstanceObject
    {
        public id : number = 0;
        public sort : number = 0;

        constructor()
        {
            super();
            //自定义的脚本会有时序问题，所以在此添加一个延时
            this.frameOnce(1,this,this.onFrame);
        }
        private onFrame():void
        {
            //console.log("x:"+this.x + ",y:"+this.y + ",sort:"+this.sort);
            this.frameLoop(1,this,this.onLoop);
            if(this.sort != BrickSort.GRASS)
            {
                let rect = new Laya.Rectangle(0,0,60,60)
                this.setBounds(rect);
            }else
            {
                let rect = new Laya.Rectangle(0,0,0,0)
                this.setBounds(rect);
            }
        }

        private onLoop() : void
        {
            
        }

        public intersectWithOther(other : InstanceObject) : void
        {
            if(other instanceof Bullet)
            {
                console.log("被击中,销毁自己");
                //this.visible = false;
                //this.setBounds(this.zeroRect);
                game.GameCenter.gameStage.DelInstanceObj(this);
            }
        }
    }
}

enum BrickSort
{
    WALL = 1,
    GRASS = 2,
    WATER = 3,
    METAL = 4,
}