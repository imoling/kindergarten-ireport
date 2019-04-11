<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <div class="content-row">
      <div>
        <img
          class="choose-type"
          src="~@/assets/image/tqtj/tjtq-biao.png"
          height="699px"
          width="797px"
        >
      </div>
      <div>
        <div class="tq-report-grid">
          <div class="tq-report-type-grid"></div>
          <div class="tq-report-flag"></div>
          <div class="tq-report-type-num"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//   import SystemInformation from './LandingPage/SystemInformation'

export default {
  name: "third-page",
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].setAttribute("class", "tqbg");
  },
  beforeDestroy: function() {
    document.body.removeAttribute("class", "tqbg");
  },
  methods: {
    backStart() {
      this.$router.push("/");
    },
    next() {
      this.$router.push("/fourth");
    }
  }
};
</script>

<style>
.tqbg {
  background-image: url("~@/assets/image/tqtj/tjtq-bj.png");
}

.tq-report-grid {
  display: flex;
  flex-direction: row;
  padding: 0 0;
}
.tq-report-type-grid {
  width: 176px;
  height: 352px;
  background-image: url("~@/assets/image/tqtj/tjtq-kuang2.png");
  background-size: 100%;
}

.tq-report-flag{
  width: 49px;
  height: 42px;
  background-image: url("~@/assets/image/tqtj/tjtq-sjx.png");
  background-size: 100%;
  align-self: center;
}
.tq-report-type-num{
  width: 116px;
  height: 346px;
  background-image: url("~@/assets/image/tqtj/tjtq-kuang.png");
  background-size: 100%;
  align-self: center;
}
</style>
