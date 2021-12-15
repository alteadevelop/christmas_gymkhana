<template>
  <div>
    <button @click="sendToView({msg}, {view})">{{ msg }}</button>
  </div>
</template>

<script>
import firstlevelcomponent from "./views/FirstLevel.vue";

export default {
  name: "button-lvl",
  props: {
    msg: {
      type: Text,
      required: true,
    },
    view: {
      type: Text,
      required: true,
    },
  },
  setup(props) {
    console.log(props);
  },
  data() {
    return { dView: this.$props.view };
  },
  created() {
    this.$emit("nextStep", firstlevelcomponent);
  },
  methods: {
    sendToView: (msg, view) => {
      console.log(msg, view);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: 3px solid rgb(196, 47, 47);
  cursor: pointer;
  width: 50%;
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
