<template>
  <div class="head">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the <Link :link="headLink" />.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import Link from "@/fragments/Link.vue";
import { ILink } from "@/interfaces";

@Component({
  components: {
    Link,
  },
})
export default class Head extends Vue {
  @Prop() private msg!: string;

  @Provide() private headLink: ILink = {
    href: "https://cli.vuejs.org",
    text: "vue-cli documentation",
  };
}
</script>
