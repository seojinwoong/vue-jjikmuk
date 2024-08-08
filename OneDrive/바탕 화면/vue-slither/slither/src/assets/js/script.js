export default {
  get: (target) => {
    document.querySelector(target)
  },
  $canvas: this.get('.canvas'),
  ctx: this.$canvas.getContext('2d'),
  $score: this.get('.score'),
  $highscore: this.get('.highscore'),
  $play: this.get('.js-play'),
  colorSet: {
    board: 'rgb(20, 105, 38)',
    snakeHead: 'rgba(229, 65, 120, 0.929)',
    snakeBody: 'rgba(153, 206, 244, 0.498)',
    food: 'rgb(66, 187, 103)'
  },
  start: 0,
  option: {
    highscore: localStorage.getItem('score') || 0,
    gameEnd: true,
    direction: 2,
    snake: [
      {x: 10, y:10, directio:2},
      {x: 10, y:20, directio:2},
      {x: 10, y:30, directio:2},
    ],
    food: { x: 0, y: 0 },
    score: 0
  },
  init: () => {
    this.$play.onclick = () => {
      if (this.option.gameEnd) {
        this.option = {
          highscore : localStorage.getItem('score') || 0,
          gameEnd: false,
          direction: 2,
          snake: [
            {x: 10, y:10, directio:2},
            {x: 10, y:20, directio:2},
            {x: 10, y:30, directio:2},
          ],
          food: { x: 0, y: 0 },
          score: 0
        }

        this.$score.innerHTML = `점수 : 0점`
        this.$highscore.innerHTML = `최고점수 : ${this.option.highscore}점`
        // randomFood()

        window.requestAnimationFrame(this.play)
      }
    }
  },
  buildBoard: () => {
    this.ctx.fillStyle = this.colorSet.board
    this.ctx.fillRect(0, 0, 300, 300)
  },
  buildSnake: (ctx, x, y, head = false) => {
    ctx.fillStyle = head ? this.colorSet.snakeHead : this.colorSet.snakeBody
    ctx.fillRect(x, y, 10, 10)
  },
  buildFood: (ctx, x, y) => {
    ctx.beginPath()
    ctx.fillStyle = this.colorSet.food
    ctx.arc(x+5,y+5, 5, 0, 2 * Math.PI)
    ctx.fill()
  },
  setSnake: () => {
    for(let i = this.option.snake.length - 1; i >=0; --i) {
      this.buildSnake(this.ctx, this.option.snake[i].x, this.option.snake[i].y, i === 0)
    }
  },
  play: (timestamp) => {
    this.start++
    if (this.option.gameEnd) {
      return
    }

    if (timestamp - this.start > 1000 / 10) {
      this.buildBoard()
      this.buildFood(this.ctx, this.option.food.x, this.option.food.y)
      this.setSnake()
      this.start = timestamp
    }

    window.requestAnimationFrame(this.play)
  }
}