import Vue from 'vue';
import {getAPI} from "./api-get";

const skill = {
  template: "#skill",
  props: {
    skillObj: {
      title: String,
      percent: Number
    }
  },
  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const ColorPercent = (dashArray / 100) * (100 - this.skillObj.percent);

      circle.style.strokeDashoffset = ColorPercent;
    }
  },
  mounted() {
    this.drawColoredCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill
  }
};

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: []

    };
  },

  async created() {
    // const data = require('../data/skills.json');
    // this.skills = data;
      const data = await getAPI.getSkills();
      this.skills = data;
    console.log('res')
      console.log(data)
  }
});