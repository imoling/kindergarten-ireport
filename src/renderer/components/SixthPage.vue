<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
    </div>
    <div class="content-column">
      <div class="img-item-left">
        <img
          src="~@/assets/image/cjtj/1.jpg"
          width="360px"
          height="200px"
          @click="clickImg($event)"
        >
        <!-- 放大图片 -->
        <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
      </div>
      <div class="img-item-center">
        <img
          src="~@/assets/image/cjtj/2.jpg"
          width="360px"
          height="200px"
          @click="clickImg($event)"
        >
      </div>
      <div class="img-item-right">
        <img
          src="~@/assets/image/cjtj/3.jpg"
          width="360px"
          height="200px"
          @click="clickImg($event)"
        >
      </div>
    </div>
  </div>
</template>

<script>
import BigImgComponent from "./plugins/BigImgComponent";

export default {
  name: "sixth-page",
  data() {
    return {
      showImg: false,
      imgSrc: "",
      winHight:"580px"
    };
  },
  components: {
    "big-img": BigImgComponent
  },
  methods: {
    backStart() {
      this.$router.push("/");
    },
    clickImg(e) {
      this.showImg = true;
      // 获取当前图片地址
      this.imgSrc = e.currentTarget.src;
    },
    viewImg() {
      this.showImg = false;
    },
     mounted() {
    // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
    this.winHight = `${document.documentElement.clientHeight}px`;
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    const that = this;
    window.onresize = function temp() {
      that.winHight = `${document.documentElement.clientHeight}px`;
    };
  },
  }
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  height: 100%;
}
html,body,#app{
  height: 98%;
}
.toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.content-column {
  display: flex;
  flex-direction: column;
}
.content-column-p-1015 {
  padding: 10px 15px; 
}
.img-item-left {
   display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.img-item-center {
   display: flex;
  flex-direction: row;
  justify-content: center;
}
.img-item-right {
   display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
