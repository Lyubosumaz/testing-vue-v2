<template>
  <div class="hello">
    <Head :msg="msg" />

    <ClusteredLinks
      linksGroupTitle="Installed CLI Plugins"
      :groupOfLinks="installedCLIPlugins"
    />

    <ClusteredLinks
      linksGroupTitle="Essential Links"
      :groupOfLinks="essentialLinks"
    />

    <ClusteredLinks linksGroupTitle="Ecosystem" :groupOfLinks="ecosystem" />

    <h1>Class Youtube</h1>
    <DemoOne :whatToSay="'this message is cute'" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import ClusteredLinks from "@/fragments/ClusteredLinks.vue";
import DemoOne from "@/components/DemoOne.vue";
import Head from "@/fragments/Head.vue";

import InstalledCLIPlugins from "@/mock/InstalledCLIPlugins.json";
import EssentialLinks from "@/mock/EssentialLinks.json";
import Ecosystem from "@/mock/Ecosystem.json";

import { ClusteredLinksType } from "@/interfaces";

@Component({
  components: {
    ClusteredLinks,
    Head,
    DemoOne,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Provide() private installedCLIPlugins: ClusteredLinksType =
    InstalledCLIPlugins.data;

  @Provide() private essentialLinks: ClusteredLinksType = EssentialLinks.data;

  @Provide() private ecosystem: ClusteredLinksType = Ecosystem.data;
}
</script>
