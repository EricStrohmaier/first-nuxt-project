<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h2>Service Review Form</h2>
      <div>
        <label>Service Name:</label>
        <input type="text" v-model="serviceName" required />
      </div>

      <div>
        <label>Business Name:</label>
        <input type="text" v-model="businessName" required />
      </div>

      <div>
        <label>Service Rating:</label>
        <select v-model="serviceRating">
          //stars emojy pls ⭐
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>

    <div v-if="formSubmitted">
      <ReviewCard
        v-for="(review, index) in $store.state.reviews"
        :key="index"
        :service-name="review.serviceName"
        :business-name="review.businessName"
        :service-rating="Number(review.serviceRating)"
      />
    </div>

    <!-- <div class="card">
      <p>Service Name: {{ serviceName }}</p>
      <p>Business Name: {{ businessName }}</p>
      <p>Service Rating: {{ serviceRating }}</p>
    </div> -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      serviceName: "",
      businessName: "",
      serviceRating: null,
      formSubmitted: false,
    };
  },
  methods: {
    handleSubmit() {
      const review = {
        serviceName: this.serviceName,
        businessName: this.businessName,
        serviceRating: this.serviceRating,
      };

      this.$store.commit("addReview", review); // Commit the addReview mutation

      this.formSubmitted = true;

      // Clear form
      this.serviceName = "";
      this.businessName = "";
      this.serviceRating = null;
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
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
</style>