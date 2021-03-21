<template>
  <div>
    <titleTask
      :controlNetwork="controlNetwork"
      :errorNetwork="errorNetwork"
      @transfercommand="transfercommand"
    />
    <squareCollection
      :collection="collection"
      :controlNetwork="controlNetwork"
      @transfercommand="transfercommand"
    />
  </div>
</template>

<script>
class Http {
  async get() {
    return (await fetch("/api/collections")).json();
  }
  async create() {
    return (await fetch("/api/figure/create")).json();
  }
  async update(id) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };
    return (await fetch("/api/figure/update", options)).json();
  }
  async clear(id) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };
    return (await fetch("/api/figure/clear", options)).json();
  }
}
class Executor {
  constructor(id) {
    this.id = id || "Не указан";
  }
  async get() {
    const response = new Http().get();
    return await response;
  }
  async create() {
    console.log("create Executor");
    const response = new Http().create();
    return await response;
  }
  async update() {
    const response = new Http().update(this.id);
    return await response;
  }
  async clear() {
    const response = new Http().clear(this.id);
    return await response;
  }
}
class Command {
  constructor(target) {
    this.target = target;
    this.commandsExecuted = [];
  }
  execute(command) {
    this.commandsExecuted.push(command);
    return this.target[command]();
  }
}
export default {
  data: () => {
    return {
      collection: [],
      controlNetwork: false,
      errorNetwork: true,
    };
  },
  methods: {
    async transfercommand(commandList) {
      const command = commandList.command;
      const id = commandList.id;
      this.collection = await new Command(new Executor(id)).execute(command);
    },
    successNetwork() {
      this.collection = this.controlNetwork;
      this.errorNetwork = false;
      this.controlNetwork = true;
    },
  },
  async mounted() {
    this.controlNetwork = await new Command(new Executor()).execute("get");
    if (this.controlNetwork.message) return;
    return this.successNetwork();
  },
};
</script>

<style>
</style>
