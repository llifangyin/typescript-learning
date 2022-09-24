let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let {a,b}:{a:string,b:number}=o

// 变量声明

// 常量声明   
let d:10;
// console.log(d);
// d =11

let e:true|false
e = false
console.log(e);

// any
// 相当于关闭的ts的类型检测 可以互相赋值 污染其他类型

let f:any;
f =10;f='string';

let g;//隐式any

//  unknown
let e1:unknown;
e1 = 10;e1=true;

let s:string;
s = f;//any

// any可以赋值给其他类型
// s = e1  //不能将unknow类型分配给string 
// unknown 实际上是一个安全的any
// 用法 unknow > any
// 类型断言
// s = e1 as string;
s = <string>e1;


// void  never
// void表示空 函数为例，没有返回值的函数 
function fn():void{
    // if(num>0){
    //     return true;
    // }else{
    //     return 123;
    // }
}

function f1(){
    // return undefined
}
// never永远不会有返回值
function f2():never{
    throw new Error('suprise')

}


// Object

let obj:object;
obj = {}
obj = function(){}

// 主要限制属性，不限制对象类型
let b1:{name:string,age?:number,[xxx:string]:any}
// ?: 表示属性可选
b1 ={name:'test'}
b1  = {name:'ddd',d:'dd',t:10}
// [xxx:string]:any  任意类型的属性

// let d:Function
let d2:(a:number,b:number)=>number;
d2 = function (n1:number,n2:number):number{
    return n1+n2
}

//函数类型声明 （形参：类型，...）=》
let d3:(a:number,b:number)=>number;
d3 = function (n1:number,n2:number):number{
    return n1+n2
}

// 数组 
// 字符串数组
let list:string[] =['2','33']
let list1:number[]=[3]
let list2:Array<number>
list2=[3,4]


// tuple
// 元组 固定长度已知类型的数组
let h:[string,string]
h=['heelo','abc']

// enum
// 枚举 
enum Gender{
    male = 0,
    female=1
}
let i:{name:string,gender:Gender}
i ={name:'stet',gender:Gender.male}
console.log(i.gender=== Gender.male);



// 属性连接 &
let j:string|number;
j = 0
let k:{name:string}&{age:number}
k = {name:'test',age:2}

// 类型别名  type

let l:1|2|3
let m1|2|3
type myType = 1|2|3|4|5

let io:myType;
// io=9
io=3