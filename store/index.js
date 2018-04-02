import Vue from "vue";
import Vuex from "vuex";
import speakerData from "@/assets/speaker.json";
import sessionData from "@/assets/session.json";
import scheduleData from "@/assets/schedule.json";
import sponsorData from "@/assets/sponsor.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "philly.NET Code Camp 2018.1"
  },
  getters: {
    getTitle: state => state.title,
    getSpeakers: state => {
      return speakerData;
    },
    getSessions: state => {
      return sessionData[0].sessions;
    },
    getSchedules: state => {
      return scheduleData;
    },
    getSponsors: state => {
      return sponsorData;
    }
  }
});
