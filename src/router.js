import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import Settings from "./components/Settings.vue";
import Statistics from "./components/Statistics.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/statistics",
      name: "statistics",
      component: Statistics
    }
  ]
});
