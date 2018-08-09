// 程序入口
class GameMain {
    constructor() {
        this.prevX = 0;
        this.prevY = 0;
        Laya.init(600, 400, Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        this.te = new Laya.Text();
        this.te.fontSize = 30;
        this.te.size(200, 80);
        this.te.color = "#ff0000";
        this.te.bgColor = "#00ff00";
        this.te.text = `helloworld 
          你好aaaaaaaaa 
          aaaaaaaaaaaaaaaa`;
        this.te.font = "myFont";
        this.te.align = "center";
        this.te.valign = "middle";
        this.te.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.te.pivot(this.te.width / 2, this.te.height / 2);
        this.te.bold = true;
        this.te.italic = true;
        this.te.overflow = "scroll";
        this.te.overflow = Laya.Text.SCROLL;
        this.te.on(Laya.Event.MOUSE_DOWN, this, this.startscroll);
        Laya.stage.addChild(this.te);
    }
    startscroll() {
        this.prevX = this.te.mouseX;
        this.prevY = this.te.mouseY;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.scrollText);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.finishScrollText);
    }
    scrollText() {
        var nowX = this.te.mouseX;
        var nowY = this.te.mouseY;
        this.te.scrollX += this.prevX - nowX;
        this.te.scrollY += this.prevY - nowY;
        this.prevX = nowX;
        this.prevY = nowY;
    }
    finishScrollText() {
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.scrollText);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.finishScrollText);
    }
}
//new GameMain();
//# sourceMappingURL=LayaSample.js.map