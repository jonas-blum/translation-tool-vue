<template>
  <svg
    :class="['interface-essential-remove-add-add-6', className]"
    fill="none"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M9 1.66675V16.3334"
      stroke="#0291E1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
    <path
      class="path"
      d="M16.3333 9H1.66663"
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
  name: "InterfaceEssentialRemoveAddAdd6",
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
