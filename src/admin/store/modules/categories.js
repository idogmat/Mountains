import skills from "./skills";
export default {
  namespaced:true,
  state:{
    categories:[]
  },
  actions:{
    async addCategory(store,newCategory){
      // console.log(newCategory);
      try{
        // console.log(await this.$axios.get('/user'));
        const response = await this.$axios.post('/categories',{
          title:newCategory
        });
        store.commit("ADD_CATEGORY",response.data);
      } catch(error){
        return error;
      }
    },
    async removeCategory(store,category){
      try{
        const response = await this.$axios.delete(`./categories/${category.id}`);
        store.commit('DELETE_CATEGORY',category);
      } catch(error){
        alert(error.message)
      }
    },
    async changeCategory(store,currentCategory){
      try{
        const response = await this.$axios.post(`./categories/${currentCategory.id}`,{
          title:currentCategory.category
        });
        store.commit("CHANGE_CATEGORY",currentCategory)
      } catch(error){
        alert(error.message)
      }
    },
    async fetchCategory(store){
      try{
        const userId = store.rootGetters['user/userId'];
        const {data : categories} = await this.$axios.get(`/categories/${userId}`);
        console.log(categories);
        store.commit("SET_CATEGORIES",categories)
      } catch(error){

      }
    }
  },
  mutations:{
    SET_CATEGORIES(state,categories){
      state.categories = categories;
    },
    DELETE_CATEGORY(state,deleteCategory){
      state.categories = state.categories.filter(category=>{
        return category.id !== deleteCategory.id
      })
    },
    CHANGE_CATEGORY(state,changedCategory){
      state.categories = state.categories.map(category=>{
        return category.id === changedCategory.id ? changedCategory : category;
      })
    },
    ADD_CATEGORY(state,newCategory){
      state.categories.unshift(newCategory);
    }
  }
}