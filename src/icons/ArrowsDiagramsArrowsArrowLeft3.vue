<template>
  <svg
    :class="['arrows-diagrams-arrows-arrow-left-3', className]"
    fill="none"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M1.50464 9H16.4953"
      stroke="#0291E1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
    <path
      class="path"
      d="M9.49552 1.66675L1.73352 8.49941C1.59002 8.62597 1.50781 8.80808 1.50781 8.99941C1.50781 9.19075 1.59002 9.37286 1.73352 9.49941L9.49552 16.3334"
      stroke="#0291E1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowsDiagramsArrowsArrowLeft3",
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
