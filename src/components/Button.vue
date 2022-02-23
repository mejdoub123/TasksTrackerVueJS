<template>
  <button @click="onClick()" :class="className">{{ title }}</button>
</template>
<script>
export default {
  name: "ButtonItem",
  props: {
    title: String,
    className: String,
  },
  methods: {
    onClick() {
      this.$emit("toggle-add-task");
    },
  },
};
</script>
<style scoped>
.btn-primary {
  outline: none;
  border: none;
  background-color: rgb(14, 61, 102);
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
}
.btn-primary:hover {
  outline: none;
  border: 2px solid;
  border-color: rgb(3, 25, 44);
  background-color: rgb(255, 255, 255);
  color: rgb(3, 25, 44);
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
}
</style>
