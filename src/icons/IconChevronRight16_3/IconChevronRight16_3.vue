<template>
  <svg
    :class="['icon-chevron-right-16-3', className]"
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      :d="pathData"
      :stroke="color"
      stroke-linecap="round"
      stroke-width="1.5"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconChevronRight16_3",
  props: {
    color: {
      type: String,
      default: "#6E49FF",
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    pathData() {
      return "M5.33325 14.3335L10.9595 8.70727C11.35 8.31674 11.35 7.68358 10.9595 7.29306L5.33325 1.66683";
    },
  },
});
</script>

<style>
</style>
