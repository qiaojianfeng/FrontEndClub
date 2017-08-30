export default {
  drawCanvas() {
    var canvas = this.$refs.canvas;
    //获取绘图上下文
    var ctx = canvas.getContext("2d");
    //定义生产点数
    var POINT = 30;
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    var circleArr = [];
    // 设置全屏canvas
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx.strokeStyle = '#FFF';
    ctx.strokeWidth = 1;
    ctx.fillStyle = 'rgba(255,255,255,.6)';

    /**
     * 构建线条
     * 
     * @param {any} x 开始x
     * @param {any} y 开始y
     * @param {any} _x 结束x
     * @param {any} _y 结束y
     * @param {any} opacity 透明度
     */
    function Line(x, y, _x, _y, opacity) {
      this.beginX = x;
      this.beginY = y;
      this.closeX = _x;
      this.closeY = _y;
      this.opacity = opacity;
    }
    /**
     * 构建圆点
     * 
     * @param {any} x 原点坐标x
     * @param {any} y 原点坐标y
     * @param {any} r 半径
     * @param {any} stepX 移动步长水平
     * @param {any} stepY 移动步长垂直
     */
    function Circle(x, y, r, stepX, stepY) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.stepX = stepX;
      this.stepY = stepY;
    }
    /**
     * 生成Max 到min 之间的随机数
     * 
     * @param {any} max 
     * @param {any} min 
     */

    function randomNum(max, _min) {
      var min = _min || 0;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    /**
     * 绘制原点
     * 
     * @param {any} ctx 
     * @param {any} x 
     * @param {any} y 
     * @param {any} r 
     * @param {any} moveX 
     * @param {any} moveY 
     * @returns 
     */
    function drawCricle(ctx, x, y, r, moveX, moveY) {
      var circle = new Circle(x, y, r, moveX, moveY);
      ctx.beginPath()
      ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fill();
      return circle;
    }
    /**
     * 绘制线条
     * 
     * @param {any} ctx 
     * @param {any} x 
     * @param {any} y 
     * @param {any} _x 
     * @param {any} _y 
     * @param {any} o 
     */

    function drawLine(ctx, x, y, _x, _y, o) {
      var line = new Line(x, y, _x, _y, o)
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(255,255,255,' + o + ')'
      ctx.moveTo(line.beginX, line.beginY)
      ctx.lineTo(line.closeX, line.closeY)
      ctx.closePath()
      ctx.stroke();

    }
    //每帧绘制
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < POINT; i++) {
        drawCricle(ctx, circleArr[i].x, circleArr[i].y, circleArr[i].r);
      }

      for (var i = 0; i < POINT; i++) {
        for (var j = 0; j < POINT; j++) {
          if (i + j < POINT) {
            var A = Math.abs(circleArr[i + j].x - circleArr[i].x),
              B = Math.abs(circleArr[i + j].y - circleArr[i].y);
            var lineLength = Math.sqrt(A * A + B * B);
            var C = 1 / lineLength * 7 - 0.009;
            var lineOpacity = C > 0.07 ? 0.07 : C;
            if (lineOpacity > 0) {
              drawLine(ctx, circleArr[i].x, circleArr[i].y, circleArr[i + j].x, circleArr[i + j].y, lineOpacity);
            }
          }
        }
      }
    }
    //初始化生成原点
    function init() {
      for (var i = 0; i < POINT; i++) {
        var v = drawCricle(ctx, randomNum(WIDTH), randomNum(HEIGHT), randomNum(15, 2), randomNum(10, -10) / 40, randomNum(10, -10) / 40)
        circleArr.push(v);
      }
      draw();
    }
    //调用执行
    init();
    setInterval(function () {
      for (var i = 0; i < POINT; i++) {
        var cir = circleArr[i];
        cir.x += cir.stepX;
        cir.y += cir.stepY;
        if (cir.x > WIDTH) cir.x = 0;
        else if (cir.x < 0) cir.x = WIDTH;
        if (cir.y > HEIGHT) cir.y = 0;
        else if (cir.y < 0) cir.y = HEIGHT;
      }
      draw();
    }, 10);

  }
}
