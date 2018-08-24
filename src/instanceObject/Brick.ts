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
            this.camp = 0;
        }
        protected onFrameOnce():void
        {
            super.onFrameOnce();
            //console.log("x:"+this.x + ",y:"+this.y + ",sort:"+this.sort);
            if(this.sort != BrickSort.GRASS)
            {
                this.widthX = 60;
                this.heightY = 60;
            }else
            {
                this.widthX = 0;
                this.heightY = 0;
            }
            this._inited = true;
        }

        protected onFrameLoop() : void
        {
            super.onFrameLoop();
        }

        public intersectWithOther(other : InstanceObject) : void
        {
            super.intersectWithOther(other);
            if(other instanceof Bullet)
            {
                if(this.sort == BrickSort.WALL)
                {
                    console.log("被击中,销毁自己");
                    //this.visible = false;
                    //this.setBounds(this.zeroRect);
                    game.GameCenter.gameStage.DelInstanceObj(this);
                }else if(this.sort == BrickSort.METAL)
                {
                    //金属必须强力子弹
                }
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