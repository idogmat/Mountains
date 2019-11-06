<template lang="pug">
  tr(v-if="editMode === false")
    td {{skill.title}}
    td {{skill.percent}}
    td 
      button(type="button" @click="removeExistedSkill") удалить
      button(type="button" @click="editMode = true") изменить
  
  tr(v-else)
    td 
      input(type="text" v-model="editedSkill.title")
    td 
      input(type="text" v-model="editedSkill.percent")
    td 
      button(type="button" @click="editExistedSkill") сохранить
      button(type="button" @click="editMode = false") отменить


</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      editMode: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill", "getSkills"]),
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill); 
        this.editMode = false;
      } catch (error) {
        
      }
    },
    async removeExistedSkill() {
      try {
        await this.removeSkill({
          id: this.skill.id,
          category: this.skill.category
        });
      } catch (error) {}
    }
  }
};
</script>
<style lang="postcss">
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
</style>