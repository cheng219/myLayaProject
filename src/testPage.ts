/*
* name;
*/

class testPage{
    constructor(){
        Laya.init(600,400,Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //Laya.loader.create("res/atlas/ui.atlas",Laya.Handler.create(this,this.onLoadAtlas));
        Laya.loader.create("res/atlas/comp.atlas",Laya.Handler.create(this,this.onLoadCompAtlas));
    }

    private onLoadAtlas():void
    {
        let page : ui.testUI = new ui.testUI();
        Laya.stage.addChild(page);

        Laya.loader.create("res/atlas/comp.atlas",Laya.Handler.create(this,this.onLoadCompAtlas));
    }

    private onLoadCompAtlas() : void
    {
        let anim : Laya.Animation = new Laya.Animation();
        anim.loadAnimation("testAnim.ani");
        Laya.stage.addChild(anim);
        anim.play("pivot");
        console.log("onLoadCompAtlas");
    }
}
//new testPage();