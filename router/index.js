import Vue from "vue";
import Router from "vue-router";

import Camp from "../components/Camp";
import Schedule from "../components/Schedule";
import Session from "../components/Session";
import Speaker from "../components/Speaker";
import Sponsor from "../components/Sponsor";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Camp",
      component: Camp
    },
    {
      path: "/schedule",
      name: "Schedule",
      component: Schedule
    },
    {
      path: "/session",
      name: "Session",
      component: Session
    },
    {
      path: "/speaker",
      name: "Speaker",
      component: Speaker
    },
    {
      path: "/sponsor",
      name: "Sponsor",
      component: Sponsor
    }
  ]
});
