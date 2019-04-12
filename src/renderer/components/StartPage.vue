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
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  height: 95%;
}

.content-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-wrap: wrap;
}
html,
body,
#app {
  height: 100%;
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
.content-column-p-1015 {
  padding: 10px 15px;
}
.img-item-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.img-item-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.img-item-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.mainStart {
  display: flex;
  flex-direction: column;
  padding: 60px 80px;
}

.top-side {
  text-align: center;
}

.bottom-side {
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

.tqbg {
  background-image: url("~@/assets/image/tqtj/tjtq-bj.png");
}
.width60 {
  width: 60px;
}

.tq-report-grid {
  display: flex;
  flex-direction: row;
  padding: 0 0;
}
.tq-report-type-grid {
  width: 140px;
  height: 280px;
  /* width: 176px;
  height: 352px; */
  background-image: url("~@/assets/image/tqtj/tjtq-kuang2.png");
  background-size: 100%;
  display: flex;
  flex-direction: row;
}

.tq-report-flag {
  width: 39px;
  height: 33px;
  background-image: url("~@/assets/image/tqtj/tjtq-sjx.png");
  background-size: 100%;
  align-self: center;
}
.tq-report-type-num {
  /* width: 116px;
  height: 346px; */
  width: 80px;
  height: 276px;
  background-image: url("~@/assets/image/tqtj/tjtq-kuang.png");
  background-size: 100%;
  padding:14px 0 0px 19px;
}
.tq-rtg-choose {
  width: 63px;
  height: 66px;
}

.choose-box {
  width: 272px;
  height: 294px;
  background-image: url("~@/assets/image/main/sdlrdlw-kuang1.png");
  background-size: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: auto;
  padding: 20px;
}
.child_box {
  width: 96px;
  height: 64px;
}
.choose-type {
  align-self: flex-end;
  margin: 0px -10px;
  position: fixed;
}
.report-grid {
  display: flex;
  flex-direction: row;
  padding: 0 0;
}
.width64 {
  width: 64%;
}
.report-type-grid {
  /* width: 208px;
  height: 295px; */
  width: 166px;
  height: 236px;
  background-image: url("~@/assets/image/main/sdlrdlw-kuang2.png");
  background-size: 100%;
  display: flex;
  flex-direction: row;
}
.rtg-choose {
  width: 80px;
  height: 60px;
}
.rtg-img {
  width: 64px;
  height: 56px;
  padding: 17px 0 0 20px;
}
.tq-rtg-img {
  width: 50px;
  height: 45px;
  padding: 20px 0 0 15px;
}
.report-flag {
  width: 39px;
  height: 33px;
  background-image: url("~@/assets/image/main/sjx.png");
  background-size: 100%;
  align-self: center;
}
.report-type-num {
  width: 103px;
  height: 228px;
  background-image: url("~@/assets/image/main/sdlrdlw-kuang3.png");
  background-size: 100%;
  align-self: center;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
}

.report-type-num img {
  width: 52px;
  height: 52px;
  padding: 15px 0 5px 27px;
}

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
  margin: 210px 300px 15px 150px;
  height: 100%;
}
</style>
