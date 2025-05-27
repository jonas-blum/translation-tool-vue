<template>
  <svg
    :class="['interface-essential-remove-add-add-1', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M12 1V23"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M23 12H1"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InterfaceEssentialRemoveAddAdd1",
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
