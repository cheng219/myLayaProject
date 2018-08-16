/*
* name;
*/
var demo;
(function (demo) {
    var WebGL = Laya.WebGL;
    var Handler = laya.utils.Handler;
    class listDemo {
        constructor() {
            Laya.init(1136, 640, WebGL);
            Laya.stage.bgColor = "#ffffff";
            Laya.loader.load(["res/atlas/ui.atlas", "res/atlas/comp.atlas"], Handler.create(this, this.OnLoadAtlas));
        }
        OnLoadAtlas() {
            this.listPage = new ui.ListPageUI();
            Laya.stage.addChild(this.listPage);
            this.listPage.pos(Laya.stage.width / 2, Laya.stage.height / 2);
            this.listPage.pivot(this.listPage.width / 2, this.listPage.height / 2);
            this.setListData();
            this.listPage.add.on(Laya.Event.CLICK, this, this.clickAdd);
            this.listPage.del.on(Laya.Event.CLICK, this, this.clickDel);
        }
        setListData() {
            this.arr = [];
            let str = "list名字";
            for (let i = 1; i <= 10; i++) {
                this.arr.push({ listNumber: { text: i }, listName: { text: str + i } });
            }
            this.listPage._list.vScrollBarSkin = "";
            this.listPage._list.array = this.arr;
            this.listPage._list.renderHandler = new Handler(this, this.listRender);
            this.listPage._list.mouseHandler = new Handler(this, this.onCheck);
        }
        listRender(cell, index) {
            //console.log("listRender:"+index);
            if (index > this.arr.length)
                return;
            let num = this.arr[index];
            let listNumber = cell.getChildByName("listNumber");
            listNumber.text = num.listNumber.text;
            let listName = cell.getChildByName("listName");
            listName.text = num.listName.text;
            let listCheckBox = cell.getChildByName("listCheck");
            listCheckBox.selected = num.isCheck;
        }
        onCheck(e, index) {
            console.log("onCheck:" + index);
            if (e.type == Laya.Event.CLICK) {
                console.log("onCheck CLICK:" + index);
                if (e.target instanceof laya.ui.CheckBox) {
                    console.log("onCheck CLICK checkbox:" + index);
                    let data = this.arr[index];
                    if (e.target.selected) {
                        this.listPage._list.setItem(index, { listNumber: { text: data.listNumber.text }, listName: { text: data.listName.text }, isCheck: true });
                    }
                    else {
                        this.listPage._list.setItem(index, { listNumber: { text: data.listNumber.text }, listName: { text: data.listName.text }, isCheck: false });
                    }
                }
            }
        }
        clickAdd() {
            console.log("clickAdd");
            this.listPage._list.addItem({ listNumber: { text: this.arr.length + 1 }, listName: { text: "增加的" + (this.arr.length + 1) } });
        }
        clickDel() {
            console.log("clickDel");
            let newArr = [];
            for (let i = 0; i < this.arr.length; i++) {
                if (!this.arr[i].isCheck) {
                    newArr.push(this.arr[i]);
                }
            }
            this.arr = newArr;
            this.listPage._list.array = this.arr;
        }
    }
    demo.listDemo = listDemo;
})(demo || (demo = {}));
new demo.listDemo();
//# sourceMappingURL=listDemo.js.map