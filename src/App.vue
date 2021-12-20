<template>
  <div class="mainDiv">
      <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

*{
  /*font-family: 'Bakbak One', cursive;*/
  font-family: "Poppins", sans-serif;
}

.mainDiv {
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
