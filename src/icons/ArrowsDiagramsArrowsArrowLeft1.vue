<template>
  <svg
    :class="['arrows-diagrams-arrows-arrow-left-1', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M18.4 0.5L5.825 11.626C5.71806 11.7209 5.65685 11.857 5.65685 12C5.65685 12.143 5.71806 12.2791 5.825 12.374L18.4 23.5"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowsDiagramsArrowsArrowLeft1",
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
