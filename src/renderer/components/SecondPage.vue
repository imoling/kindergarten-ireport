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
              <img src="~@/assets/image/main/sdlrdlw-tubiao4.png" class="rtg-img" />
              <img src="~@/assets/image/main/sdlrdlw-tubiao5.png" class="rtg-img"/>
              <img src="~@/assets/image/main/sdlrdlw-tubiao6.png" class="rtg-img"/>
            </div>
            <div class="content-row">
              <div class="rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
              <div class="rtg-choose" @drop="drop($event)" @dragover="allowDrop($event)"></div>
            </div>
          </div>
          <div class="report-flag"></div>
          <div class="report-type-num">
            <img src="~@/assets/image/main/3.png" width="65px" height="65px" draggable="true" @dragstart="drag($event)">
            <img src="~@/assets/image/main/3.png" width="65px" height="65px" draggable="true" @dragstart="drag($event)">
            <img src="~@/assets/image/main/4.png" width="65px" height="65px" draggable="true" @dragstart="drag($event)">
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
.choose-box {
  width: 340px;
  height: 368px;
  background-image: url("~@/assets/image/main/sdlrdlw-kuang1.png");
  background-size: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: auto;
}
.child_box {
  width: 120px;
  height: 80px;
  padding: 20px;
}
.choose-type {
  align-self: flex-end;
  margin: -20px 6px;
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
  width: 208px;
  height: 295px;
  background-image: url("~@/assets/image/main/sdlrdlw-kuang2.png");
  background-size: 100%;
  display: flex;
  flex-direction: row;
}
.rtg-choose {
  width: 102px;
  height: 90px;
  padding: 15px 0 0 0;
}
.rtg-img{
  width: 80px;
  height: 70px;
  padding: 22px 0 0 22px;

}
.report-flag {
  width: 49px;
  height: 42px;
  background-image: url("~@/assets/image/main/sjx.png");
  background-size: 100%;
  align-self: center;
}
.report-type-num {
  width: 129px;
  height: 286px;
  background-image: url("~@/assets/image/main/sdlrdlw-kuang3.png");
  background-size: 100%;
  align-self: center;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
}

.report-type-num img {
  width: 65px;
  height: 65px;
  padding: 20px 0 5px 30px;
}
</style>
