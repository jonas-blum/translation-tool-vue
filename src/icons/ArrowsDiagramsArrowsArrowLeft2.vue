<template>
  <svg
    :class="['arrows-diagrams-arrows-arrow-left-2', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M0.757 12H23.243"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M12.743 1L1.1 11.249C0.88475 11.4388 0.761438 11.712 0.761438 11.999C0.761438 12.286 0.88475 12.5592 1.1 12.749L12.743 23"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowsDiagramsArrowsArrowLeft2",
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
