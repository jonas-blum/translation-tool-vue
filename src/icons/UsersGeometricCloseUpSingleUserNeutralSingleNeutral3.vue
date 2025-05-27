<template>
  <svg
    :class="['users-geometric-close-up-single-user-neutral-single-neutral-3', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="circle"
      cx="12"
      cy="12"
      r="11.5"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      class="circle"
      cx="12"
      cy="8.75"
      r="4.25"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M18.317 18.5001C17.1617 16.0576 14.7019 14.5 12 14.5C9.2981 14.5 6.83829 16.0576 5.68301 18.5001"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsersGeometricCloseUpSingleUserNeutralSingleNeutral3",
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
