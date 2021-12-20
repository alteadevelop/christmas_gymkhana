<template>
  <div>
    <div class="rules-app">
      <p><strong>Segundo Nivel</strong></p>
      <p>Hay</p>
      <input type="text" name="" id="">
      <button-lvl :currentView="currentView" :nextView="nextView" :msg="msg" />
    </div>
  </div>
</template>

<script>

import ButtonLvl from '@/components/ButtonLvl.vue'

export default {
  name: 'secondlevel',
  components: {
    ButtonLvl
  },
  data() {
    return {
      msg: 'Enviar Repuesta',
      currentView: 'secondlevel',
      nextView: 'thirdlevel'
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
