<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
      <div class="content-row btm-margin-60">
        <img class="child_box" src="~@/assets/image/main/jt1.png" height="140px" width="160px">
        <img class="child_box" src="~@/assets/image/main/sw1.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/jt2.png" height="160px" width="180px">
        <img class="child_box" src="~@/assets/image/main/yf1.png" height="120px" width="160px">
        <img class="child_box" src="~@/assets/image/main/yf2.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/sw2.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/jt3.png" height="120px" width="160px">
        <img class="child_box" src="~@/assets/image/main/sw3.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/jt4.png" height="100px" width="180px">
      </div>
  </div>
</template>

<script>

export default {
  name: "start-page",
  methods: {
    backStart() {
      this.$router.push("/");
    },
    next() {
      this.$router.push("/second");
      console.log("next page!!!");
    }
  }
};
</script>

<style>
.backbtn {
  cursor: pointer;
  background-image: url("~@/assets/image/btn/home_2.png");
  width: 67px;
  height: 67px;
  background-color: transparent;
  border: 0px;
}
.nextbtn {
  cursor: pointer;
  background-image: url("~@/assets/image/btn/xiafan_2.png");
  width: 67px;
  height: 67px;
  background-color: transparent;
  border: 0px;
}
.btm-margin-60 {
  margin: 380px 400px 60px 33px;
  height: 100%;
}
  
</style>
