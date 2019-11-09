export default {
	namespaced: true,
		state: {
			reviews: []
		},
	mutations: {
		SET_REVIWES(state, reviews) {
			state.reviews = reviews;
		}
	},
	actions:{
		async getReviews() {

		},
	  async addReview({ commit }, reviews) {
      const formData = new FormData();
        formData.append("photo", review.photo);
        formData.append("author", review.author);
        formData.append("occ", review.occ);
        formData.append("text", review.text);
      try {
      const { data } = await this.$axios.post('/reviews', formData);
      
      } catch (error){}
    }
  }
}