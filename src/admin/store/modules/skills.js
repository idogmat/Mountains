export default {
  namespaced: true,
  actions: {
    async addSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.post("/skills", skill);
        commit("ADD_SKILL", data, { root: true });
      } catch (error) {}
    },
    async getSkills({ commit, rootGetters }) {
      try { 
        const userId = rootGetters['user/userId'];
        const { data } = await this.$axios.get(`/skills/${userId}`);
        commit ("SET_SKILLS", data );
      } catch (error) {
        
      }
    },
    async removeSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.delete(`/skills/${skill.id}`);
        commit("REMOVE_SKILL", skill, { root: true });
      } catch (error) {}
    },
    async editSkill({ commit }, editedSkill) {
      try {
        const { data } = await this.$axios.post(
          `/skills/${editedSkill.id}`,
          editedSkill
        );

        commit("categories/EDIT_SKILL", data.skill, { root: true });
      } catch (error) {}
    },
    
    async addReview(store, review) {
      const formData = new FormData();

      Object.keys(review).forEach(key => {
        formData.append(key, review[key]);
      })

      await this.$axios.post('/reviews', formData); 
      
    }
  },
  mutations:{
    ADD_SKILL(state, newSkill) {
      state.skills.push(newSkill);
    },

    SET_SKILLS: (state, skills) => {
      state.skills = skills;
    },
    REMOVE_SKILL(state, deletedSkill) {
      const removeSkill = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== deletedSkill.id
        );
      };

      const findRequiredCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkill(category);
        }

        return category;
      };

      state.categories = state.categories.map(findRequiredCategory);
    },
    EDIT_SKILL(state, editedSkill) {
      const editSkill = category => {
        category.skills = category.skills.map(skill =>
          skill.id === editedSkill.id ? editedSkill : skill
        );
      };

      state.categories = state.categories.map(category =>
        findRequiredCategory(category, editedSkill, editSkill(category))
      );
    }
  }
}
