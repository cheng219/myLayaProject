// 程序入口
class AtlasSample {
    constructor() {
        this.imgName1 = "ui/qt113.png";
        this.imgName2 = "ui/qt154.png";
        this.clickIndex = 0;
        Laya.init(600, 400, Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.loader.create("res/atlas/ui.atlas", Laya.Handler.create(this, this.onLoadAtlas));
    }
    onLoadAtlas() {
        console.log("onLoadAtlas");
        this.img = new Laya.Image();
        this.img.skin = this.imgName1;
        Laya.stage.addChild(this.img);
        this.img.on(Laya.Event.CLICK, this, this.clickImage);
    }
    clickImage() {
        console.log("clickImage:" + this.clickIndex);
        this.img.graphics.clear();
        //this.img = new Laya.Image();
        this.img.skin = this.clickIndex % 2 == 0 ? this.imgName2 : this.imgName1;
        Laya.stage.addChild(this.img);
        this.clickIndex++;
    }
}
//new AtlasSample();
//# sourceMappingURL=LayaAtlasSample.js.map