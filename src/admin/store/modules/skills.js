

export default{
  namespaced: true,
  state: { 
    skills:[]
  },
  mutations:{
    SET_SKILLS(state,skills){
      state.skills = skills;
    },
    ADD_SKILL(state,skills){
      state.skills.push(skills);
    },
    DELETE_SKILL(state,deleteSkillId){
      state.skills = state.skills.filter(skill=>skill.id!==deleteSkillId)
    },
    EDIT_SKILL(state,editedSkill){
      state.skills = state.skills.map(skill=>{
        return skill.id === editedSkill.id ? editedSkill : skill;
      })
    }
  },
  actions:{
    async addSkill(store,newSkill){
      console.log(newSkill);
      try{
        const {data:skill} = await this.$axios.post('/skills',newSkill);
        store.commit("ADD_SKILL",skill);
      } catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async removeSkill(store,skillId){
      try{
        const response =  await this.$axios.delete(`/skills/${skillId}`)
        store.commit("DELETE_SKILL",skillId);
      } catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async editSkill(store,skill){
      try{
        const response = await this.$axios.post(`/skills/${skill.id}`,skill);
        store.commit("EDIT_SKILL",skill)
      } catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async fetchSkill(store){
      try{
        const userId = store.rootGetters['user/userId'];
        const {data : skills} = await this.$axios(`/skills/${userId}`);
        console.log(skills);
        store.commit("SET_SKILLS",skills)
      } catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    }
  }
}