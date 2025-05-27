<template>
  <div class="translation-overview" data-model-id="686:7943">
    <DetailansichtWrapper
      :pageHeaderIcon="InterfaceEssential"
      :statusDefaultIconWrapperIcon="InterfaceEssentialRemoveAddAdd6"
      :textlinkIcon="textlinkIcon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import { useRoute } from "vue-router";
import DetailansichtWrapper from "../components/DetailansichtWrapper.vue";
import InterfaceEssential from "../components/InterfaceEssential.vue";
import ArrowsDiagramsArrowsArrowLeft3 from "../icons/ArrowsDiagramsArrowsArrowLeft3.vue";
import InterfaceEssentialRemoveAddAdd6 from "../icons/InterfaceEssentialRemoveAddAdd6.vue";

export default defineComponent({
  name: "TranslationOverview",
  components: {
    DetailansichtWrapper,
    InterfaceEssential,
    ArrowsDiagramsArrowsArrowLeft3,
    InterfaceEssentialRemoveAddAdd6,
  },
  setup() {
    const route = useRoute();
    const projectId = route.params.projectId;
    
    const textlinkIcon = () => {
      return h(ArrowsDiagramsArrowsArrowLeft3, {
        class: "icon-instance-node-3"
      });
    };
    
    return {
      projectId,
      textlinkIcon
    };
  }
});
</script>

<style>
.translation-overview {
  height: 820px;
  width: 1440px;
}

.translation-overview .icon-instance-node-3 {
  height: 16px !important;
  left: 0 !important;
  position: absolute !important;
  top: 3px !important;
  width: 16px !important;
}
</style>
