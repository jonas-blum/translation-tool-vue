<template>
  <div :class="['tab', type, className]">
    <div class="default-2">
      <template v-if="type === 'default'">
        {{ text1 }}
      </template>
      <template v-if="type === 'active'">
        {{ text }}
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab",
  props: {
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Active",
    },
    text1: {
      type: String,
      default: "Default",
    },
  },
});
</script>

<style>
.tab {
  align-items: center;
  display: inline-flex;
  gap: 16px;
  height: 40px;
  justify-content: center;
  padding: 10px 20px;
  position: relative;
}

.tab .default-2 {
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -2.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.tab.active {
  background-color: var(--lightbackgroundmain);
  border: 1px solid;
  border-color: var(--jls-colourseclipse);
}

.tab.active .default-2 {
  color: var(--jls-colourseclipse);
}

.tab.default .default-2 {
  color: var(--lighttext-colourmain-text);
}
</style>
