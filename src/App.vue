<template>
  <div class="mainDiv">
    <HelloApp msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloApp from "./components/views/HelloApp.vue";

export default {
  name: "App",
  components: {
    HelloApp,
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');

.mainDiv {
  font-family: 'Bakbak One', cursive;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(./assets/background_image.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
