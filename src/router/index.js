import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: () => {
      const token = localStorage.getItem("token");
      if (token) {
        return "/user";
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
  },
  {
    path: "/addEvent",
    name: "addEvent",
    component: () => import("../views/AddEvent.vue"),
  },
  {
    path: "/addtoVenue/:id",
    name: "addtoVenue",
    component: () => import("../views/AddEventVenue.vue"),
  },
  {
    path: "/addtoEvent",
    name: "addtoEvent",
    component: () => import("../views/EventVenDet.vue"),
  },
  {
    path:"/user",
    name:"user",
    component: () => import("../views/UserHome.vue"),
  },
  {
    path:"/book",
    name:"book",
    component: () => import("../views/RegisterEvent.vue"),
  },
  {
    path:'/myTickets',
    name:'myTickets',
    component: () => import("../views/DisplayTickets.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
