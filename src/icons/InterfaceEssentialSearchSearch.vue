<template>
  <svg
    :class="['interface-essential-search-search', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="circle"
      cx="8.5"
      cy="8.5"
      r="8"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M14.156 14.156L23.5 23.5"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InterfaceEssentialSearchSearch",
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
