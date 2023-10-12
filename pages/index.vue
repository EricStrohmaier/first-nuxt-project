<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-5"
  >
    <h2>{{ message }}</h2>
    <ServiceForm />
  </div>
</template>

<script lang="ts">
import ServiceForm from "@/components/ServiceForm.vue"; // Import the component

export default {
  name: "IndexPage",
  components: {
    ServiceForm, // Register the component
  },
  data() {
    return {
      message: "Hello, and Welcome to my first Nuxt 2 Project!",
    };
  },
};
</script>
