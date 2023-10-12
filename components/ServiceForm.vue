<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" class="mt-4">
      <h2>Service Review Form</h2>
      <div>
        <label for="serviceName">Service Name:</label>
        <input
          type="text"
          id="serviceName"
          v-model="serviceName"
          required
          class="form-control"
        />
      </div>

      <div>
        <label for="businessName">Business Name:</label>
        <input
          type="text"
          id="businessName"
          v-model="businessName"
          required
          class="form-control"
        />
      </div>
      <div class="d-flex align-items-center stars-container">
        <label for="serviceRating">Service Rating:</label>

        <div v-for="starIndex in 5" :key="starIndex" class="flex flex-row">
          <span
            @click="selectRating(starIndex)"
            class="star-icon"
            :class="starIndex <= selectedRating ? 'selected' : ''"
            >⭐️</span
          >
        </div>
      </div>
      <input type="hidden" name="serviceRating" v-model="selectedRating" />

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <nuxt-link to="/about">About page</nuxt-link>
    <div
      class="d-flex justify-content-center flex-wrap"
      style="max-width: 100%"
    >
      <ReviewCard
        v-for="(review, index) in $store.getters.getReviews"
        :key="index"
        :service-name="review.serviceName"
        :business-name="review.businessName"
        :service-rating="Number(review.serviceRating)"
        class="mb-3 mx-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceName: "",
      businessName: "",
      serviceRating: null,
      selectedRating: 0,
    };
  },
  methods: {
    selectRating(rating) {
      this.selectedRating = rating;
    },
    handleSubmit() {
      const review = {
        serviceName: this.serviceName,
        businessName: this.businessName,
        serviceRating: this.selectedRating,
      };

      this.$store.commit("addReview", review);

      this.serviceName = "";
      this.businessName = "";
      this.selectedRating = 0;
    },
  },
};
</script>


<style>
body {
  margin: 0;
  background: #eee;
  height: 100vh;
}
form {
  max-width: 420px;
  margin: 30px auto;
  margin-bottom: 10px;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
submit {
  text-align: center;
}
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
}
.star-icon {
  cursor: pointer;
  position: relative;
  top: 3.5px;
}
.selected {
  background: yellow;
}
</style>