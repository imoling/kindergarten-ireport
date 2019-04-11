<template>
  <div class="mainStart">
    <div class="top-side">
        <img src="~@/assets/image/title.png" width="902px" height="500px">
    </div>

    <div class="bottom-side">
      <button @click="goMain"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "start-page",
  components: {},
  methods: {
    goMain() {
      this.$router.push("/first");
    }
  }
};
</script>

<style>
body {
  background-image: url("~@/assets/image/background.png");
  background-size: 100%;
}

.mainStart {
  display: flex;
  flex-direction: column;
  padding: 60px 80px;
}

.top-side {
  text-align: center;
}

.bottom-side{
  text-align: center;
  padding: 20px;
}

.bottom-side button {
  cursor: pointer;
  background-image: url("~@/assets/image/btn-start.png");
  width: 168px;
  height: 86px;
  background-color: transparent;
  border: 0px;
}
</style>
