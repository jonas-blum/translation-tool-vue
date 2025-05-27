<template>
  <div :class="['table-filter', className]">
    <div class="project-name">{{ text }}</div>
    <div class="icon-wrapper">
      <div class="icon-chevron-up-wrapper">
        <IconChevronUp3 class="icon-chevron-up" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconChevronUp3 from "../icons/IconChevronUp3.vue";

export default defineComponent({
  name: "TableFilter",
  components: {
    IconChevronUp3
  },
  props: {
    className: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Project name",
    },
  },
});
</script>

<style>
.table-filter {
  align-items: flex-start;
  display: inline-flex;
  gap: 8px;
  position: relative;
}

.table-filter .project-name {
  color: #000000;
  font-family: var(--body-CTA-bold-font-family);
  font-size: var(--body-CTA-bold-font-size);
  font-style: var(--body-CTA-bold-font-style);
  font-weight: var(--body-CTA-bold-font-weight);
  letter-spacing: var(--body-CTA-bold-letter-spacing);
  line-height: var(--body-CTA-bold-line-height);
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.table-filter .icon-wrapper {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 3px 0px 0px;
  position: relative;
}

.table-filter .icon-chevron-up-wrapper {
  align-items: flex-start;
  display: flex;
  height: 20px;
  padding: 1px 0px 0px;
  position: relative;
  transform: rotate(180deg);
  width: 20px;
}

.table-filter .icon-chevron-up {
  height: 20px !important;
  margin-bottom: -1.00px !important;
  position: relative !important;
  transform: rotate(-180deg) !important;
  width: 20px !important;
}
</style>
