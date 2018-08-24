/**
* name 
*/
module game{
	export class StageMng extends laya.ui.Box
	{
		constructor(){
			super();
			this.frameOnce(1,this,this.onFrameOnce);
		}

		private onFrameOnce() : void
		{
			console.log("onFrameOnce");
			Laya.timer.loop(5000,this,this.onFrameLoop);
		}

		private onFrameLoop():void
		{
			console.log("onFrameLoop");
			game.GameCenter.gameStage.CreateEnemyTank();
		}
	}
}