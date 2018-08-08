// 程序入口
class AtlasSample
{

    constructor()
    {
        Laya.init(600,400,Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.loader.create("res/atlas/ui.atlas",Laya.Handler.create(this,this.onLoadAtlas));
        
    }
    protected img : Laya.Image;
    protected imgName1:string = "ui/qt113.png";
    protected imgName2:string = "ui/qt154.png";
    protected clickIndex : number = 0;
    private onLoadAtlas():void
    {
        console.log("onLoadAtlas");
        this.img = new Laya.Image();
        this.img.skin = this.imgName1;
        Laya.stage.addChild(this.img);
        this.img.on(Laya.Event.CLICK,this,this.clickImage);
    }
    
    private clickImage():void
    {
        console.log("clickImage:"+this.clickIndex);
        this.img.graphics.clear();
        //this.img = new Laya.Image();
        this.img.skin = this.clickIndex % 2 == 0 ? this.imgName2 : this.imgName1;
        Laya.stage.addChild(this.img);
        this.clickIndex++;
    }
}
//new AtlasSample();