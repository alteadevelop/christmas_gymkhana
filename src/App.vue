<template>
  <div class="mainDiv">
    <audio-component />
    <router-view />
  </div>
</template>

<script>
import AudioComponent from './components/AudioComponent.vue';

export default {
  name: "App",
  component: {
    AudioComponent
  }
};
</script>

<style>
.mainDiv {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-image: url(./assets/background.gif);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
