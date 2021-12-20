<template>
  <div class="mainDiv">
    <p><strong>Tercer Nivel</strong></p>
    <p>Ya casi</p>
    <input type="text" v-model="answer" name="answer" id="inputQuiz" />
    <button-lvl :currentView="currentView" :nextView="nextView" :msg="msg" :answer="answer"/>
  </div>
</template>

<script>
import ButtonLvl from "@/components/ButtonLvl.vue";

export default {
  name: "thirdlevel",
  components: {
    ButtonLvl,
  },
  data() {
    return {
      msg: "Enviar Repuesta",
      currentView: { view: "thirdlevel", correctAnswer: ""},
      nextView: "final",
      answer: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
