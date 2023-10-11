<template>
  <div>
    <h1>{{ message }}</h1>
    <nuxt-link to="/form">Go to Form Page</nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "IndexPage",
  data() {
    return {
      message: "Hello, and Welcome to my first Nuxt 2 Project!",
    };
  },
};
</script>

<style>
body {
  margin: 0;
  background: #eee;
  height: 100vh;
}
</style>
