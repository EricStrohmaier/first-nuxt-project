
<template>
  <div class="container-xl">
    <div class="mt-4">
      <h2>{{ title }}</h2>
    </div>

    <div class="d-flex">
      <ReviewCard
        v-for="(review, index) in filterdReviewsWithF"
        :key="index"
        :service-name="review.serviceName"
        :business-name="review.businessName"
        :service-rating="Number(review.serviceRating)"
        class="my-5 mx-2"
      />
    </div>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      title: "Get only cards with F with local function",
    };
  },
  computed: {
    filterdReviewsWithF() {
      return this.$store.state.reviews.filter((review) => {
        return (
          review.serviceName.toLowerCase().includes("f") ||
          review.businessName.toLowerCase().includes("f")
        );
      });
    },
  },
};
</script>
  
  