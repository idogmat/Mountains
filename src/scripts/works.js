import Vue from "vue";

const btns = {
    template: "#slider-btns"
};
const thambs = {
    template: "#slider-thambs"
};
const tags = {
    template: "#slider-tags"
};
const display = {
    template: "#slider-display",
    components:{ thambs, btns }
};
const info = {
    template: "#slider-info",
    components:{ tags }
};
new Vue({
    template: "#slider-container",
    el: "#slider-component",
    components: {
      display,
      info
    };