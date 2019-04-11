<template>
  <div id="wrapper">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <main>
      <div>This is Second Page! 折页要展示统计的拖放区域
      </div>
      <div class="parent_box">
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
  name: "second-page",
  methods: {
    backStart() {
      this.$router.push("/");
    },
    next() {
      this.$router.push("/third");
    }
  }
};
</script>

<style>

</style>
