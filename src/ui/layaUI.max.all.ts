
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
import EffectAnimation=laya.display.EffectAnimation
module ui.page {
    export class backgroundUI extends View {
		public openBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"width":1136,"skin":"comp/bg.png","height":640,"sizeGrid":"26,4,4,4"}},{"type":"Button","props":{"y":89,"x":129,"var":"openBtn","stateNum":1,"skin":"ui/qt221.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.page.backgroundUI.uiView);

        }

    }
}

module ui.page {
    export class ListPageUI extends View {
		public _list:Laya.List;
		public add:Laya.Button;
		public del:Laya.Button;
		public close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":-6,"x":-18,"width":618,"skin":"ui/qt228.png","height":398,"sizeGrid":"5,5,5,5"}},{"type":"List","props":{"y":13,"x":10,"width":574,"var":"_list","height":313},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"width":574,"skin":"ui/qt229.png","height":45,"sizeGrid":"4,4,4,4"}},{"type":"CheckBox","props":{"y":10,"x":524,"width":27,"stateNum":3,"skin":"comp/checkbox.png","name":"listCheck","height":24}},{"type":"Label","props":{"y":13,"x":19,"width":32,"text":"1","name":"listNumber","height":22,"fontSize":20}},{"type":"Label","props":{"y":13,"x":161,"width":164,"text":"1","name":"listName","height":22,"fontSize":20}}]}]},{"type":"Button","props":{"y":352,"x":93,"width":90,"var":"add","stateNum":1,"skin":"ui/qt281.png","labelStroke":0,"labelSize":20,"labelBold":true,"label":"添加","height":30,"sizeGrid":"4,10,4,10"}},{"type":"Button","props":{"y":357,"x":284,"width":90,"var":"del","skin":"ui/qt281.png","labelSize":20,"labelBold":true,"label":"删除","height":30,"sizeGrid":"4,10,4,10"}},{"type":"Button","props":{"y":-4,"x":564,"width":36,"var":"close","stateNum":1,"skin":"ui/close.png","labelSize":20,"labelBold":true,"height":33}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.page.ListPageUI.uiView);

        }

    }
}

module ui.page {
    export class loginUI extends View {
		public btn_start:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Button","props":{"y":320,"x":568,"width":84,"var":"btn_start","skin":"ui/btn_qt113.png","label":"start","height":27,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.page.loginUI.uiView);

        }

    }
}

module ui.page {
    export class stageUI extends Dialog {
		public remainEnemy:Laya.Label;
		public remainTimes:Laya.Label;
		public stageName:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":1136,"height":640},"child":[{"type":"Box","props":{"y":320,"x":1136,"width":236,"name":"right","height":640,"anchorY":0.5,"anchorX":1},"child":[{"type":"Image","props":{"y":320,"x":236,"width":236,"skin":"ui/qt228.png","name":"right","height":640,"anchorY":0.5,"anchorX":1,"sizeGrid":"5,5,5,5"}},{"type":"Label","props":{"y":14,"x":17,"width":72,"text":"剩余敌军","height":35,"fontSize":25,"font":"Arial"}},{"type":"Label","props":{"y":57,"x":76,"width":64,"var":"remainEnemy","text":"10","name":"enemyLabel","height":27,"fontSize":20,"font":"Arial","color":"#0f933a","bold":true}},{"type":"Label","props":{"y":119,"x":8,"width":72,"text":"剩余挑战次数","height":35,"fontSize":25,"font":"Arial"}},{"type":"Label","props":{"y":158,"x":76,"width":64,"var":"remainTimes","text":"10","name":"enemyLabel","height":27,"fontSize":20,"font":"Arial","color":"#0f933a","bold":true}},{"type":"Label","props":{"y":549,"x":63,"width":64,"var":"stageName","text":"第一关","name":"stageLabel","height":27,"fontSize":20,"font":"Arial","color":"#0f933a"}},{"type":"Label","props":{"y":509,"x":31,"width":72,"text":"关卡","height":35,"fontSize":30,"font":"Arial"}}]},{"type":"Image","props":{"y":0,"x":0,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":60,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":120,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":180,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":240,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":300,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":360,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":420,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":480,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":540,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":600,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":660,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":720,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":780,"width":60,"skin":"game/walls.png","height":60}},{"type":"Image","props":{"y":0,"x":840,"width":60,"skin":"game/walls.png","height":60}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.page.stageUI.uiView);

        }

    }
}

module ui.page {
    export class testUI extends View {
		public ani1:Laya.FrameAnimation;
		public button1:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":200,"x":300,"width":600,"skin":"ui/qt228.png","height":400,"anchorY":0.5,"anchorX":0.5,"sizeGrid":"5,5,5,5"}},{"type":"Image","props":{"y":4,"skin":"ui/close.png","right":7,"height":40}},{"type":"Image","props":{"x":242,"width":146,"skin":"ui/qt279.png","mouseEnabled":true,"height":49,"bottom":14},"compId":5,"child":[{"type":"Label","props":{"y":11,"x":19,"width":104,"text":"按钮","height":31,"fontSize":20,"color":"#0b0a0a","bold":true,"align":"center"}},{"type":"Button","props":{"y":12,"x":22,"width":105,"var":"button1","height":25}},{"type":"Script","props":{"runtime":"ui.scaleUI"}}]},{"type":"List","props":{"y":35,"x":58,"width":375,"height":237},"child":[{"type":"List","props":{"renderType":"render"},"child":[{"type":"Image","props":{"width":375,"skin":"template/Search/search bar_blue.png","height":62}},{"type":"Button","props":{"y":12,"x":318,"skin":"template/Search/btn_search_close.png"}},{"type":"Button","props":{"y":22,"x":37,"width":30,"skin":"template/Search/btn_search_icon.png","height":20}},{"type":"Label","props":{"y":10,"x":79,"width":155,"text":"Text","skin":"template/Search/label.png","height":28,"fontSize":36,"align":"left"}}]}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"anchorY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"anchorY","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"anchorY","index":1}],"anchorX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"anchorX","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"anchorX","index":1}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.scaleUI",ui.scaleUI);

            super.createChildren();
            this.createView(ui.page.testUI.uiView);

        }

    }
}
