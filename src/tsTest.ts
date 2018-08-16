/*
* name;
*/
class tsTest{
    constructor(){
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

        enum Color {Red = 1,Green = 2};
        let color : Color = Color.Red;
        let c2 : string = Color[2];
        let ay : any = "false";
        ay.substr();
        let unuse : void = null;

        let someValue : any = "some value";
        let len : number = (<string>someValue).length;
        let len2 : number = (someValue as string).length;
    }

    private getStock()
    {
        return {
            name : "abc",
            age : 18,
            son : {one:"a",two:"b"},
            arr : [1,2,"arr"]
        }
    }

    private *getStockPrice(stock){
        while(true)
        {
            yield Math.random()*100;
        }
    }

    private *testGenerator()
    {
        console.log("xxx1");
        yield;
        console.log("xxx2");
    }

    private testFunc(a:string,b:"bbb",c?:string):void
    {
        console.log(a);
        console.log(b);
        console.log(c);
    }

    private testArgsFunc(...args) : void
    {
        args.forEach(function(arg)
        {
            console.log(arg);
        })
    }

    private myname:string = "dc";
    private getName():string
    {
        return "get dc";
    }
    private testString() : void
    {
        console.log(`<div>
        <span>${this.myname}</span>
        <span>${this.getName()}</pan>
        <div>xxx</div>
        </div>
        `);
    }
    private testString2(a:string,b:string,c:string):void
    {
        console.log(a);
        console.log(b);
        console.log(b);
    }
    
}
new tsTest();