/*
* name;
*/
class tsTest {
    constructor() {
        //this.testFunc("aaa","bbb");
        //this.testArgsFunc(1,2,3,4,"s5");
        //var arr = [6,7,8,"s9"];
        //this.testArgsFunc(...arr);
        //this.testString();
        /*var func = this.testGenerator();
        console.log("begin");
        func.next();
        console.log("begin1");
        func.next();
        console.log("begin2");*/
        this.myname = "dc";
        /*var getstock = this.getStockPrice("l");
        var limitPrice:number = 14;
        var price:number = 100;
        while(price > limitPrice)
        {
            price = getstock.next().value;
            console.log(`getstock price is ${price}`);
        }*/
        /*var {name : sname,son:{one:sone},arr:sarr} = this.getStock();
        var[first,...others] = sarr;
        console.log(`name is ${sname},a son is ${sone},second is ${first} `);*/
        /*var add = (a,b)=>
        {
            return a+b;
        }
        console.log(add(2,3));
        var arr = [1,2,3,4];
        console.log(arr.filter(value => value % 2 == 0)[1]);*/
        //var arr = [1,2,3,4];
        //arr.forEach(value => console.log(value))
        //for(var v in arr)
        //{
        //    console.log(v);
        //    console.log(arr[v]);
        //}
        //for(var v of arr)
        //{
        //    console.log(v);
        //}
        //var arr : Array<number> = [1,2,3];
        //var arr : number[] = [4,5,6];
        //let yuan : [string,number];
        //yuan = ["abc",10];
        var Color;
        (function (Color) {
            Color[Color["Red"] = 1] = "Red";
            Color[Color["Green"] = 2] = "Green";
        })(Color || (Color = {}));
        ;
        let color = Color.Red;
        let c2 = Color[2];
        let ay = "false";
        ay.substr();
        let unuse = null;
        let someValue = "some value";
        let len = someValue.length;
        let len2 = someValue.length;
    }
    getStock() {
        return {
            name: "abc",
            age: 18,
            son: { one: "a", two: "b" },
            arr: [1, 2, "arr"]
        };
    }
    *getStockPrice(stock) {
        while (true) {
            yield Math.random() * 100;
        }
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