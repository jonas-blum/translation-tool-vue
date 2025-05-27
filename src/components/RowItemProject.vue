<template>
  <div :class="['row-item-project', className]" @click="navigateTo" style="cursor: pointer;">
    <div class="text-wrapper-14">Example View</div>
    <InterfaceEssentialDeleteBin1_5
      class="interface-essential-delete-bin-1-15"
      color="#0291E1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import InterfaceEssentialDeleteBin1_5 from "../icons/InterfaceEssentialDeleteBin1_5/InterfaceEssentialDeleteBin1_5.vue";

export default defineComponent({
  name: "RowItemProject",
  components: {
    InterfaceEssentialDeleteBin1_5,
  },
  props: {
    state: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    
    const navigateTo = () => {
      try {
        if (props.to) {
          // Map old routes to new routes
          let route = props.to;
          if (props.to === '/translationu45overviewu45page') {
            route = '/bekb/components/header';
          }
          
          // Use string path to avoid router issues
          router.push(route);
        }
      } catch (error) {
        console.error('Navigation error:', error);
      }
    };
    
    return {
      navigateTo
    };
  }
});
</script>

<style>
.row-item-project {
  align-items: center;
  background-color: var(--lightbackgroundmain);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--lightsupport-colourssupport-03);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  width: 1312px;
}

.row-item-project .text-wrapper-14 {
  color: #000000;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.row-item-project .interface-essential-delete-bin-1-15 {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}
</style>
