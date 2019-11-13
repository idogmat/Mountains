export default {
	namespaced: true,
		state: {
			reviews: {
				review:{
					text:[],
					author: [],
					occ:[],
					photo: []
				}
			}
		},
	mutations: {
		SET_REVIWES(state, reviews) {
			state.reviews = reviews;
		}
	},
	actions:{
		async getReviews() {

		},
	async addReview(review) {
		console.log(review);
    }
  }
}