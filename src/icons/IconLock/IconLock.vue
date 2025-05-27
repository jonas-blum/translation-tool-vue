<template>
  <svg
    :class="['icon-lock', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g class="g" clip-path="url(#clip0_4_318)">
      <path
        class="path"
        d="M12.3913 15.1304C12.8236 15.1304 13.1739 14.78 13.1739 14.3478C13.1739 13.9156 12.8236 13.5652 12.3913 13.5652C11.9591 13.5652 11.6087 13.9156 11.6087 14.3478C11.6087 14.78 11.9591 15.1304 12.3913 15.1304Z"
        stroke="#8C99AD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="path"
        d="M12.3913 15.1304V17.4783"
        stroke="#717888"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="path"
        d="M18.2609 10.0435H6.52174C6.08952 10.0435 5.73913 10.3939 5.73913 10.8261V20.2174C5.73913 20.6496 6.08952 21 6.52174 21H18.2609C18.6931 21 19.0435 20.6496 19.0435 20.2174V10.8261C19.0435 10.3939 18.6931 10.0435 18.2609 10.0435Z"
        stroke="#717888"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="path"
        clip-rule="evenodd"
        d="M8.08697 7.30435C8.08697 4.92712 10.0141 3 12.3913 3C14.7685 3 16.6957 4.92712 16.6957 7.30435V10.0435H8.08697V7.30435Z"
        fill-rule="evenodd"
        stroke="#717888"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs class="defs">
      <clipPath class="clip-path" id="clip0_4_318">
        <rect class="rect" fill="white" height="24" width="24" />
      </clipPath>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconLock",
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
