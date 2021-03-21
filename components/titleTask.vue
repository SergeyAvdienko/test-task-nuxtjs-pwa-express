<template>
  <div class="box">
    <p class="title">Тестовое задание</p>
    <p class="subtitle">Реализация PWA Nuxt.js + Express</p>
    <buttonCreate
      @transfercommand="transfercommand"
      v-if="controlNetwork && !errorNetwork"
    />
    <div class="notification is-danger is-light" v-if="controlNetwork.message">
      <button class="delete"></button>
      Невозможно установить соединение с сервером. Попробуйте позже
    </div>
  </div>
</template>

<script>
export default {
  props: ["controlNetwork", "errorNetwork"],
  methods: {
    transfercommand(commandList) {
      this.$emit("transfercommand", commandList);
    },
  },
};
</script>