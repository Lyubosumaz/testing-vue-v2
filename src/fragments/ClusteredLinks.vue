<template>
  <div class="useful-links">
    <h3>{{ linksGroupTitle }}</h3>
    <ul>
      <li v-for="(link, index) in groupOfLinks" :key="index">
        <Link :link="link" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Link from "@/fragments/Link.vue";
import { ClusteredLinksType } from "@/interfaces";

@Component({
  components: {
    Link,
  },
})
export default class ClusteredLinks extends Vue {
  @Prop() private linksGroupTitle!: string;
  @Prop() private groupOfLinks!: ClusteredLinksType;
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
