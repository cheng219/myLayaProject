/*
* name;
*/
var game;
(function (game) {
    var StageBase = /** @class */ (function () {
        function StageBase() {
            this.UnRegist();
            this.Regist();
        }
        StageBase.prototype.Regist = function () {
        };
        StageBase.prototype.UnRegist = function () {
        };
        return StageBase;
    }());
    game.StageBase = StageBase;
})(game || (game = {}));
//# sourceMappingURL=StageBase.js.map