<template>
  <div>
  
  </div>
</template>
<script setup lang="ts">
// 函数是js基础 ，可以实现抽象层，模拟类，信息隐藏，模块
// ts中虽然 已支持类，命名空间和模块，但函数仍是主要定义行文的地方
// ts添加了额外的功能

// ts函数可创建有名字函数和匿名函数anonymous

// 函数类型
// 给函数定义类型 给函数本身添加返回类型 ts会自动配的返回值类型通常可省略
function add (x:number,y:number):number {
  return x + y
}
// anonymous func
// let myAdd = function(x:number,y:number):number{
let myAdd = function(x:number,y:number){
  return x + y
}

// 完整的函数类型
// 函数类型包括 参数类型和返回值类型
// 如果函数没有返回值，必须制定返回值类型为void而不能留空
// 函数中使用的捕获变量不会体现在类型里，他们是函数的隐藏状态


// 可选参数 默认值
function BuildName(firstName:string,lastName:string = 'smith'){
  return firstName + '' +lastName
}
console.log(BuildName('test1'));

// 剩余参数

function BName(firstName:string,...restOfName:string[]){
  return firstName + '•' +restOfName.join('•')
}
console.log(BName('john','lee','han'));


// this参数
// 普通调用this的类型为any this来自对象字面量里的函数表达式
// 修改的方法是提供一个显示的this参数，出现在参数列表的最前面
interface Card {
  suit:string
  card:number
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck:Deck = {
  suits:["heart","spades","clubs","diamonds"],
  cards:Array(52),
  createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            // this时dark类型的而非any
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
// console.log('card:'+pickedCard.card + 'of' +pickedCard.suit);

// 回调函数里的this参数

// 回调函数被调用时,this会被当成一个普通函数调用,this将为undefined
// 修改 首先.库函数作者要指定this类型
interface UIElement{
  addClickListener(onclick:(this:void,e:Event) => void):void
}

// 给调用函数的this添加类型注解
class Handler{
  info!: string;
  // onClickBad(this:Handler,e:Event){
  //   this.info = e.message
  // }
  // onClickGood(this:void,e:Event){
      // this.info = e.message
  // }
    onClickGood = (e:Event) =>{
      console.log(e);
      // this.info = e.message
    }
}
// let h = new Handler()
// uiElement.addClickListener(h.onClickGood)




// 重载
// 为同一个函数提供多个函数类型定义进来函数重载，编译器会根据不停类型去处理函数的调用

function loadFun(x:{suit:string;card:number}[]):number;
function loadFun(x:number):{suit:string;card:number}
function loadFun(x):any{
  
}

</script>

<style>

</style>