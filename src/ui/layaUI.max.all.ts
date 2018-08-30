
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
import EffectAnimation=laya.display.EffectAnimation
module ui.page {
    export class backgroundUI extends View {
		public openBtn:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("page/background");

        }

    }
}

module ui.page {
    export class ListPageUI extends View {
		public _list:Laya.List;
		public add:Laya.Button;
		public del:Laya.Button;
		public close:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("page/ListPage");

        }

    }
}

module ui.page {
    export class loginUI extends View {
		public ani_start:Laya.FrameAnimation;
		public btn_start:Laya.Button;
		public load_text:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("page/login");

        }

    }
}

module ui.page {
    export class stageUI extends Dialog {
		public remainEnemy:Laya.Label;
		public remainTimes:Laya.Label;
		public stageName:Laya.Label;
		public map:game.StageMng;
		public mainTak:obj.Tank;
		public attack:Laya.Button;
		public up:Laya.Button;
		public left:Laya.Button;
		public right:Laya.Button;
		public down:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("game.StageMng",game.StageMng);
			View.regComponent("obj.Brick",obj.Brick);
			View.regComponent("obj.Tank",obj.Tank);
			View.regComponent("obj.Bullet",obj.Bullet);

            super.createChildren();
            this.loadUI("page/stage");

        }

    }
}
