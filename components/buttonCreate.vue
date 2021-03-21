<template>
  <div>
    <button class="button is-primary" @click="create">Создать фигуру</button>
  </div>
</template>

<script>
export default {
  methods: {
    create() {
      this.transferToParent("create");
    },
    transferToParent(command) {
      const commandList = { command: command, id: "Не определен" };
      this.$emit("transfercommand", commandList);
    },
  },
};
</script>
