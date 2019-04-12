<template>
  <div style="position: relative;">
    <el-container>
      <el-aside width="300px">
        <ul>
          <li class="liStyle" v-for="item in tags" :key="item.id">
            <img
              src="~@/assets/image/btn/xiafan_2.png"
              class="msg"
              alt
              @dragstart="dragstart"
              draggable="true"
              :id="item.id"
              @dragend="imgEnd"
            >
          </li>
        </ul>
      </el-aside>
      <el-main>
        <div @drop.prevent="drop" @dragover.prevent style="height:1000px;width:1800px;">
          <img
            src="~@/assets/image/btn/xiafan_2.png"
            class="msg"
            :style="{left:item.x+'px',top:item.y+'px'}"
            alt
            v-for="(item, $index) in InfoList"
            :key="$index"
            @dragstart="imgStart"
            draggable="true"
            @drag="draging($event,item)"
            @dragend="imgEnd"
          >
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "draggle-page",
  methods: {
    dragstart(ev) {
      let info = { id: ev.target.id, isDrop: true };
      ev.dataTransfer.setData("Text", JSON.stringify(info));
      this.offsetX = ev.offsetX;
      this.offsetY = ev.offsetY;
    },
    drop(e) {
      let info = JSON.parse(e.dataTransfer.getData("Text"));
      /* 判断是否是第一次进入拖拽区域，如果是第一次需要新生成对象，否则不需要 */
      if (info.isDrop) {
        var x = e.clientX;
        var y = e.clientY;
        x -= this.offsetX;
        y -= this.offsetY;
        info.x = x - 5;
        info.y = y - 60;
        info.id = info.id + Date.parse(new Date());
        this.InfoList.push(info);
      }
    },
    imgStart(e) {
      let info = { isDrop: false };
      e.dataTransfer.setData("Text", JSON.stringify(info));
      this.imgOffsetX = e.offsetX;
      this.imgOffsetY = e.offsetY;
    },
    draging(e, item) {
      item.x = e.clientX - this.imgOffsetX - 5;
      item.y = e.clientY - this.imgOffsetY - 60;
    },
    imgEnd(event) {
      console.log("done");
      console.log(event);
      event.dataTransfer.clearData();
    }
  }
}
</script>
<style >
</style>