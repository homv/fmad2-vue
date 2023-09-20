import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: () => {
      const token = localStorage.getItem("token");
      if (token) {
        return "/admin";
      } else {
        return "/login";
      }
    },
  },
  {
    path: "/login",
    name: "loginRegister",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/admin",
    name: "home",
    component: () => import("../views/AdminHome.vue"),
  },
  {
    path: "/addVenue",
    name: "addVenue",
    component: () => import("../views/AddVenue.vue"),
  },
  {
    path: "/VenueDetails/:id",
    name: "VenueDetails",
    component: () => import("../views/VenueDet.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
