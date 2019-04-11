<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <div class="content-row">
      
        <img
          src="~@/assets/image/tjzyda/1.jpeg"
          width="400px"
          height="600px"
          @click="clickImg($event)"
        >
        <!-- 放大图片 -->
        <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
      
      
        <img
          src="~@/assets/image/tjzyda/2.jpeg"
          width="400px"
          height="600px"
          @click="clickImg($event)"
        >
     
        <img
          src="~@/assets/image/tjzyda/3.jpeg"
         width="400px"
          height="600px"
          @click="clickImg($event)"
        >
   
    </div>
  </div>
</template>

<script>
import BigImgComponent from "./plugins/BigImgComponent";

export default {
  name: "fifth-page",
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
    next(){
      this.$router.push("/sixth");
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
<style >
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
.content-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-wrap: wrap;
}
</style>
