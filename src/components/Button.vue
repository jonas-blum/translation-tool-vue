<template>
  <button :class="['button', typePrimaryStatusClassName]" @click="navigateTo" style="cursor: pointer;">
    <div class="div">{{ text }}</div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean,
      required: true,
    },
    typePrimaryStatusClassName: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "Button",
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
.button {
  all: unset;
  align-items: center;
  background-color: var(--jls-coloursneso);
  border: 1px solid;
  border-color: var(--jls-coloursneso);
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 13px 20px;
  position: relative;
  width: 311px;
}

.button .div {
  color: var(--lighttext-colourcontrast-text);
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
