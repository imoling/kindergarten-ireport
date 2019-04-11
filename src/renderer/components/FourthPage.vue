<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <div class="content-column">
      <div class="content-row">
        <img
          src="~@/assets/image/tjzy/1.jpeg"
          width="380px"
          height="300px"
          @click="clickImg($event)"
        >
        <!-- 放大图片 -->
        <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>

        <img
          src="~@/assets/image/tjzy/2.jpeg"
          width="380px"
          height="300px"
          @click="clickImg($event)"
        >

        <img
          src="~@/assets/image/tjzy/3.jpeg"
          width="380px"
          height="300px"
          @click="clickImg($event)"
        >
      </div>
      <div class="content-row">
        <img
          src="~@/assets/image/tjzy/4.jpeg"
          width="420px"
          height="300px"
          @click="clickImg($event)"
        >
        <img
          src="~@/assets/image/tjzy/5.jpeg"
          width="420"
          height="300px"
          @click="clickImg($event)"
        >
      </div>
 
    </div>
  </div>
</template>


<script>
import BigImgComponent from "./plugins/BigImgComponent";

export default {
  name: "fourth-page",
  data() {
    return {
      showImg: false,
      imgSrc: ""
    };
  },
  components: {
    "big-img": BigImgComponent
  },
  methods: {
    backStart() {
      this.$router.push("/");
    },
    next() {
      this.$router.push("/fifth");
    },
    clickImg(e) {
      this.showImg = true;
      // 获取当前图片地址
      this.imgSrc = e.currentTarget.src;
    },
    viewImg() {
      this.showImg = false;
    }
  }
};
</script>

<style>

</style>
