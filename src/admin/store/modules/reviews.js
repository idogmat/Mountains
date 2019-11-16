import { wrapIntoFormData } from "@/helpers/forms";
import { generateStdError } from "@/helpers/errorHandler";


export default {
  namespaced:true,
  state:{
    reviews:[],
    currentReview:{}
  },
  actions:{
    async addReview(store,newReview){
      const data = wrapIntoFormData(newReview); 
      try{
        const response = await this.$axios.post('https://webdev-api.loftschool.com/reviews',data)
        store.commit("ADD_REVIEW",response.data);
      } catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async removeReview(store,removeReview){
      try{
        const response = await this.$axios.delete(`https://webdev-api.loftschool.com/reviews/${removeReview.id}`)
        store.commit('REMOVE_REVIEW',removeReview);
      }catch(error){
        console.log(error.message);
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async fetchReview(store){
      try{
        const userId = store.rootGetters['user/userId'];
        const response = await this.$axios.get(`https://webdev-api.loftschool.com/reviews/${userId}`);
        store.commit('SET_REVIEW',response.data);
      } catch(error){
        alert(error.message);
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    addCurrentReview(store,currentReview){
      store.commit('ADD_CURRENT_REVIEW',currentReview);
    },
    async updateReveiw(store,updatedReview){
      const data = wrapIntoFormData(updatedReview); 
      try{
        const response = await this.$axios.post(`https://webdev-api.loftschool.com/reviews/${updatedReview.id}`,data);
        store.commit('UPDATE_CURRENT_REVIEW',response.data.review);
      } catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    }
  },
  mutations:{
    ADD_REVIEW(state,review){
      state.reviews.push(review);
    },
    SET_REVIEW(state,review){
      state.reviews = review;
    },
    REMOVE_REVIEW(state,removedReview){
      state.reviews = state.reviews.filter(review=>{
        return review.id!=removedReview.id
      })
    },
    ADD_CURRENT_REVIEW(state,currentReview){
      state.currentReview = currentReview;
    },
    UPDATE_CURRENT_REVIEW(state,updateReveiw){
      state.reviews = state.reviews.map(review=>{
        return review.id===updateReveiw.id ? updateReveiw : review;
      })
    }
  }
}