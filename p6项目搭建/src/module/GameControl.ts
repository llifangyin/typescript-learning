import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    isLive:boolean = true;
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        // this.init()
    }
    dirction: string = 'Right';  // 移动方向

    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        this.run()  
    }

    keyDownHandler(event: KeyboardEvent) {
        // console.log(this); //document 事件给谁绑定 this指向谁 bind创建新函数绑定this=>新的函数
        this.dirction = event.key
        // this.run()
    }
    // 控制蛇移动
    run() {
        let x = this.snake.X
        let y = this.snake.Y
        switch (this.dirction) {
            case 'ArrowUp':
            case 'Up':
                y-=10;
                break;

            case 'ArrowDown':
            case 'Down':
                y+=10;
                break;

            case 'ArrowLeft':
            case 'Left':
                x-=10;
                break;
            
            case 'ArrowRight':
            case 'Right':
                x+=10;
                break;
        }
        //吃到食物
        this.checkEat(x,y)

        // 捕获蛇撞墙
        try{
            this.snake.X = x
            this.snake.Y = y
        }catch(e){
            console.log('game over!');
            this.isLive = false
        }
        // 定时移动
        this.isLive && setTimeout(this.run.bind(this) , 300 - (this.scorePanel.level - 1)*30);
    }

    // 检查蛇吃到食物
    checkEat(x:number,y:number){
        if( x==this.food.X&&y==this.food.Y){
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }


}

export default GameControl