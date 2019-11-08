<template>
  <div 
    class="index" 
    @click="onPushToMe">我爱asdfasfd</div>
</template>

<script>
// var NVTabBar = window.api.require("NVTabBar");
export default {
  mouted() {},
  methods: {
    onPushToMe() {
      this.router.push({ path: "/me" });
    }
  }
};
</script>

<style  scoped>
.index {
  background-color: red;
}
</style>