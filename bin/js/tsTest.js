/*
* name;
*/
class tsTest {
    constructor() {
        this.myname = "dc";
        //this.testFunc("aaa","bbb");
        //this.testArgsFunc(1,2,3,4,"s5");
        //var arr = [6,7,8,"s9"];
        //this.testArgsFunc(...arr);
        //this.testString();
        var func = this.testGenerator();
        console.log("begin");
        func.next();
        console.log("begin1");
        func.next();
        console.log("begin2");
    }
    *testGenerator() {
        console.log("xxx1");
        yield;
        console.log("xxx2");
    }
    testFunc(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    testArgsFunc(...args) {
        args.forEach(function (arg) {
            console.log(arg);
        });
    }
    getName() {
        return "get dc";
    }
    testString() {
        console.log(`<div>
        <span>${this.myname}</span>
        <span>${this.getName()}</pan>
        <div>xxx</div>
        </div>
        `);
    }
    testString2(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(b);
    }
}
new tsTest();
//# sourceMappingURL=tsTest.js.map