import { createWebHistory, createRouter } from "vue-router"

import Home from "@/views/HelloApp.vue"

const routes = [
  {
    path: "/",
    name: "HelloApp",
    component: Home,
  },
  {
    path: "/firstlevel",
    name: "FirstLevel",
    component: () => import(/* webpackChunkName: "about" */ '@/views/FirstLevel.vue'),
  },
  {
    path: "/secondlevel",
    name: "SecondLevel",
    component: () => import(/* webpackChunkName: "about" */ '@/views/SecondLevel.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;