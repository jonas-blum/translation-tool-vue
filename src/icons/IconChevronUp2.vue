<template>
  <svg
    :class="['icon-chevron-up-2', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M20 16L12.7071 8.70711C12.3166 8.31658 11.6834 8.31658 11.2929 8.70711L4 16"
      stroke="#3530C3"
      stroke-linecap="round"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconChevronUp2",
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
