<template>
  <div :class="['textlink', className]" @click="navigateTo" style="cursor: pointer;">
    <div class="icon-chevron-right-wrapper">
      <component :is="override" v-if="override" />
      <IconChevronRight16_3 v-else class="icon-chevron-right" color="#0291E1" />
    </div>
    <div :class="['text', status]">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";
import IconChevronRight16_3 from "../icons/IconChevronRight16_3/IconChevronRight16_3.vue";

export default defineComponent({
  name: "Textlink",
  components: {
    IconChevronRight16_3,
  },
  props: {
    status: {
      type: String as PropType<"touch" | "default">,
      required: true,
    },
    icon: {
      type: Boolean,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    override: {
      type: Function,
      default: null
    },
    text: {
      type: String,
      default: "Textlink",
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
        if (props.to === '/projectu45overviewu45page') {
          route = '/';
        } else if (props.to === '/settingsu45page') {
          route = '/settings';
        } else if (props.to === '/componentu45overviewu45page') {
          route = '/bekb/components';
        } else if (props.to === '/translationu45overviewu45page') {
          route = '/bekb/components/header';
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
.textlink {
  align-items: flex-start;
  display: inline-flex;
  gap: 8px;
  position: relative;
}

.textlink .icon-chevron-right-wrapper {
  height: 22px;
  position: relative;
  width: 16px;
}

.textlink .text {
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

.textlink .icon-chevron-right {
  height: 16px !important;
  left: 0 !important;
  position: absolute !important;
  top: 3px !important;
  width: 16px !important;
}

.textlink .default {
  color: var(--jls-coloursneso);
}

.textlink .touch {
  color: var(--jls-coloursneptune);
}
</style>
