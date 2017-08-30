import Draw from './drawCanvas';
export default {

  mounted() {
    this.drawCanvas();
  },
  methods: {
    //绘制背景画布的方法
    'drawCanvas': Draw.drawCanvas
  }
}
