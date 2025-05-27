<template>
  <svg
    :class="['icon-check-2', className]"
    fill="none"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M8.83341 1.16626L3.33341 8.83293L1.16675 6.66626"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconCheck2",
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
