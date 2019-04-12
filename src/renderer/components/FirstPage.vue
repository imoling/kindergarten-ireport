<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
      <div class="content-row btm-margin-60">
        <img class="child_box" src="~@/assets/image/main/jt1.png" />
        <img class="child_box" src="~@/assets/image/main/sw1.png" />
        <img class="child_box" src="~@/assets/image/main/jt2.png" />
        <img class="child_box" src="~@/assets/image/main/yf1.png" />
        <img class="child_box" src="~@/assets/image/main/yf2.png" />
        <img class="child_box" src="~@/assets/image/main/sw2.png" />
        <img class="child_box" src="~@/assets/image/main/jt3.png" />
        <img class="child_box" src="~@/assets/image/main/sw3.png" />
        <img class="child_box" src="~@/assets/image/main/jt4.png" />
        <img class="child_box" src="~@/assets/image/main/yf3.png" />
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

  
</style>
