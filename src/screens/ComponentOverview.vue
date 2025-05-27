<template>
  <div class="component-overview" data-model-id="686:7942">
    <Detailansicht
      headerClassName="detailansicht-instance"
      :pageHeaderIcon="pageHeaderIcon"
      :textlinkIcon="textlinkIcon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import Detailansicht from "../components/Detailansicht.vue";
import InterfaceEssential from "../components/InterfaceEssential.vue";
import ArrowsDiagramsArrowsArrowLeft3 from "../icons/ArrowsDiagramsArrowsArrowLeft3.vue";

export default defineComponent({
  name: "ComponentOverview",
  components: {
    Detailansicht,
    InterfaceEssential,
    ArrowsDiagramsArrowsArrowLeft3,
  },
  setup() {
    const pageHeaderIcon = () => {
      return h(InterfaceEssential);
    };
    
    const textlinkIcon = () => {
      return h(ArrowsDiagramsArrowsArrowLeft3, {
        class: "arrows-diagrams-arrows-arrow-left-3-instance"
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
.component-overview {
  height: 1186px;
  width: 1440px;
}

.component-overview .detailansicht-instance {
  background-color: transparent !important;
}

.component-overview .arrows-diagrams-arrows-arrow-left-3-instance {
  height: 16px !important;
  left: 0 !important;
  position: absolute !important;
  top: 3px !important;
  width: 16px !important;
}
</style>
