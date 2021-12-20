<template>
  <div>
    <router-link to="/firstlevel"><button @click="sendToView(msg, view)">{{ msg }}</button></router-link>
    <router-link to="/firstlevel">lick</router-link>
  </div>
</template>

<script>
//import router from "../router"

export default {
  name: "button-lvl",
  props: {
    msg: {
      type: String,
      required: true,
    },
    view: {
      type: String,
      required: true,
    },
  },
  methods: {
    sendToView(msg, view) {
      console.log(view);
      if(view === "hello-app"){
        //router.push('/firstlevel');
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
