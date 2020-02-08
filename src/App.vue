<template>
  <div id="app">
    <hr />
    <app-tags></app-tags>
    <hr />
  </div>
</template>

<script>
import Tags from "./components/Tags"
export default {
  name: "App",
  components:{
    appTags : Tags
  }
};
</script>

<style>

</style>
