<template>
  <a :href="link.href" target="_blank" rel="noopener">{{ link.text }}</a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ILink } from "@/interfaces";

@Component
export default class Link extends Vue {
  @Prop() private link!: ILink;
}
</script>
