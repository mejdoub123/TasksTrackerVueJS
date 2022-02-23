<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>
    <input type="submit" value="Save Task" class="btn-submit-form" />
  </form>
</template>
<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add a task");
        return;
      }
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      console.log(newTask);
      this.$emit("add-new-task", newTask);

      this.text = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>
<style scoped>
.add-form {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  padding: 5px 10px;
  margin-bottom: 30px;
}

.form-control {
  display: flex;
  flex-direction: column;
  padding: 6px;
  margin-bottom: 8px;
}
.form-control-check {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px;
  margin-bottom: 8px;
}

.form-control label {
  color: rgb(14, 61, 102);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
}

.form-control input {
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #e8f2fd;
}

.btn-submit-form {
  border: 2px solid rgb(255, 255, 255);
  width: 40%;
  align-self: center;
  cursor: pointer;
  padding: 10px 0px;
  border-radius: 6px;
  background-color: rgb(41, 92, 138);
  color: #ffffff;
}
.btn-submit-form:hover {
  background-color: rgb(25, 70, 109);
}
</style>
