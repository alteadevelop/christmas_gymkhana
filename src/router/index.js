import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/views/HelloApp.vue";
import FirstLevel from "@/components/views/FirstLevel.vue";

const routes = [
  {
    path: "/",
    name: "HelloApp",
    component: Home,
  },
  {
    path: "/firstlevel",
    name: "FirstLevel",
    component: FirstLevel,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;