// :参数类型 :返回值类型
function fn(a:number):number{
    return a
}
//any 会关闭ts的类型检查
function fn1(a:any):any{
    return a
}

// 泛型 <variable> 定义函数或类时 遇到类型不明确的 
function fn2<T>(a:T):T{
    return a
}
fn2(10)
fn2<string>('heelo') //指定泛型
console.log(fn2<string>('heelo'));

function fn3<T,K>(a:T,b:K):T{
    return  a
}
console.log(fn3(12,'test'));

interface inter{
    length:number
}
// 泛型的继承 T extends Inter  表示泛型必须时inter实现类
function fn4<T extends inter>(a:T):number{
    return a.length
}
console.log(fn4('stringlength12212'));

class myClass<T>{
    constructor(name:T){

    }
}
// const mc = new myClass('test')
const mc = new myClass<string>('test')
