/*
* name;
*/
var tsTest = /** @class */ (function () {
    function tsTest() {
        this.testFunc("aaa", "bbb");
        //this.testArgsFunc(1,2,3,4,"s5");
        //var arr = [6,7,8,"s9"];
        //this.testArgsFunc(...arr);
    }
    tsTest.prototype.testFunc = function (a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    };
    tsTest.prototype.testArgsFunc = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            console.log(arg);
        });
    };
    return tsTest;
}());
new tsTest();
//# sourceMappingURL=tsTest.js.map