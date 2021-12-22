<template>
  <div class="mainDiv">
    <p class="titleLvl">Segundo Nivel</p>
    <section class="rules">
      <p>Donde habitan los demonios, un sitio muy húmedo...</p>
    </section>
    <input type="text" v-model="answer" name="answer" id="inputQuiz" />
    <button-lvl
      :currentView="currentView"
      :nextView="nextView"
      :msg="msg"
      :answer="answer"
    />
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
      currentView: { view: "secondlevel", correctAnswer: "log4j" },
      nextView: "thirdlevel",
      answer: "",
    };
  },
};
</script>
