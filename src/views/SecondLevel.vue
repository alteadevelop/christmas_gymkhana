<template>
  <div class="mainDiv">
    <p><strong>Segundo Nivel</strong></p>
    <p>Hay</p>
    <input type="text" v-model="answer" name="answer" id="inputQuiz" />
    <button-lvl :currentView="currentView" :nextView="nextView" :msg="msg" :answer="answer"/>
  </div>
</template>

<script>
import ButtonLvl from "@/components/ButtonLvl.vue";

export default {
  name: "secondlevel",
  components: {
    ButtonLvl,
  },
  data() {
    return {
      msg: "Enviar Repuesta",
      currentView: { view: "secondlevel", correctAnswer: ""},
      nextView: "thirdlevel",
      answer: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
