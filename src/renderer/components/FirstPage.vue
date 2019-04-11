<template>
  <div id="wrapper">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <main>
      <div class="parent_box">
        这页展示所有要统计的元素
        <img class="child_box" src="~@/assets/image/main/jt1.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/sw1.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/jt2.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/yf1.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/yf2.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/sw2.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/jt3.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/sw3.png" height="85px" width="120px">
        <img class="child_box" src="~@/assets/image/main/jt4.png" height="85px" width="120px">
      </div>
    </main>
  </div>
</template>

<script>
//   import SystemInformation from './LandingPage/SystemInformation'


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
</style>
