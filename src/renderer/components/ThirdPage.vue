<template>
  <div id="wrapper">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <main>
      <div>This is 3rd Page! 折页统计天气预报情况</div>
    </main>
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
</style>
