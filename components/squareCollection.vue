<template>
  <section class="hero is-small">
    <div class="hero-body">
      <p v-if="!collection.length && controlNetwork">Вы не создали фигуру</p>
      <div
        v-if="!controlNetwork"
        class="notification is-warning is-light server"
      >
        <p class="mr-5">Обновляю текущие данные</p>
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
      <div v-for="(square, index) in collection" :key="index">
        <squareFigure :square="square" @transfercommand="transfercommand" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["collection", "controlNetwork"],
  methods: {
    transfercommand(commandList) {
      this.$emit("transfercommand", commandList);
    },
  },
};
</script>

<style>
.server {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.spinner {
  display: flex;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #fffbeb;
}
.spinner > div {
  width: 20px;
  height: 20px;
  background-color: #947600;
  margin-right: 5px;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}
.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
