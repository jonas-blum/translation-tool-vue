<template>
  <div :class="['div-wrapper', className]">
    <div class="group">
      <div class="navigation-menu">
        <div :class="['oval', ovalClassName]" />
        <div :class="['oval-2', ovalClassNameOverride]" />
        <div :class="['oval-3', divClassName]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DivWrapper",
  props: {
    className: {
      type: String,
      default: "",
    },
    ovalClassName: {
      type: String,
      default: "",
    },
    ovalClassNameOverride: {
      type: String,
      default: "",
    },
    divClassName: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.div-wrapper {
  height: 24px;
  width: 24px;
}

.div-wrapper .group {
  height: 5px;
  position: relative;
  top: 10px;
  width: 23px;
}

.div-wrapper .navigation-menu {
  height: 5px;
  position: relative;
}

.div-wrapper .oval {
  border: 1px solid;
  border-color: #000000;
  border-radius: 3.5px;
  height: 7px;
  left: -1px;
  position: absolute;
  top: -1px;
  width: 7px;
}

.div-wrapper .oval-2 {
  border: 1px solid;
  border-color: #000000;
  border-radius: 3.5px;
  height: 7px;
  left: 8px;
  position: absolute;
  top: -1px;
  width: 7px;
}

.div-wrapper .oval-3 {
  border: 1px solid;
  border-color: #000000;
  border-radius: 3.5px;
  height: 7px;
  left: 17px;
  position: absolute;
  top: -1px;
  width: 7px;
}
</style>
