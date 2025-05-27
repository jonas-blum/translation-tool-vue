<template>
  <div :class="['status-default-icon-wrapper', className]" @click="handleClick">
    <div class="icon-3">
      <component :is="override" />
    </div>
    <div :class="['text-2', textClassName]">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, h } from "vue";
import IconChevronRight16_3 from "../icons/IconChevronRight16_3/IconChevronRight16_3.vue";

export default defineComponent({
  name: "StatusDefaultIconWrapper",
  components: {
    IconChevronRight16_3,
  },
  props: {
    status: {
      type: String as PropType<"default">,
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
      default: () => h(IconChevronRight16_3, { 
        class: "icon-chevron-right-16-3", 
        color: "#6E49FF" 
      })
    },
    textClassName: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Textlink",
    },
  },
  setup(props) {
    const handleClick = () => {
      // In a real app, this would open a modal or form to add a description
      alert('Add description functionality would be implemented here');
    };
    
    return {
      handleClick
    };
  },
});
</script>

<style>
.status-default-icon-wrapper {
  align-items: flex-start;
  display: flex;
  gap: 4px;
  position: relative;
  width: 311px;
  cursor: pointer;
}

.status-default-icon-wrapper .icon-3 {
  height: 22px;
  position: relative;
  width: 16px;
}

.status-default-icon-wrapper .text-2 {
  color: var(--lightaction-colourmain);
  flex: 1;
  font-family: var(--body-CTA-17-regular-font-family);
  font-size: var(--body-CTA-17-regular-font-size);
  font-style: var(--body-CTA-17-regular-font-style);
  font-weight: var(--body-CTA-17-regular-font-weight);
  letter-spacing: var(--body-CTA-17-regular-letter-spacing);
  line-height: var(--body-CTA-17-regular-line-height);
  margin-top: -1.00px;
  position: relative;
}

.status-default-icon-wrapper .icon-chevron-right-16-3 {
  height: 16px !important;
  left: 0 !important;
  position: absolute !important;
  top: 3px !important;
  width: 16px !important;
}

.status-default-icon-wrapper:hover {
  opacity: 0.8;
}
</style>
