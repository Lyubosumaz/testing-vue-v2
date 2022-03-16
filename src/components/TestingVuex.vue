<template>
  <div>
    <h1>{{ label }}</h1>
    <h1>{{ firstname }}</h1>
    <h1>{{ lastname }}</h1>

    <ul v-if="computedProp.length">
      <li v-for="(el, index) in testArr" :key="index">
        <p>{{ el }}</p>
      </li>
    </ul>
    <ul v-else>
      <li>
        <p>Loading...</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Provide, PropSync, Vue } from "vue-property-decorator";
import { testingVuexModule } from "../store/TestingVuex";

@Component
export default class TestingVuex extends Vue {
  firstname = "1";
  lastname = "2";

  get value() {
    return `${this.firstname} ${this.lastname}`;
  }

  set value(fullname: string) {
    const [firstname, lastname] = fullname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // @PropSync('testArr', testingVuexModule.getItMate())
  private text = testingVuexModule.all;

  get label() {
    return this.text;
  }

  @Provide() testArr: string[] = testingVuexModule.all;

  created() {
    testingVuexModule.getItMate();
  }
}
</script>
