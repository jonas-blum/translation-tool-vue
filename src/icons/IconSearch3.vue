<template>
  <svg
    class="icon-search-3"
    fill="none"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g class="g" clip-path="url(#clip0_47_7158)">
      <path
        class="path"
        :d="path1"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        class="path"
        :d="path2"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </g>
    <defs class="defs">
      <clipPath class="clip-path" id="clip0_47_7158">
        <rect class="rect" fill="white" height="20" width="20" />
      </clipPath>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconSearch3",
  props: {
    color: {
      type: String,
      default: "white",
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    path1() {
      return "M7.4636 13.261C10.6653 13.261 13.2607 10.6655 13.2607 7.46385C13.2607 4.2622 10.6653 1.66675 7.4636 1.66675C4.26195 1.66675 1.6665 4.2622 1.6665 7.46385C1.6665 10.6655 4.26195 13.261 7.4636 13.261Z";
    },
    path2() {
      return "M11.562 11.5625L18.333 18.3335";
    },
  },
});
</script>

<style>
.icon-search-3 {
  /* Add any specific styles for the icon here if needed */
}
</style>
