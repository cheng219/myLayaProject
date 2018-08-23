/**
* name 
*/
module obj
{
	export class InstanceObject extends laya.ui.Box
	{
		protected _inited : boolean = false;
		public get inited()
		{
			return this._inited;
		}
		protected _camp : number = 0;
		public set camp(camp : number)
		{
			this._camp = camp;
		}
		public get camp()
		{
			return this._camp;
		}
		private _speed : number = 6;
		public set speed(speed : number)
		{
			this._speed = speed;
		}
		private _dir : MoveDir = MoveDir.UP;
		public set dir(dir : MoveDir)
		{
			this._dir = dir;
		}
		private _ismoving : boolean = false;
		public set ismoving(ismoving : boolean)
		{
			this._ismoving = ismoving;
		}

		protected zeroRect : Laya.Rectangle = new Laya.Rectangle(0,0,0,0);
		protected oneRect : Laya.Rectangle = new Laya.Rectangle(0,0,60,60);

		constructor(){
			super();
			this.frameOnce(1,this,this.onFrameOnce);
			game.GameCenter.gameStage.AddInstanceObj(this);
		}
		protected onFrameOnce() : void
        {
            this.frameLoop(1,this,this.onFrameLoop);
        }
		protected onFrameLoop() : void
        {
            
        }

		public move() : void
		{
			console.log("move ismoving : "+this._ismoving);
			if(!this._ismoving)
				return;
			switch(this.rotation)
			{
				case 0:
					this.y = this.y - this._speed;
					break;
				case 90:
					this.x = this.x + this._speed;
					break;
				case 180:
					this.y = this.y + this._speed;
					break;
				case 270:
					this.x = this.x - this._speed;
					break;
				default:
					console.log("move rotation："+this.rotation);
					break;
			}
		}

		public turn(dir : MoveDir) 
		{
			switch(dir)
			{
				case MoveDir.UP:
					this.rotation = 0;
					break;
				case MoveDir.RIGHT:
					this.rotation = 90;
					break;
				case MoveDir.DOWN:
					this.rotation = 180;
					break;
				case MoveDir.LEFT:
					this.rotation = 270;
					break;
			}
		}

		public intersectWithOther(other : InstanceObject) : void
		{
			
		}
	}
}