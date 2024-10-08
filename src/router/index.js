import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/layout.vue"),
    children: [
      { path: "", redirect: "/photography" },
      {
        path: "/photography",
        component: () => import("@/views/photography.vue"),
      },
      { path: "/design", component: () => import("@/views/design.vue") },
      { path: "/about", component: () => import("@/views/about.vue") },
      {
        path: "/album/:id",
        name: "album",
        component: () => import("@/views/album.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 }),
});

export default router;
