<template>
  <div class="home-page">
    <div class="container">
      <Header
        @toggle-add-task="toggleAddTask"
        title="Task Tracker"
        :showAddTask="showAddTask"
      />

      <router-view :showAddTask="showAddTask"></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,

    Footer,
  },

  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Redressed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap");

* {
  font-family: Redressed;
}
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-c {
  display: flex;
  justify-content: center;
  align-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 80%;
  padding: 10px;
  margin: 1rem;
  border-color: rgb(25, 25, 102);
  border: 2px solid;
  border-radius: 10px;
}
</style>
