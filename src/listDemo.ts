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
        
        constructor(){
            Laya.MiniAdpter.init();
            Laya.init(1136,640,WebGL);
            Laya.stage.bgColor = "#ffffff";
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
            Laya.loader.load(["res/atlas/ui.atlas","res/atlas/comp.atlas"],Handler.create(this,this.initMainWnd));
        }

        private mainPage : ui.page.backgroundUI;
        private initMainWnd() : void
        {
            this.mainPage = new ui.page.backgroundUI();
            Laya.stage.addChild(this.mainPage);
            this.mainPage.openBtn.on(Laya.Event.MOUSE_UP,this,this.OpenListPage);
        }

        private listPage : ui.page.ListPageUI;
        private arr : Array<any>;
        private OpenListPage() : void
        {
            this.listPage = new ui.page.ListPageUI();
            Laya.stage.addChild(this.listPage);
            this.listPage.pos(Laya.stage.width / 2,Laya.stage.height / 2);
            this.listPage.pivot(this.listPage.width / 2,this.listPage.height / 2);
            this.setListData();

            this.listPage.add.on(Laya.Event.CLICK,this,this.clickAdd);
            this.listPage.del.on(Laya.Event.CLICK,this,this.clickDel);
            this.listPage.close.on(Laya.Event.CLICK,this,this.onCloseListPage);
        }

        private setListData() : void
        {
            this.arr = [];
            let str:string = "list名字";
            for(let i:number = 1;i<=10;i++)
            {
                this.arr.push({listNumber:{text:i},listName:{text:str + i}});
            }
            this.listPage._list.vScrollBarSkin = "";
            this.listPage._list.array = this.arr;
            this.listPage._list.renderHandler = new Handler(this,this.listRender);
            this.listPage._list.mouseHandler = new Handler(this,this.onCheck);
        }
        private listRender(cell:Box,index:number):void
        {
            //console.log("listRender:"+index);
            if(index > this.arr.length)return;
            let num : any = this.arr[index];
            let listNumber:Label = cell.getChildByName("listNumber") as Label;
            listNumber.text = num.listNumber.text;
            let listName:Label = cell.getChildByName("listName") as Label;
            listName.text = num.listName.text;
            let listCheckBox:laya.ui.CheckBox = cell.getChildByName("listCheck") as laya.ui.CheckBox;
            listCheckBox.selected = num.isCheck;
        }

        private onCheck(e:Event,index:number):void
        {
            //console.log("onCheck:"+index);
            if(e.type == Laya.Event.CLICK)
            {
                console.log("onCheck CLICK:"+index);
                if(e.target instanceof laya.ui.CheckBox)
                {
                    console.log("onCheck CLICK checkbox:"+index);
                    let data : any = this.arr[index];
                    if((e.target as laya.ui.CheckBox).selected)
                    {
                        this.listPage._list.setItem(index,{listNumber:{text:data.listNumber.text}, listName:{text:data.listName.text},isCheck:true});
                    }else
                    {
                        this.listPage._list.setItem(index,{listNumber:{text:data.listNumber.text}, listName:{text:data.listName.text},isCheck:false});
                    }
                }
            }
        }

        private clickAdd() : void
        {
            console.log("clickAdd");
            this.listPage._list.addItem({listNumber:{text:this.arr.length + 1},listName:{text:"增加的" + (this.arr.length + 1)}});
        }
        private clickDel() : void
        {
            console.log("clickDel");
            let newArr : Array<any> = [];
            for(let i : number = 0;i<this.arr.length;i++)
            {
                if(!this.arr[i].isCheck)
                {
                    newArr.push(this.arr[i]);
                }
            }
            this.arr = newArr;
            this.listPage._list.array = this.arr;
        }
        private onCloseListPage() : void
        {
            console.log("onCloseListPage");
            Laya.stage.removeChild(this.listPage);
        }
    }
}
//new demo.listDemo();
