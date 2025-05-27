<template>
  <div :class="['row-item-projects', className]" @click="navigateTo" style="cursor: pointer;">
    <div class="text-wrapper-3">Example Project</div>
    <div class="frame-2">
      <div :class="['text-wrapper-4', divClassName]">2439782</div>
      <div :class="['text-wrapper-3', divClassNameOverride]">08.06.2023, 22:42</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RowItemProjects",
  props: {
    state: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    divClassName: {
      type: String,
      default: "",
    },
    divClassNameOverride: {
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
        // Map old routes to new routes
        let route = props.to;
        if (props.to === '/componentu45overviewu45page') {
          route = '/bekb/components';
        }
        
        // Use string path to avoid router issues
        router.push(route);
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
.row-item-projects {
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

.row-item-projects .text-wrapper-3 {
  color: #000000;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.row-item-projects .frame-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 48px;
  justify-content: center;
  position: relative;
}

.row-item-projects .text-wrapper-4 {
  color: #000000;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
  width: 125px;
}
</style>
