/*
* name;
*/
module demo
{
    import WebGL = Laya.WebGL;
    import Loader = laya.net.Loader;
    import Handler = laya.utils.Handler;
    import Box = laya.ui.Box;
    import Label = laya.ui.Label;

    export class listDemo{
        private listPage : ui.ListPageUI;
        private arr : Array<any>;
        constructor(){
            Laya.init(1136,640,WebGL);
            Laya.stage.bgColor = "#ffffff";
            Laya.loader.load(["res/atlas/ui.atlas","res/atlas/comp.atlas"],Handler.create(this,this.OnLoadAtlas));
        }

        private OnLoadAtlas() : void
        {
            this.listPage = new ui.ListPageUI();
            Laya.stage.addChild(this.listPage);
            this.listPage.pos(Laya.stage.width / 2,Laya.stage.height / 2);
            this.listPage.pivot(this.listPage.width / 2,this.listPage.height / 2);
            this.setListData();
        }

        private setListData() : void
        {
            this.arr = [];
            let str:string = "list名字";
            for(let i:number = 1;i<=30;i++)
            {
                this.arr.push({listNumber:{text:i},listName:{text:str + i}});
            }
            this.listPage._list.array = this.arr;
            this.listPage._list.renderHandler = new Handler(this,this.listRender);
        }
        private listRender(cell:Box,index:number):void
        {
            console.log("listRender:"+index);
            if(index > this.arr.length)return;
            let num : any = this.arr[index];
            let listNumber:Label = cell.getChildByName("listNumber") as Label;
            listNumber.text = num.listNumber.text;
            let listName:Label = cell.getChildByName("listName") as Label;
            listName.text = num.listName.text;
        }
    }
}
new demo.listDemo();
