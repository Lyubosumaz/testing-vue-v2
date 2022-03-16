<template>
  <div class="page">
    <div>Welcome to NativeScript-Vue!</div>

    <div>
      <div>Standard Component</div>
      <div>Component {{ whatToSay }}</div>
    </div>

    <button @click="speak">SPEAK</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class DemoOne extends Vue {
  // props
  @Prop() whatToSay!: string;

  // data
  initialLastName = "Summer";
  counter = 1;
  firstName = "Donna";
  lastName = this.initialLastName;

  // computed
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // watch
  @Watch("firstName")
  onFirstNameChange() {
    this.lastName = this.initialLastName + this.counter++;
  }

  // methods
  speak() {
    alert(`This is ${this.fullName} speaking '${this.whatToSay}'`);
  }
}
</script>
