export const state = () => ({
  reviews: [], // Your initial state
});

export const mutations = {
  addReview(state, review) {
    state.reviews.push(review);
  },
};
export const getters = {
  getReviews: (state) => {
    return state.reviews;
  },
  filteredReviews: (state) => {
    return state.reviews.filter((review) => {
      return (
        review.serviceName.toLowerCase().includes("m") ||
        review.businessName.toLowerCase().includes("m")
      );
    });
  },
};
