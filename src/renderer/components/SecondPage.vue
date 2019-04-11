<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <div class="content-column">
      <div class="content-row">
        <div class="choose-box">
          <img
            class="choose-type"
            src="~@/assets/image/main/sdlrdlw-tubiao1.png"
            height="112px"
            width="126px"
          >
        </div>
        <div class="choose-box">
          <img
            class="choose-type"
            src="~@/assets/image/main/sdlrdlw-tubiao2.png"
            height="112px"
            width="126px"
          >
        </div>
        <div class="choose-box">
          <img
            class="choose-type"
            src="~@/assets/image/main/sdlrdlw-tubiao3.png"
            height="112px"
            width="126px"
          >
        </div>
      </div>
      <div>
        <div class="content-row">
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
        <div class="report-grid">
          <div class="report-type-grid"></div>
          <div class="report-flag"></div>
          <div class="report-type-num"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
.choose-box {
  width: 340px;
  height: 368px;
  background-image: url("~@/assets/image/main/sdlrdlw-kuang1.png");
  background-size: 100%;
}
.choose-type {
  align-self: flex-end;
}
.report-grid {
  display: flex;
  flex-direction: row;
  padding: 0 0;
}
.report-type-grid {
  width: 208px;
  height: 295px;
  background-image: url("~@/assets/image/main/sdlrdlw-kuang2.png");
  background-size: 100%;
}

.report-flag{
  width: 49px;
  height: 42px;
  background-image: url("~@/assets/image/main/sjx.png");
  background-size: 100%;
  align-self: center;
}
.report-type-num{
  width: 129px;
  height: 286px;
  background-image: url("~@/assets/image/main/sdlrdlw-kuang3.png");
  background-size: 100%;
  align-self: center;
}
</style>
