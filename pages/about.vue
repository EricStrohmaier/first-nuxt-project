<template>
  <div class="container-xl">
    <div class="mt-4">
      <h2>{{ title }}</h2>
      <p class="my-4">{{ message }}</p>
      <p class="my-2">{{ message2 }}</p>
      <p class="my-2">{{ message3 }}</p>
    </div>
    <div class="mt-4">
      <span>
        The getter function (filters the key 'm') enables us to use the function
        globally, not as a local filter like the one I am using here to
      </span>
      <nuxt-link to="/get-f"> filter 'F'</nuxt-link>, which is very easy to use
      and understand.
    </div>
    <div class="d-flex">
      <ReviewCard
        v-for="(review, index) in filteredReviews"
        :key="index"
        :service-name="review.serviceName"
        :business-name="review.businessName"
        :service-rating="Number(review.serviceRating)"
        class="my-5 mx-2"
      />
    </div>
    <div class="mt-5">
      <nuxt-link to="/">Home</nuxt-link>
      <div>
        I hope I understood the requirements correctly and fulfilled all
        criteria to complete this task. I am looking forward to your feedback.
        LG Eric Strohmaier
        <a href="https://github.com/EricStrohmaier/first-nuxt-project"
          >Link to the Github Repo</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "My First Impressions of Working with Nuxt.js",
      message:
        "I started by following the Nuxt documentation, installed everything, and quickly had the project up and running. After some experimentation with a non-store form app, I grasped 'state management' and created the initial store functions. It was quite straightforward to use them in components.",
      message2:
        "To be honest, I struggled the most with the Bootstrap styles because I'm more accustomed to using Tailwind CSS. That's also why I opted to create the form using plain CSS.",
      message3:
        "Overall, it was a good experience because everything is well-documented and easy to understand.",
    };
  },
  computed: {
    // Add global store function filteredReviews
    filteredReviews() {
      return this.$store.getters.filteredReviews;
    },
  },
};
</script>
