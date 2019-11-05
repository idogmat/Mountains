<template lang="pug">
  .skill-container
    table
      skills-item(
        v-for="skill in category.skills"
        :key="skill.id"
        :skill="skill"
      )
    hr
    form(
      @submit.prevent="addNewSkill"
      :class={blocked: formBlocked}
    ).add-skill-wrapper
      input(type="text" placeholder="Имя" v-model="skill.title")
      input(type="number" min="0" max="100" placeholder="Проценты" v-model="skill.percent")
      button.add-new(type="submit") 
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {
    skillsItem: () => import("./skills-item")
  },
  props: {
    category: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      formBlocked: false,
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    };
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      this.formBlocked = true;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        // errors
      } finally {
        this.formBlocked = false;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.skill-container{
  height: 100%;
}
.add-skill-wrapper{
  display: flex;
  flex-flow:row nowrap;
  justify-content: space-around;
}
.add-skill-wrapper.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
.btn-accept{
width: 15px;
height: 12px;
background: svg-load("tick.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("tick.svg", fill="#00d70a") center center no-repeat / contain;
}
}
.btn-decline{
width: 15px;
height: 12px;
background: svg-load("remove.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("remove.svg", fill="#bf2929") center center no-repeat / contain;
}
}
.btn-edit{
width: 16px;
height: 15px;
background: svg-load("pencil.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("pencil.svg", fill="#00d70a") center center no-repeat / contain;
}
}
.btn-trash{
width: 16px;
height: 15px;
background: svg-load("trash.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
background: svg-load("trash.svg", fill="#bf2929") center center no-repeat / contain;
} 
}
.add-new{
    color: #4b6fd7;
    font-weight: 700;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0;
    border: none;
  &:before{
    content: "+";
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-image: -webkit-gradient(linear,left top,right top,from(#006aed),to(#3f35cb));
    background-image: linear-gradient(90deg,#006aed,#3f35cb);
    line-height: 1.25rem;
    color: #fff;
    margin-right: 0.8125rem;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-preferred-size: 1.25rem;
    flex-basis: 1.25rem;
  }
}
</style>


