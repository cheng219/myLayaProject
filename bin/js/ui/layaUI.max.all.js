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
    var efc;
    (function (efc) {
        var scaleUI = /** @class */ (function (_super) {
            __extends(scaleUI, _super);
            function scaleUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.efc.scaleUI.uiView;
                return _this;
            }
            scaleUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "skin": "comp/image.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 1 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 1 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return scaleUI;
        }(EffectAnimation));
        efc.scaleUI = scaleUI;
    })(efc = ui.efc || (ui.efc = {}));
})(ui || (ui = {}));
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
                this.createView(ui.page.backgroundUI.uiView);
            };
            backgroundUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Image", "props": { "width": 1136, "skin": "comp/bg.png", "height": 640, "sizeGrid": "26,4,4,4" } }, { "type": "Button", "props": { "y": 89, "x": 129, "var": "openBtn", "stateNum": 1, "skin": "ui/qt221.png" } }] };
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
                this.createView(ui.page.ListPageUI.uiView);
            };
            ListPageUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": -6, "x": -18, "width": 618, "skin": "ui/qt228.png", "height": 398, "sizeGrid": "5,5,5,5" } }, { "type": "List", "props": { "y": 13, "x": 10, "width": 574, "var": "_list", "height": 313 }, "child": [{ "type": "Box", "props": { "renderType": "render" }, "child": [{ "type": "Image", "props": { "width": 574, "skin": "ui/qt229.png", "height": 45, "sizeGrid": "4,4,4,4" } }, { "type": "CheckBox", "props": { "y": 10, "x": 524, "width": 27, "stateNum": 3, "skin": "comp/checkbox.png", "name": "listCheck", "height": 24 } }, { "type": "Label", "props": { "y": 13, "x": 19, "width": 32, "text": "1", "name": "listNumber", "height": 22, "fontSize": 20 } }, { "type": "Label", "props": { "y": 13, "x": 161, "width": 164, "text": "1", "name": "listName", "height": 22, "fontSize": 20 } }] }] }, { "type": "Button", "props": { "y": 352, "x": 93, "width": 90, "var": "add", "stateNum": 1, "skin": "ui/qt281.png", "labelStroke": 0, "labelSize": 20, "labelBold": true, "label": "添加", "height": 30, "sizeGrid": "4,10,4,10" } }, { "type": "Button", "props": { "y": 357, "x": 284, "width": 90, "var": "del", "skin": "ui/qt281.png", "labelSize": 20, "labelBold": true, "label": "删除", "height": 30, "sizeGrid": "4,10,4,10" } }, { "type": "Button", "props": { "y": -4, "x": 564, "width": 36, "var": "close", "stateNum": 1, "skin": "ui/close.png", "labelSize": 20, "labelBold": true, "height": 33 } }] };
            return ListPageUI;
        }(View));
        page.ListPageUI = ListPageUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
(function (ui) {
    var page;
    (function (page) {
        var testUI = /** @class */ (function (_super) {
            __extends(testUI, _super);
            function testUI() {
                return _super.call(this) || this;
            }
            testUI.prototype.createChildren = function () {
                View.regComponent("ui.scaleUI", ui.scaleUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.page.testUI.uiView);
            };
            testUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 200, "x": 300, "width": 600, "skin": "ui/qt228.png", "height": 400, "anchorY": 0.5, "anchorX": 0.5, "sizeGrid": "5,5,5,5" } }, { "type": "Image", "props": { "y": 4, "skin": "ui/close.png", "right": 7, "height": 40 } }, { "type": "Image", "props": { "x": 242, "width": 146, "skin": "ui/qt279.png", "mouseEnabled": true, "height": 49, "bottom": 14 }, "compId": 5, "child": [{ "type": "Label", "props": { "y": 11, "x": 19, "width": 104, "text": "按钮", "height": 31, "fontSize": 20, "color": "#0b0a0a", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 12, "x": 22, "width": 105, "var": "button1", "height": 25 } }, { "type": "Script", "props": { "runtime": "ui.scaleUI" } }] }, { "type": "List", "props": { "y": 35, "x": 58, "width": 375, "height": 237 }, "child": [{ "type": "List", "props": { "renderType": "render" }, "child": [{ "type": "Image", "props": { "width": 375, "skin": "template/Search/search bar_blue.png", "height": 62 } }, { "type": "Button", "props": { "y": 12, "x": 318, "skin": "template/Search/btn_search_close.png" } }, { "type": "Button", "props": { "y": 22, "x": 37, "width": 30, "skin": "template/Search/btn_search_icon.png", "height": 20 } }, { "type": "Label", "props": { "y": 10, "x": 79, "width": 155, "text": "Text", "skin": "template/Search/label.png", "height": 28, "fontSize": 36, "align": "left" } }] }] }], "animations": [{ "nodes": [{ "target": 5, "keyframes": { "anchorY": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "anchorY", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "anchorY", "index": 1 }], "anchorX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "anchorX", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "anchorX", "index": 1 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return testUI;
        }(View));
        page.testUI = testUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map