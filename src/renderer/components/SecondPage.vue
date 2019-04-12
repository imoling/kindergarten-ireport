<template>
  <div class="container">
    <div class="toolbar">
      <button class="backbtn" @click="backStart"></button>
      <button class="nextbtn" @click="next"></button>
    </div>
    <div class="content-column">
      <div class="content-row">
        <div class="choose-box" @drop="drop($event)" @dragover="allowDrop($event)">
          <img
            class="choose-type"
            src="~@/assets/image/main/sdlrdlw-tubiao1.png"
            height="90px"
            width="100px"
          >
        </div>
        <div class="choose-box" @drop="drop($event)" @dragover="allowDrop($event)">
          <img
            class="choose-type"
            src="~@/assets/image/main/sdlrdlw-tubiao2.png"
            height="90px"
            width="100px"
          >
        </div>
        <div class="choose-box" @drop="drop($event)" @dragover="allowDrop($event)">
          <img
            class="choose-type"
            src="~@/assets/image/main/sdlrdlw-tubiao3.png"
            height="90px"
            width="100px"
          >
        </div>
      </div>
      <div class="content-row">
        <div class="content-row width64">
          <img
            class="child_box"
            src="~@/assets/image/main/jt1.png"
            draggable="true"
            @dragstart="drag($event)"
          >
          <img
            class="child_box"
            src="~@/assets/image/main/sw1.png"
            draggable="true"
            @dragstart="drag($event)"
          >
          <img
            class="child_box"
            src="~@/assets/image/main/jt2.png"
            draggable="true"
            @dragstart="drag($event)"
          >
          <img
            class="child_box"
            src="~@/assets/image/main/yf1.png"
            draggable="true"
            @dragstart="drag($event)"
          >
          <img
            class="child_box"
            src="~@/assets/image/main/yf2.png"
            draggable="true"
            @dragstart="drag($event)"
          >
          <img
            class="child_box"
            src="~@/assets/image/main/sw2.png"
            draggable="true"
            @dragstart="drag($event)"
          >
          <img
            class="child_box"
            src="~@/assets/image/main/jt3.png"
            draggable="true"
            @dragstart="drag($event)"
          >
          <img
            class="child_box"
            src="~@/assets/image/main/sw3.png"
            draggable="true"
            @dragstart="drag($event)"
          >
          <img
            class="child_box"
            src="~@/assets/image/main/jt4.png"
            draggable="true"
            @dragstart="drag($event)"
          >
          <img
            class="child_box"
            src="~@/assets/image/main/yf3.png"
            draggable="true"
            @dragstart="drag($event)"
          >
        </div>
        <div class="report-grid">
          <div class="report-type-grid">
            <div class="content-column">
              <img src="~@/assets/image/main/sdlrdlw-tubiao4.png" class="rtg-img">
              <img src="~@/assets/image/main/sdlrdlw-tubiao5.png" class="rtg-img">
              <img src="~@/assets/image/main/sdlrdlw-tubiao6.png" class="rtg-img">
            </div>
            <div class="content-row">
              <div class="rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
            </div>
          </div>
          <div class="report-flag"></div>
          <div class="report-type-num">
            <img
              src="~@/assets/image/main/3.png"
              width="52px"
              height="52px"
              draggable="true"
              @dragstart="drag($event)"
            >
            <img
              src="~@/assets/image/main/3.png"
              width="52px"
              height="52px"
              draggable="true"
              @dragstart="drag($event)"
            >
            <img
              src="~@/assets/image/main/4.png"
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
let dom = null;
export default {
  name: "second-page",
  methods: {
    backStart() {
      this.$router.push("/");
    },
    next() {
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
