<template>
  <button @click="sendToView(currentView, nextView, answer)">
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: "button-lvl",
  props: {
    msg: {
      type: String,
      required: true,
    },
    currentView: {
      type: Object,
      required: true,
    },
    nextView: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  methods: {
    sendToView(currentView, nextView, answer) {
      if (currentView.view === "helloapp") {
        this.$router.push("/" + nextView);
      } else {
        if (currentView.correctAnswer === answer) {
          this.$router.push("/" + nextView);
        } else {
          document.getElementById("inputQuiz").value = "";
          alert("Respuesta incorrecta");
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: 6px solid rgba(184, 176, 176, 0.281);
  cursor: pointer;
  width: 70%;
  height: 8%;
  text-transform: uppercase;
  background-color: rgb(8, 117, 189);
  font-size: 1.5em;
  margin-top: 40%;
}

button:hover {
  background-color: rgba(31, 139, 189, 0.692);
}
</style>
