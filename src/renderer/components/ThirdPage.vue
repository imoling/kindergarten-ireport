<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="refrshbtn" @click="refrsh"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <div class="content-row">
      <div>
        <img src="~@/assets/image/tqtj/tjtq-biao.png" height="560px" width="637px">
      </div>
      <div>
        <div class="tq-report-grid">
          <div class="tq-report-type-grid">
            <div class="content-column width60">
              <img src="~@/assets/image/tqtj/tjtq-tubiao1.png" class="tq-rtg-img">
              <img src="~@/assets/image/tqtj/tjtq-tubiao2.png" class="tq-rtg-img">
              <img src="~@/assets/image/tqtj/tjtq-tubiao3.png" class="tq-rtg-img">
              <img src="~@/assets/image/tqtj/tjtq-tubiao4.png" class="tq-rtg-img">
            </div>

            <div class="content-row">
              <div class="tq-rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="tq-rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="tq-rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="tq-rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
            </div>
          </div>
          <div class="tq-report-flag"></div>
          <div class="tq-report-type-num" @drop="drop($event)" @dragover="allowDrop($event)">
            <img
              src="~@/assets/image/tqtj/6.png"
              width="52px"
              height="52px"
              draggable="true"
              @dragstart="drag($event)"
            >
            <img
              src="~@/assets/image/tqtj/7.png"
              width="52px"
              height="52px"
              draggable="true"
              @dragstart="drag($event)"
            >
            <img
              src="~@/assets/image/tqtj/8.png"
              width="52px"
              height="52px"
              draggable="true"
              @dragstart="drag($event)"
            >
            <img
              src="~@/assets/image/tqtj/9.png"
              width="52px"
              height="52px"
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
    refrsh(){
       this.$router.push("/third");
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

</style>
