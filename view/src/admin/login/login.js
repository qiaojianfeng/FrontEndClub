export default {
    mounted() {
        this.drawCanvas();
    },
    methods: {
        //绘制背景画布的方法
        drawCanvas() {
            var canvas = this.$refs.canvas;
            //获取绘图上下文
            var ctx = canvas.getContext("2d");
        }
    }
}