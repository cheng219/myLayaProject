/*
* name;
*/
import Handler = laya.utils.Handler;
import Loader = Laya.Loader;
class LoginWnd extends ui.page.loginUI
{
    constructor(){
        super();
        this.btn_start.visible = false;
        Laya.loader.load([{url:"res/atlas/game.atlas",type:Loader.ATLAS},
            {url:"sound/add.wav",type:Loader.SOUND},
            {url:"sound/start.wav",type:Loader.SOUND},
            {url:"sound/hit.wav",type:Loader.SOUND},
            {url:"sound/blast.wav",type:Loader.SOUND},
            {url:"sound/fire.wav",type:Loader.SOUND}],
            Handler.create(this,this.onLoadFinish),Handler.create(this,this.onLoadAction));
    }

    private onLoadAction(loadNum : number) : void
    {
        this.load_text.text = "资源加载中，当前进度："+Math.round(loadNum*100)+"%";
    }
    private onLoadFinish() : void
    {
        this.btn_start.visible = true;
        this.load_text.text = "资源加载完成，开始游戏吧";
        Laya.Tween.from(this.btn_start,{y : this.btn_start.y + 20},1000,Laya.Ease.elasticOut);
    }
    private onClose() : void
    {
        this.removeSelf();
        this.destroy();
    }
}