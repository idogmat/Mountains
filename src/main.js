import Vue from 'Vue'
import Vuex from "vuex";
Vue.use(Vuex);
import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
import "./scripts/parallax";
import "./scripts/my-info";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/slider-responses";
import "./scripts/mini-menu";
import "./scripts/submit-vue";
import "./scripts/clickAndScroll";
// import "./scripts/get-created";