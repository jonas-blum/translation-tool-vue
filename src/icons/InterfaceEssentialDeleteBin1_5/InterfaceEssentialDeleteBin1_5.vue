<template>
  <svg
    :class="['interface-essential-delete-bin-1-5', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M21 4.5L19.188 21.709C19.0811 22.7267 18.2233 23.4995 17.2 23.5H6.8C5.77636 23.5 4.91797 22.727 4.811 21.709L3 4.5"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M0.5 4.5H23.5"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M7.5 4.5V1.5C7.5 0.947715 7.94772 0.5 8.5 0.5H15.5C16.0523 0.5 16.5 0.947715 16.5 1.5V4.5"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M12 9V19.5"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M16.5 9L16 19.5"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M7.5 9L8 19.5"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "InterfaceEssentialDeleteBin1_5",
  props: {
    color: {
      type: String,
      default: "black",
    },
    className: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.interface-essential-delete-bin-1-5 {
  /* Add any specific styles for the icon here if needed */
}
</style>
