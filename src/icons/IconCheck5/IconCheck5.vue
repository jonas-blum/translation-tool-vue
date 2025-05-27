<template>
  <svg
    :class="['icon-check-5', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M23.5 0.499L7 23.499L0.5 16.999"
      stroke="#6E49FF"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconCheck5",
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
