<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TestingVuex />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TestingVuex from "@/components/TestingVuex.vue";

@Component({
  components: {
    TestingVuex,
  },
})
export default class AboutView extends Vue {}
</script>
