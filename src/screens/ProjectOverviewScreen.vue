<template>
  <div class="project-overview-screen" data-model-id="686:7940">
    <ProjectOverview :pageHeaderIcon="interfaceEssential" />
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import InterfaceEssential from "../components/InterfaceEssential.vue";
import ProjectOverview from "../components/ProjectOverview.vue";

export default defineComponent({
  name: "ProjectOverviewScreen",
  components: {
    InterfaceEssential,
    ProjectOverview,
  },
  setup() {
    const interfaceEssential = () => {
      return h(InterfaceEssential);
    };
    
    return {
      interfaceEssential
    };
  }
});
</script>

<style>
.project-overview-screen {
  height: 817px;
  width: 1440px;
}
</style>
