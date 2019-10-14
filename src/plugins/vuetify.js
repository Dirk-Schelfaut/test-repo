import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#2196f3",
        secondary: "#416c8e",
        accent: "#8c9eff",
        error: "#b71c1c"
      }
    }
  }
});
