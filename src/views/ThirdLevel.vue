<template>
  <div class="mainDiv">
    <p class="titleLvl">Tercer Nivel</p>
    <section class="rules">
      <p>Donde habitan los demonios, un sitio muy húmedo...</p>
    </section>
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
      currentView: { view: "thirdlevel", correctAnswer: "mcc56"},
      nextView: "final",
      answer: "",
    };
  },
};
</script>
