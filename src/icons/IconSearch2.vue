<template>
  <svg
    :class="['icon-search-2', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M8.95652 15.9131C12.7985 15.9131 15.913 12.7985 15.913 8.95653C15.913 5.11454 12.7985 2 8.95652 2C5.11454 2 2 5.11454 2 8.95653C2 12.7985 5.11454 15.9131 8.95652 15.9131Z"
      stroke="#3530C3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
    <path
      class="path"
      d="M13.8749 13.8748L22.0001 22"
      stroke="#3530C3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconSearch2",
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
