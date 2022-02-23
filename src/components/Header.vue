<template>
  <header>
    <h1><i class="fa-solid fa-list-check"></i> {{ title }}</h1>
    <Button
      v-show="homePage"
      @toggle-add-task="$emit('toggle-add-task')"
      className="btn-primary"
      :title="showAddTask ? 'Close' : 'Add Task'"
    />
  </header>
</template>
<script>
import Button from "./Button.vue";

export default {
  name: "HeaderItem",
  components: {
    Button,
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
  props: {
    title: String,
    showAddTask: Boolean,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  align-self: center;
  width: 90%;
}
</style>
