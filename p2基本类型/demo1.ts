 let isdone:boolean = false;
 let num1:number = 6
 let username:string = 'hello';
 let person:string = `my name is ${username}`;
 let list:number[]=[1,2,3]
 let list3:string[] = ['a','1']
 let lsit2:Array<number> = [1,2,3]
 let list2:Array<number|string> = [1,'2t']
 let list4:[string|number] = [22]
 let c = 0;
 c = 9;
 function sum1(a:number,b:number){
    return a+b
 }
 sum1(1,2);
 sum1(123,456);

 let  x:[string,number];
 x = ['hello',20];
 console.log(x);
// x[3]  = 6;
// x[5]  = true
// x[4] = 'test3'
// console.log(x[5].toString());

// 枚举
 enum Color {red,green,blue}
 let d:Color = Color.green
 console.log(d);
 
//  any
let nosure:any = 4
nosure.ifItExists()
nosure.toFixed()
// let prettySure:object = 4  //error  Property 'toFixed' does not exist on type 'object'.
// prettySure.toFixed()

let list1:any[] =[12,true,'false']
list1[1]=100

// void
let userless:void = undefined
console.log(userless);

// let userless2:void = null
// console.log(userless2);

// undefined 和 null

let u:undefined = undefined
let  n:null = null
let n1:null=null;
// n1 = true
console.log(u,n,n1);

// never
// 没看明白

// 类型断言
let  someValue:any= 'this is a sting'
// let strlength:number = (<string>someValue).length
let strlength:number =(someValue as string).length
// let str2 = (num1 as string).length



