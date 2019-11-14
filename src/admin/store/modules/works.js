import { wrapIntoFormData } from "@/helpers/forms";
export default{
  namespaced:true,
  state:{
    works:[],
    currentWork:{}
  },
  actions:{
    async addWork(store,newWork){
      const data = wrapIntoFormData(newWork);
      try{
        const response = await this.$axios.post('/works',data);
        store.commit("ADD_WORK",response.data);
      } catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async fecthWorks(store){
      try{
        const userId = store.rootGetters['user/userId'];
        const response = await this.$axios.get(`/works/${userId}`);
        store.commit('SET_WORK',response.data);
      } catch(error){
        alert(error.message);
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async removeWork(store,work){
      try{
        const response = await this.$axios.delete(`./works/${work.id}`);
        store.commit("DELETE_WORK",work);

      } catch(error){
        alert(error.message);
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async addCurrentWork(store,currentWork){
      store.commit("ADD_CURRENT_WORK",currentWork);
    },
    async updateWork(store,updatedWork){
      console.log(updatedWork)
      const data = wrapIntoFormData(updatedWork);
      try{
        const response = await this.$axios.post(`/works/${updatedWork.id}`,data);
        store.commit('UPDATE_CURRENT_WORK',response.data.work);
      } catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    }
  },
  mutations:{
    ADD_WORK(state,newWork){
      state.works.push(newWork);
    },
    SET_WORK(state,works){
      state.works = works
    },
    DELETE_WORK(state,deleteWork){
      state.works = state.works.filter(work=>{
        return work.id!=deleteWork.id;
      })
    },
    ADD_CURRENT_WORK(state,currentWork){
      state.currentWork = currentWork;
    },
    UPDATE_CURRENT_WORK(state,updatedWork){
      state.works = state.works.map(work=>{
        return work.id===updatedWork.id ? updatedWork : work;
      })
    }
  }
}