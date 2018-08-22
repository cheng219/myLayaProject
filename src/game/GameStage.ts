/*
* name;
*/
module game
{
    export class GameStage extends StageBase
    {
        protected bricks : Array<obj.Brick> = [];

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
            this.bricks = [];
        }

        public AddBrick(brick : obj.Brick) : void
        {
            this.bricks.push(brick);
        }
    }
}