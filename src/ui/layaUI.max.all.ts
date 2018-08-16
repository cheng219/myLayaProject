
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
import EffectAnimation=laya.display.EffectAnimation
module ui {
    export class ListPageUI extends View {
		public _list:Laya.List;
		public add:Laya.Button;
		public del:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"ui/qt228.png","height":400,"sizeGrid":"5,5,5,5"}},{"type":"List","props":{"y":13,"x":10,"width":574,"var":"_list","height":313},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"width":574,"skin":"ui/qt229.png","height":45,"sizeGrid":"4,4,4,4"}},{"type":"CheckBox","props":{"y":10,"x":524,"width":27,"skin":"comp/checkbox.png","height":24}},{"type":"Label","props":{"y":13,"x":19,"width":32,"text":"1","name":"listNumber","height":22,"fontSize":20}},{"type":"Label","props":{"y":13,"x":161,"width":164,"text":"1","name":"listName","height":22,"fontSize":20}}]}]},{"type":"Button","props":{"y":352,"x":93,"width":90,"var":"add","skin":"ui/qt281.png","labelSize":20,"labelBold":true,"label":"添加","height":30,"sizeGrid":"4,10,4,10"}},{"type":"Button","props":{"y":357,"x":284,"width":90,"var":"del","skin":"ui/qt281.png","labelSize":20,"labelBold":true,"label":"删除","height":30,"sizeGrid":"4,10,4,10"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ListPageUI.uiView);

        }

    }
}

module ui {
    export class scaleUI extends EffectAnimation {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"skin":"comp/image.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super();this.effectData =ui.scaleUI.uiView;}
    }
}

module ui {
    export class testUI extends View {
		public ani1:Laya.FrameAnimation;
		public button1:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":200,"x":300,"width":600,"skin":"ui/qt228.png","height":400,"anchorY":0.5,"anchorX":0.5,"sizeGrid":"5,5,5,5"}},{"type":"Image","props":{"y":4,"skin":"ui/qt316.png","right":7,"height":40}},{"type":"Image","props":{"x":242,"width":146,"skin":"ui/qt279.png","mouseEnabled":true,"height":49,"bottom":14},"compId":5,"child":[{"type":"Label","props":{"y":11,"x":19,"width":104,"text":"按钮","height":31,"fontSize":20,"color":"#0b0a0a","bold":true,"align":"center"}},{"type":"Button","props":{"y":12,"x":22,"width":105,"var":"button1","height":25}},{"type":"Script","props":{"runtime":"ui.scaleUI"}}]},{"type":"List","props":{"y":35,"x":58,"width":375,"height":237},"child":[{"type":"List","props":{"renderType":"render"},"child":[{"type":"Image","props":{"width":375,"skin":"template/Search/search bar_blue.png","height":62}},{"type":"Button","props":{"y":12,"x":318,"skin":"template/Search/btn_search_close.png"}},{"type":"Button","props":{"y":22,"x":37,"width":30,"skin":"template/Search/btn_search_icon.png","height":20}},{"type":"Label","props":{"y":10,"x":79,"width":155,"text":"Text","skin":"template/Search/label.png","height":28,"fontSize":36,"align":"left"}}]}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"anchorY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"anchorY","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"anchorY","index":1}],"anchorX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"anchorX","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"anchorX","index":1}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.scaleUI",ui.scaleUI);

            super.createChildren();
            this.createView(ui.testUI.uiView);

        }

    }
}
