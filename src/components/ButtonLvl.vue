<template>
  <div>
    <button>{{ msg }}</button>
  </div>
</template>

<script>
export default {
  name: "button-lvl",
  props: ['msg']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-image: url("/assets/background_image.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>
