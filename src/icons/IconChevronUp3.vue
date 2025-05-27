<template>
  <svg
    :class="['icon-chevron-up-3', className]"
    fill="none"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M3.33325 6.6665L9.29281 12.6261C9.68334 13.0166 10.3165 13.0166 10.707 12.6261L16.6666 6.66651"
      stroke="#111111"
      stroke-linecap="round"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconChevronUp3",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
</style>
