<template>
  <div :class="['row-item-admin', className]">
    <div class="text-wrapper-6">888888</div>
    <div class="text-wrapper-7">Example Project</div>
    <div class="text-wrapper-6">08.06.2023, 22:42</div>
    <div class="text-wrapper-8">CH_DE</div>
    <div class="frame-9">
      <div class="text-wrapper-9">GB_EN, PT_PT, FR_FR</div>
      <div class="element-more-wrapper">
        <div class="element-more">{{ text }}</div>
      </div>
    </div>
    <div class="checkbox-container">
      <div class="checkbox">
        <div class="checkbox-active">
          <IconCheck2 class="icon-check" />
        </div>
      </div>
    </div>
    <InterfaceEssentialWrapper />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconCheck2 from "../icons/IconCheck2.vue";
import InterfaceEssentialWrapper from "./InterfaceEssentialWrapper.vue";

export default defineComponent({
  name: "RowItemAdmin",
  components: {
    IconCheck2,
    InterfaceEssentialWrapper,
  },
  props: {
    state: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "+4 more",
    },
  },
});
</script>

<style>
.row-item-admin {
  align-items: center;
  background-color: var(--jls-colourswhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--lightsupport-colourssupport-03);
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  width: 1312px;
}

.row-item-admin .text-wrapper-6 {
  color: #000000;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.row-item-admin .text-wrapper-7 {
  color: #000000;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  position: relative;
  width: 360px;
}

.row-item-admin .text-wrapper-8 {
  color: #000000;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  position: relative;
  width: 148px;
}

.row-item-admin .frame-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  padding: 0px 8px;
  position: relative;
  width: 215px;
}

.row-item-admin .text-wrapper-9 {
  color: #000000;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
  width: 199px;
}

.row-item-admin .element-more-wrapper {
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-color: var(--jls-colourseclipse);
  height: 22px;
  position: relative;
  width: 68px;
}

.row-item-admin .element-more {
  color: var(--jls-colourseclipse);
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  left: 0;
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  position: absolute;
  top: -1px;
  white-space: nowrap;
}

.row-item-admin .checkbox-container {
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 0px 0px 0px 16px;
  position: relative;
  width: 81px;
}

.row-item-admin .checkbox {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
}

.row-item-admin .checkbox-active {
  background-color: var(--jls-coloursneso);
  height: 20px;
  position: relative;
  width: 20px;
}

.row-item-admin .icon-check {
  height: 9px !important;
  left: 6px !important;
  position: absolute !important;
  top: 6px !important;
  width: 9px !important;
}
</style>
