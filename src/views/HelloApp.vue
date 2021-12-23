<template>
  <div>
    <p class="titleLvl">Christmas Gymkhana</p>
    <section class="rules">
      <p>Bienvenida a la Gymkhana navideña.</p>
      <p>
        En cada nivel tendrás que insertar una clave que encontrarás en
        ubicaciones de la casa siguiendo la pista dada.
      </p>
      <p>Una vez canjeada la clave correcta, recibirás el regalo.</p>
      <p>¡Mucha suerte!</p>
    </section>
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
  name: "hello-app",
  components: {
    ButtonLvl,
  },
  data() {
    return {
      msg: "Comenzar",
      currentView: { view: "helloapp", correctAnswer: "" },
      nextView: "firstlevel",
      answer: "",
    };
  },
};
</script>
