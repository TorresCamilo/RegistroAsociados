import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistroAsociadosView from "../views/RegistroAsociadosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/registro-asociados",
      name: "asociados",
      component: RegistroAsociadosView,
    },
  ],
});

export default router;
