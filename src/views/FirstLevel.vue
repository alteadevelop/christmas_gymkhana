<template>
  <div class="mainDiv">
    <p><strong>Primer Nivel</strong></p>
    <p>
      Hay algo que, aunque te pertenezca, la gente siempre lo utiliza más que
      tú. ¿Qué es?
    </p>
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
      currentView: { view: "firstlevel", correctAnswer: "nombre"},
      nextView: "secondlevel",
      correctAnswer: "nombre",
      answer: ""
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
