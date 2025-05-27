<template>
  <svg
    :class="['interface-essential-edit-pencil-1', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      clip-rule="evenodd"
      d="M6.966 21.983L0.5 23.5L2.017 17.035L17.964 1.086C18.3391 0.710752 18.8479 0.499927 19.3785 0.499927C19.9091 0.499927 20.4179 0.710752 20.793 1.086L22.915 3.207C23.2902 3.5821 23.5011 4.09093 23.5011 4.6215C23.5011 5.15207 23.2902 5.6609 22.915 6.036L6.966 21.983Z"
      fill-rule="evenodd"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M22.21 6.745L17.257 1.793"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M20.783 8.172L15.842 3.207"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="path"
      d="M7.218 21.733L2.268 16.783"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InterfaceEssentialEditPencil1",
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
