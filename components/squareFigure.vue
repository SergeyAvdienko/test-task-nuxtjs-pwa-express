<template>
  <div class="container mb-5 mr-5">
    <div :class="`square notification ${square.color}`"></div>
    <div class="buttons are-small mt-1">
      <span class="tag is-primary mr-2 but" @click="update">Изменить</span>
      <span class="tag is-danger but" @click="clear">Удалить</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["square"],
  methods: {
    update() {
      this.transferToParent("update");
    },
    clear() {
      this.transferToParent("clear");
    },
    transferToParent(command) {
      const commandList = { command: command, id: this.square._id };
      this.$emit("transfercommand", commandList);
    },
  },
};
</script>

<style>
.container {
  float: left;
  display: flex;
  flex-direction: column;
}
.square {
  width: 150px;
  height: 150px;
  padding: 10px;
  border-radius: 5px;
}
.but {
  cursor: pointer;
}
</style>
