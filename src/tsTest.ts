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
        var func = this.testGenerator();
        console.log("begin");
        func.next();
        console.log("begin1");
        func.next();
        console.log("begin2");
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
