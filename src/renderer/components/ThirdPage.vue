<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <div class="content-row">
      <div>
        <img src="~@/assets/image/tqtj/tjtq-biao.png" height="699px" width="797px">
      </div>
      <div>
        <div class="tq-report-grid">
          <div class="tq-report-type-grid">
            <div class="content-column width60">
              <img src="~@/assets/image/tqtj/tjtq-tubiao1.png" class="rtg-img">
              <img src="~@/assets/image/tqtj/tjtq-tubiao2.png" class="rtg-img">
              <img src="~@/assets/image/tqtj/tjtq-tubiao3.png" class="rtg-img">
              <img src="~@/assets/image/tqtj/tjtq-tubiao4.png" class="rtg-img">
            </div>

            <div class="content-row">
              <div class="tq-rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="tq-rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="tq-rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="tq-rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
            </div>
          </div>
          <div class="tq-report-flag"></div>
          <div class="tq-report-type-num">
            <img
              src="~@/assets/image/tqtj/6.png"
              width="65px"
              height="65px"
              draggable="true"
              @dragstart="drag($event)"
            >
            <img
              src="~@/assets/image/tqtj/7.png"
              width="65px"
              height="65px"
              draggable="true"
              @dragstart="drag($event)"
            >
            <img
              src="~@/assets/image/tqtj/8.png"
              width="65px"
              height="65px"
              draggable="true"
              @dragstart="drag($event)"
            >
            <img
              src="~@/assets/image/tqtj/9.png"
              width="65px"
              height="65px"
              draggable="true"
              @dragstart="drag($event)"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//   import SystemInformation from './LandingPage/SystemInformation'
let dom = null;
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
    },
    drag: function(event) {
      dom = event.currentTarget;
    },
    drop: function(event) {
      event.preventDefault();
      event.target.appendChild(dom);
    },
    allowDrop: function(event) {
      event.preventDefault();
    }
  }
};
</script>

<style>
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
  width: 176px;
  height: 352px;
  background-image: url("~@/assets/image/tqtj/tjtq-kuang2.png");
  background-size: 100%;
  display: flex;
  flex-direction: row;
}

.tq-report-flag {
  width: 49px;
  height: 42px;
  background-image: url("~@/assets/image/tqtj/tjtq-sjx.png");
  background-size: 100%;
  align-self: center;
}
.tq-report-type-num {
  width: 116px;
  height: 346px;
  background-image: url("~@/assets/image/tqtj/tjtq-kuang.png");
  background-size: 100%;
  align-self: center;
}
.tq-rtg-choose {
  width: 60px;
  height: 70px;
  padding: 15px 0 0 0;
}
</style>
