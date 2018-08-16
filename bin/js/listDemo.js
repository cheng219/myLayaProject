/*
* name;
*/
var demo;
(function (demo) {
    var WebGL = Laya.WebGL;
    var Handler = laya.utils.Handler;
    var listDemo = /** @class */ (function () {
        function listDemo() {
            Laya.init(1136, 640, WebGL);
            Laya.stage.bgColor = "#ffffff";
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
            Laya.loader.load(["res/atlas/ui.atlas", "res/atlas/comp.atlas"], Handler.create(this, this.initMainWnd));
        }
        listDemo.prototype.initMainWnd = function () {
            this.mainPage = new ui.page.backgroundUI();
            Laya.stage.addChild(this.mainPage);
            this.mainPage.openBtn.on(Laya.Event.MOUSE_UP, this, this.OpenListPage);
        };
        listDemo.prototype.OpenListPage = function () {
            this.listPage = new ui.page.ListPageUI();
            Laya.stage.addChild(this.listPage);
            this.listPage.pos(Laya.stage.width / 2, Laya.stage.height / 2);
            this.listPage.pivot(this.listPage.width / 2, this.listPage.height / 2);
            this.setListData();
            this.listPage.add.on(Laya.Event.CLICK, this, this.clickAdd);
            this.listPage.del.on(Laya.Event.CLICK, this, this.clickDel);
            this.listPage.close.on(Laya.Event.CLICK, this, this.onCloseListPage);
        };
        listDemo.prototype.setListData = function () {
            this.arr = [];
            var str = "list名字";
            for (var i = 1; i <= 10; i++) {
                this.arr.push({ listNumber: { text: i }, listName: { text: str + i } });
            }
            this.listPage._list.vScrollBarSkin = "";
            this.listPage._list.array = this.arr;
            this.listPage._list.renderHandler = new Handler(this, this.listRender);
            this.listPage._list.mouseHandler = new Handler(this, this.onCheck);
        };
        listDemo.prototype.listRender = function (cell, index) {
            //console.log("listRender:"+index);
            if (index > this.arr.length)
                return;
            var num = this.arr[index];
            var listNumber = cell.getChildByName("listNumber");
            listNumber.text = num.listNumber.text;
            var listName = cell.getChildByName("listName");
            listName.text = num.listName.text;
            var listCheckBox = cell.getChildByName("listCheck");
            listCheckBox.selected = num.isCheck;
        };
        listDemo.prototype.onCheck = function (e, index) {
            //console.log("onCheck:"+index);
            if (e.type == Laya.Event.CLICK) {
                console.log("onCheck CLICK:" + index);
                if (e.target instanceof laya.ui.CheckBox) {
                    console.log("onCheck CLICK checkbox:" + index);
                    var data = this.arr[index];
                    if (e.target.selected) {
                        this.listPage._list.setItem(index, { listNumber: { text: data.listNumber.text }, listName: { text: data.listName.text }, isCheck: true });
                    }
                    else {
                        this.listPage._list.setItem(index, { listNumber: { text: data.listNumber.text }, listName: { text: data.listName.text }, isCheck: false });
                    }
                }
            }
        };
        listDemo.prototype.clickAdd = function () {
            console.log("clickAdd");
            this.listPage._list.addItem({ listNumber: { text: this.arr.length + 1 }, listName: { text: "增加的" + (this.arr.length + 1) } });
        };
        listDemo.prototype.clickDel = function () {
            console.log("clickDel");
            var newArr = [];
            for (var i = 0; i < this.arr.length; i++) {
                if (!this.arr[i].isCheck) {
                    newArr.push(this.arr[i]);
                }
            }
            this.arr = newArr;
            this.listPage._list.array = this.arr;
        };
        listDemo.prototype.onCloseListPage = function () {
            console.log("onCloseListPage");
            Laya.stage.removeChild(this.listPage);
        };
        return listDemo;
    }());
    demo.listDemo = listDemo;
})(demo || (demo = {}));
new demo.listDemo();
//# sourceMappingURL=listDemo.js.map