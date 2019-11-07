<template>
  <div 
    class="index" 
    @click="onPushToMe">我爱你中国</div>
</template>

<script>
var NVTabBar = window.api.require("NVTabBar");
export default {
  mouted() {},
  methods: {
    onPushToMe() {
      this.$router({ path: "/index" });
    }
  }
};
</script>

<style  scoped>
.index {
  background: red;
}
</style>