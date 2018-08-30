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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var EffectAnimation = laya.display.EffectAnimation;
var ui;
(function (ui) {
    var page;
    (function (page) {
        var backgroundUI = /** @class */ (function (_super) {
            __extends(backgroundUI, _super);
            function backgroundUI() {
                return _super.call(this) || this;
            }
            backgroundUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("page/background");
            };
            return backgroundUI;
        }(View));
        page.backgroundUI = backgroundUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
(function (ui) {
    var page;
    (function (page) {
        var ListPageUI = /** @class */ (function (_super) {
            __extends(ListPageUI, _super);
            function ListPageUI() {
                return _super.call(this) || this;
            }
            ListPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("page/ListPage");
            };
            return ListPageUI;
        }(View));
        page.ListPageUI = ListPageUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
(function (ui) {
    var page;
    (function (page) {
        var loginUI = /** @class */ (function (_super) {
            __extends(loginUI, _super);
            function loginUI() {
                return _super.call(this) || this;
            }
            loginUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("page/login");
            };
            return loginUI;
        }(View));
        page.loginUI = loginUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
(function (ui) {
    var page;
    (function (page) {
        var stageUI = /** @class */ (function (_super) {
            __extends(stageUI, _super);
            function stageUI() {
                return _super.call(this) || this;
            }
            stageUI.prototype.createChildren = function () {
                View.regComponent("game.StageMng", game.StageMng);
                View.regComponent("obj.Brick", obj.Brick);
                View.regComponent("obj.Tank", obj.Tank);
                View.regComponent("obj.Bullet", obj.Bullet);
                _super.prototype.createChildren.call(this);
                this.loadUI("page/stage");
            };
            return stageUI;
        }(Dialog));
        page.stageUI = stageUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map