var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var Handler = laya.utils.Handler;
var Loader = Laya.Loader;
var LoginWnd = /** @class */ (function (_super) {
    __extends(LoginWnd, _super);
    function LoginWnd() {
        var _this = _super.call(this) || this;
        _this.btn_start.visible = false;
        Laya.loader.load([{ url: "sound/add.wav", type: Loader.SOUND },
            { url: "sound/start.wav", type: Loader.SOUND },
            { url: "sound/hit.wav", type: Loader.SOUND },
            { url: "sound/blast.wav", type: Loader.SOUND },
            { url: "sound/fire.wav", type: Loader.SOUND }], Handler.create(_this, _this.onLoadFinish), Handler.create(_this, _this.onLoadAction));
        return _this;
    }
    LoginWnd.prototype.onLoadAction = function (loadNum) {
        this.load_text.text = "资源加载中，当前进度：" + Math.round(loadNum * 100) + "%";
    };
    LoginWnd.prototype.onLoadFinish = function () {
        this.btn_start.visible = true;
        this.load_text.text = "资源加载完成，开始游戏吧";
        Laya.Tween.from(this.btn_start, { y: this.btn_start.y + 20 }, 1000, Laya.Ease.elasticOut);
    };
    LoginWnd.prototype.onClose = function () {
        this.removeSelf();
        this.destroy();
    };
    return LoginWnd;
}(ui.page.loginUI));
//# sourceMappingURL=LoginWnd.js.map