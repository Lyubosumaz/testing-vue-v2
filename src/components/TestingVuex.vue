<template>
  <div>
    <!-- <div>{{ testArr }}</div> -->

    <ul v-if="vuexTest.length">
      <li v-for="(el, index) in vuexTest" :key="index">
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
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { testingVuexModule } from "../store/TestingVuex";

@Component
export default class TestingVuex extends Vue {
  get vuexTest() {
    return testingVuexModule.all;
  }

  // @Provide() testArr: string[] = testingVuexModule.all;
  created() {
    testingVuexModule.getItMate();
  }
}
</script>
