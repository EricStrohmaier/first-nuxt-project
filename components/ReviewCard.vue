<template>
  <div class="card">
    <p>Service Name: {{ serviceName }}</p>
    <p>Business Name: {{ businessName }}</p>
    <p>Service Rating: {{ serviceRating }}</p>
    <button @click="editCard">Edit</button>
    <button @click="removeCard">Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    serviceName: String,
    businessName: String,
    serviceRating: Number,
  },
  methods: {
    editCard() {
      // Implement your edit logic here
      // You can show a form to edit the card's details and update the global state.
      // For example, you can show a dialog or form for editing, and update the state when saved.
    },
    removeCard() {
      // Implement your remove logic here
      // You can remove the card from the global state using a mutation.
      this.$store.commit("removeReview", {
        serviceName: this.serviceName,
        businessName: this.businessName,
        serviceRating: this.serviceRating,
      });
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
}
</style>
