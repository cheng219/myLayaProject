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
var game;
(function (game) {
    var GameStage = /** @class */ (function (_super) {
        __extends(GameStage, _super);
        function GameStage() {
            var _this = _super.call(this) || this;
            _this.bricks = [];
            return _this;
        }
        GameStage.CreateNew = function () {
            if (game.GameCenter.gameStage == null) {
                game.GameCenter.gameStage = new GameStage();
            }
            else {
                game.GameCenter.gameStage.UnRegist();
                game.GameCenter.gameStage.Regist();
            }
            return game.GameCenter.gameStage;
        };
        GameStage.prototype.Regist = function () {
        };
        GameStage.prototype.UnRegist = function () {
            this.bricks = [];
        };
        GameStage.prototype.AddBrick = function (brick) {
            this.bricks.push(brick);
        };
        return GameStage;
    }(game.StageBase));
    game.GameStage = GameStage;
})(game || (game = {}));
//# sourceMappingURL=GameStage.js.map