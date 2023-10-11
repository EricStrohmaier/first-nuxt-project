export const state = () => ({
  reviews: [], // Your initial state
});

export const mutations = {
  addReview(state, review) {
    state.reviews.push(review);
  },
  removeReview(state, review) {
    state.reviews.splice(state.reviews.indexOf(review), 1);
  },
};
