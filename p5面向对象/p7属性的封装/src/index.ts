(function(){
    class person{
        // 可以在属性前添加属性修饰符 
        public _name:string //公共的，修饰的属性，可以任意修改 默认值
        private _age:number //私有属性 只能内部访问 修改 通过类中添加方法 可以被外部访问
        constructor(name:string,age:number){
            this._name = name
            this._age = age
        }
        // setAge(age:number){
        //     if(age>0)
        //     this._age = age
        // }
        // getAge(){
        //     return this._age
        // }
        // ts中设置getter方法
        get name(){
            console.log('get name');
            
            return this._name
        }
        set name(val:string){
            console.log(' set name ');
            
            this._name = val
        }
    }
    const per = new person('lfy',23)
    // 属性在对象中设置 可以被任意修改 数据不安全
    // per._name = 'test'
    
    // per._age = -48 
    // per.setAge(18)
    // per.setAge(-18)
    // per.name = 'test'
    // console.log(per.getAge());
    // console.log(per.name);
    
    // 私有属性 继承的子类也无法访问
    // protected 能在当前类和子类中访问 修改
    class A{
        // private num:number
        protected num:number
        constructor(num:number){
            this.num = num
        }
    }
    class B extends A{
        test(){
            console.log(this.num);
            
        }
    }
    const b = new B(1)    
    b.test()

    // 简易写法 语法糖
    class C{
        // 直接将属性定义在构造函数中 不用定义赋值
        constructor(public name:string,protected age:number){

        }
    }
    const c = new C('xxx',11)
    console.log(c);
    

})()


