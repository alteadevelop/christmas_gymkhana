<template>
  <div>
    <h1>Christmas Gymkhana</h1>
    <div class="rules-app">
      <p>Bienvenida a la Gymkhana navideña. En cada nivel, en caso de acertarle, recibirás tus regalos navideños. Mucha suerte.</p>
      <button-lvl :msg="msg" />
    </div>
  </div>
</template>

<script>

import ButtonLvl from '@/components/ButtonLvl.vue'

export default {
  name: 'HelloApp',
  components: {
    ButtonLvl
  },
  data() {
    return {
      msg: 'Comenzar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    background-image: url('/assets/background_image.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    text-align: center;
}

</style>
