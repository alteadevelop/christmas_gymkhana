<template>
  <div>
    <button @click="sendToView(currentView, nextView, answer)">{{ msg }}</button>
  </div>
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
    }
  },
  methods: {
    sendToView(currentView, nextView, answer) {
      if(currentView.correctAnswer === answer) {
        this.$router.push('/' + nextView)
      }else{
        document.getElementById('inputQuiz').value = ''
        alert('Respuesta incorrecta')
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: 3px solid rgb(196, 47, 47);
  cursor: pointer;
  width: 70%;
  height: 10%;
  text-transform: uppercase;
  background-color: rgba(252, 252, 252, 0);
  font-size: 1.5em;
  margin-top: 20%;
}

button:hover {
  background-color: rgba(214, 95, 95, 0.692);
}
</style>
