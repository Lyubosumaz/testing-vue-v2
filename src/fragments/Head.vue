<template>
  <div class="head">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="headLink.href" target="_blank" rel="noopener">{{
        headLink.text
      }}</a
      >.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class Head extends Vue {
  @Prop() private msg!: string;

  @Provide() private headLink: { href: string; text: string } = {
    href: "https://cli.vuejs.org",
    text: "vue-cli documentation",
  };
}
</script>
