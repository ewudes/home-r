import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routers = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routers,
});

export default router;