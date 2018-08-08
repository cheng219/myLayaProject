/*
* name;
*/
class tsTest{
    constructor(){
        //this.testFunc("aaa","bbb");
        //this.testArgsFunc(1,2,3,4,"s5");
        //var arr = [6,7,8,"s9"];
        //this.testArgsFunc(...arr);
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
}
new tsTest();