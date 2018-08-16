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
        }
        setListData() {
            this.arr = [];
            let str = "list名字";
            for (let i = 1; i <= 30; i++) {
                this.arr.push({ listNumber: { text: i }, listName: { text: str + i } });
            }
            this.listPage._list.array = this.arr;
            this.listPage._list.renderHandler = new Handler(this, this.listRender);
        }
        listRender(cell, index) {
            console.log("listRender:" + index);
            if (index > this.arr.length)
                return;
            let num = this.arr[index];
            let listNumber = cell.getChildByName("listNumber");
            listNumber.text = num.listNumber.text;
            let listName = cell.getChildByName("listName");
            listName.text = num.listName.text;
        }
    }
    demo.listDemo = listDemo;
})(demo || (demo = {}));
new demo.listDemo();
//# sourceMappingURL=listDemo.js.map