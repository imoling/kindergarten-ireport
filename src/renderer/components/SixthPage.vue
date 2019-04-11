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
.container {
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
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
.content-column div {
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
}
.img-item-left {
  justify-content: flex-start;
}
.img-item-center {
  justify-content: center;
}
.img-item-right {
  justify-content: flex-end;
}
</style>
