const findRequiredCategory = (category, skill, cb) => {
  if (category.id === skill.category) {
    cb(category);
  }

  return category;
};
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      state.categories.unshift(category);
    },
    REMOVE_CATEGORY: (state, removeCategoryId) => {
        state.categories = state.categories.filter(
          category => category.id !== removeCategoryId
        );
      }
    },
  actions: {
    async addCategory({ commit }, title) {
      try {
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORY", data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async getCategory({ commit }) {
      try {
        const { data } = await this.$axios.get("/categories");
        commit("SET_CATEGORIES", data);
      } catch (error) {}
    },
    async removeCategory({ commit }, skillId){
      try {
        const { data } = await this.$axios.delete("/categories");
        commit("REMOVE_CATEGORY", data);
      } catch (error) {
        
      }
    }
  }
};
