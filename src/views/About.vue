<template>
  <div class="about-container">
    <h3>Version 1.0.0</h3>
    <router-link to="/">Go back</router-link>
  </div>
</template>
<script>
export default {
  name: "AboutComponent",
};
</script>
<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
}
</style>
