/*
* 砖块数据类;
*/
module info
{
    export class BrickInfo
    {
        public sort : BrickInfoSort = BrickInfoSort.EMPTY;
        public x : number = 0;
        public y : number = 0;
        constructor()
        {
            
        }

        public init(brick : obj.Brick) : void
        {
            this.x = brick.x;
            this.y = brick.y;
            this.sort = brick.sort as BrickInfoSort;
            console.log("this.sort :"+ (this.sort == BrickInfoSort.WALL));
        }
    }

}
enum BrickInfoSort
{
    EMPTY = 0,//空格
    WALL = 1,//土墙
    GRASS = 2,//草
    WATER = 3,//水
    METAL = 4,//钢板
    //敌人
    //自己的基地
}