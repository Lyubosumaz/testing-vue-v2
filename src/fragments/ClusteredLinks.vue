<template>
  <div class="useful-links">
    <h3>{{ linksGroupTitle }}</h3>
    <ul>
      <li v-for="(link, index) in groupOfLinks" :key="index">
        <a v-bind:href="link.href" target="_blank" rel="noopener">{{
          link.text
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ClusteredLinks extends Vue {
  @Prop() private linksGroupTitle!: string;
  @Prop() private groupOfLinks!: { href: string; text: string }[];
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;

    a {
      color: #42b983;
    }
  }
}
</style>
