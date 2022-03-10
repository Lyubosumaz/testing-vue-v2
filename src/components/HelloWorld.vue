<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>

    <ClusteredLinks
      linksGroupTitle="Installed CLI Plugins"
      :groupOfLinks="installedCLIPlugins"
    />

    <ClusteredLinks
      linksGroupTitle="Essential Links"
      :groupOfLinks="essentialLinks"
    />

    <ClusteredLinks linksGroupTitle="Ecosystem" :groupOfLinks="ecosystem" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import ClusteredLinks from "@/fragments/ClusteredLinks.vue";

@Component({
  components: {
    ClusteredLinks,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Provide() private installedCLIPlugins = [
    {
      href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
      text: "babel",
    },
    {
      href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",
      text: "router",
    },
    {
      href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",
      text: "vuex",
    },
    {
      href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
      text: "eslint",
    },
    {
      href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",
      text: "unit-jest",
    },
    {
      href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
      text: "typescript",
    },
  ];
  @Provide() private essentialLinks = [
    {
      href: "https://vuejs.org",
      text: "Core Docs",
    },
    {
      href: "https://forum.vuejs.org",
      text: "Forum",
    },
    {
      href: "https://chat.vuejs.org",
      text: "Community Chat",
    },
    {
      href: "https://twitter.com/vuejs",
      text: "Twitter",
    },
    {
      href: "https://news.vuejs.org",
      text: "News",
    },
  ];
  @Provide() private ecosystem = [
    {
      href: "https://router.vuejs.org",
      text: "vue-router",
    },
    {
      href: "https://vuex.vuejs.org",
      text: "vuex",
    },
    {
      href: "https://github.com/vuejs/vue-devtools#vue-devtools",
      text: "vue-devtools",
    },
    {
      href: "https://vue-loader.vuejs.org",
      text: "vue-loader",
    },
    {
      href: "https://github.com/vuejs/awesome-vue",
      text: "awesome-vue",
    },
  ];
}
</script>
