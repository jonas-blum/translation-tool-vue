<template>
  <InterfaceEssentialEditPencil1 class="interface-essential-edit-pencil-1" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InterfaceEssentialEditPencil1 from "../icons/InterfaceEssentialEditPencil1.vue";

export default defineComponent({
  name: "InterfaceEssentialWrapper",
  components: {
    InterfaceEssentialEditPencil1
  }
});
</script>

<style>
.interface-essential-edit-pencil-1 {
  height: 24px !important;
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
  width: 24px !important;
}
</style>
