<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task-container']"
  >
    <h3>
      {{ task.text }}
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>
<script>
export default {
  name: "TaskItem",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>
<style scoped>
.task-container {
  background: #d6e9ff;
  border-radius: 7px;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task-container.reminder {
  border-left: 5px solid rgb(38, 201, 38);
}
.task-container h3 {
  color: rgb(99, 48, 165);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task-container i {
  background-color: #ffffff;
  padding: 7px 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px #d6e9ff;
}

.task-container i:hover {
  background-color: rgb(99, 48, 165);
  color: #ffffff;
  padding: 7px 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px #d6e9ff;
}
</style>
