<template>
  <div class="settings-page" data-model-id="686:7944">
    <AdminPreferences
      :pageHeaderIcon="pageHeaderIcon"
      :textlinkIcon="textlinkIcon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import AdminPreferences from "../components/AdminPreferences.vue";
import ArrowsDiagramsArrowsArrowLeft3 from "../icons/ArrowsDiagramsArrowsArrowLeft3.vue";
import InterfaceEssentialSettingCog1_5 from "../icons/InterfaceEssentialSettingCog1_5.vue";

export default defineComponent({
  name: "SettingsPage",
  components: {
    AdminPreferences,
    ArrowsDiagramsArrowsArrowLeft3,
    InterfaceEssentialSettingCog1_5,
  },
  setup() {
    const pageHeaderIcon = () => {
      return h(InterfaceEssentialSettingCog1_5, {
        class: "interface-essential-3"
      });
    };

    const textlinkIcon = () => {
      return h(ArrowsDiagramsArrowsArrowLeft3, {
        class: "arrows-diagrams-arrows-arrow-left-4"
      });
    };

    return {
      pageHeaderIcon,
      textlinkIcon,
    };
  },
});
</script>

<style>
.settings-page {
  height: 862px;
  width: 1440px;
}

.settings-page .interface-essential-3 {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}

.settings-page .arrows-diagrams-arrows-arrow-left-4 {
  height: 16px !important;
  left: 0 !important;
  position: absolute !important;
  top: 3px !important;
  width: 16px !important;
}
</style>
