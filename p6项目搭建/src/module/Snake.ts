class Snake{
    head:HTMLElement;
    bodies:HTMLCollection;
    element:HTMLElement;
    constructor(){
        // querySelector只取一个 若有多个则取第一个
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')
    }
    
    // 获取坐标 蛇头
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    
    set X(value:number){
        if(this.X==value) {
            return
        }
        // 合法值
        if(value<0||value>290){
            throw new Error('蛇撞墙了')
        }

        // 修正调头事件
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft == value){
            if(value >this.X){
                value = this.X - 10
            }else{
                value = this.X + 10
            }
        }

        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }
    set Y(value:number){
        if(this.Y==value){
            return;
        }
        if(value<0||value>290){
            throw new Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop == value){
            if(value >this.Y){
                value = this.Y- 10
            }else{
                value = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }

    addBody(){
        // 添加元素
        const div = document.createElement('div')
        // this.element.insertAdjacentElement('beforeend','<div></div>')
        this.element.insertAdjacentElement('beforeend',div)
    }
    moveBody(){
        // 将身后的身体设为前面的位置 从后往前设置
        for(let i = this.bodies.length-1;i>0;i--){
            let x =(this.bodies[i-1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i-1] as HTMLElement).offsetTop;
            
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }
    checkHeadBody(){
        // 获取所有的身体缉检查其是否和蛇头的坐标重叠
        for(let i = 4;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement
            if(this.X == bd.offsetLeft && this.Y == bd.offsetTop){
                throw new Error('撞到自己了')
            }
        }
    }


}

export default Snake
