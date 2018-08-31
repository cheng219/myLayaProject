/**
* name 
*/
module obj
{
	export class InstanceObject extends laya.ui.Box
	{
		public isPoolObj : boolean = false;
		protected _inited : boolean = false;
		protected isDead : boolean = false;
		public get IsDead()
		{
			return this.isDead;
		}
		public get inited()
		{
			return this._inited;
		}
		/**阵营(相等则不碰撞检测) */
		protected _camp : number = 0;
		/**阵营(相等则不碰撞检测) */
		public set camp(camp : number)
		{
			this._camp = camp;
		}
		public get camp()
		{
			return this._camp;
		}
		/**移动速度 */
		private _speed : number = 6;
		/**移动速度 */
		public set speed(speed : number)
		{
			this._speed = speed;
		}
		/**朝向 */
		private _dir : MoveDir = MoveDir.UP;
		/**朝向 */
		public set dir(dir : MoveDir)
		{
			this._dir = dir;
		}
		public get dir()
		{
			return this._dir;
		}
		/**是否移动中 */
		private _ismoving : boolean = false;
		/**是否移动中 */
		public set ismoving(ismoving : boolean)
		{
			this._ismoving = ismoving;
		}
		public get ismoving()
		{
			return this._ismoving;
		}
		/**对象碰撞宽度 */
		public widthX : number = 60;
		/**对象碰撞高度 */
		public heightY : number = 60;

		constructor(){
			super();
			//自定义的脚本会有时序问题，所以在此添加一个延时
			this.frameOnce(1,this,this.onFrameOnce);
		}
		/**对象初始化后延迟一帧后执行的函数 */
		protected onFrameOnce() : void
        {
			if(this.isPoolObj)
			{
				game.GameCenter.gameStage.AddPool(this);
			}else
			{
				game.GameCenter.gameStage.AddInstanceObj(this);
			}
			this.frameLoop(1,this,this.onFrameLoop);
        }
		/**每帧执行的函数 */
		protected onFrameLoop() : void
        {
            
        }
		/**移动 */
		public move() : void
		{
			//console.log("move ismoving : "+this._ismoving);
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
		/**移动停止,矫正位置*/
		public stopMove() : void
		{
			if(this._ismoving)
			{
				this._ismoving = false;
				//console.log("before this.x :"+this.x  + ",this.y:"+this.y);
				this.x = Math.round((this.x - 30) / 60) * 60 + 30;
				this.y = Math.round((this.y - 30) / 60) * 60 + 30;
				//console.log("after this.x :"+this.x  + ",this.y:"+this.y);
			}
		}
		/**转向 */
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
			this.dir = dir;
		}

		public Dead() : void
		{
			this.isDead = true;
		}
		/**被其他物体碰撞 */
		public beHit(other : InstanceObject) : void
		{
			
		}
		/**碰撞到砖或者其他坦克 */
		public stopMoveByOther() : void
		{
			
		}
		/**初始化 */
		public init() : void
        {
			game.GameCenter.gameStage.AddInstanceObj(this);
        }
		/**返回对象池，注销一些参数 */
		public return2Pool() : void
		{
			this._inited = false;
			this._ismoving = false;
			this.isDead = false;
		}
	}
}