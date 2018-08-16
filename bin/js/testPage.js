/*
* name;
*/
var testPage = /** @class */ (function () {
    function testPage() {
        Laya.init(600, 400, Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //Laya.loader.create("res/atlas/ui.atlas",Laya.Handler.create(this,this.onLoadAtlas));
        Laya.loader.create("res/atlas/comp.atlas", Laya.Handler.create(this, this.onLoadCompAtlas));
    }
    testPage.prototype.onLoadAtlas = function () {
        var page = new ui.testUI();
        Laya.stage.addChild(page);
        Laya.loader.create("res/atlas/comp.atlas", Laya.Handler.create(this, this.onLoadCompAtlas));
    };
    testPage.prototype.onLoadCompAtlas = function () {
        var anim = new Laya.Animation();
        anim.loadAnimation("testAnim.ani");
        Laya.stage.addChild(anim);
        anim.play("pivot");
        console.log("onLoadCompAtlas");
    };
    return testPage;
}());
//new testPage();
//# sourceMappingURL=testPage.js.map