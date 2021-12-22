<template>
  <div>
    <p class="titleLvl">Primer Nivel</p>
    <section class="rules">
      <p>¡Bajalo que está muy alto!</p>
    </section>
    <input type="text" v-model="answer" name="answer" id="inputQuiz"/>
    <button-lvl :currentView="currentView" :nextView="nextView" :msg="msg" :answer="answer"/>
  </div>
</template>

<script>
import ButtonLvl from "@/components/ButtonLvl.vue";

export default {
  name: "firstlevel",
  components: {
    ButtonLvl,
  },
  data() {
    return {
      msg: "Enviar Repuesta",
      currentView: { view: "firstlevel", correctAnswer: "04c4r"},
      nextView: "secondlevel",
      answer: ""
    };
  },
};
</script>
