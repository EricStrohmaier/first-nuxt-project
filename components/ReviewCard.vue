<template>
  <div class="card">
    <h4>Review Card</h4>
    <p>Service Name: {{ serviceName }}</p>
    <p>Business Name: {{ businessName }}</p>
    <div v-if="serviceRating">
      <p>
        Rating:
        <span v-for="n in serviceRating" :key="n" class="star-emoji">⭐</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serviceName: String,
    businessName: String,
    serviceRating: Number,
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  width: fit-content;
}

.star-emoji {
  margin-right: 2px;
}
</style>
