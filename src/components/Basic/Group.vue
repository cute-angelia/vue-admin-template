<template>
    <div class="group">
        <div class="line"></div>
        <div class="text">{{title}}</div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      require: true
    }
  }
};
</script>

<style scoped>
.group {
  margin: 10px 0 20px;
  display: flex;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.line {
  width: 100%;
  border-top: 1px solid #e0e0e0;
}

.text {
  min-width: 150px;
  font: 300 14px/1.8 -apple-system, PingFang SC, Microsoft Yahei, Lantinghei SC,
    Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  -webkit-box-direction: normal;
  text-align: center;
  color: #333;
}
</style>

