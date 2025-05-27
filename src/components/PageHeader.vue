<template>
  <div :class="['page-header', className]">
    <div class="text-wrapper-2">jls.</div>
    <div class="frame">
      <component :is="icon" />
      <UsersGeometricCloseUpSingleUserNeutralSingleNeutral3 class="icon-instance-node" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, h } from "vue";
import InterfaceEssentialSettingCog1_5 from "../icons/InterfaceEssentialSettingCog1_5.vue";
import UsersGeometricCloseUpSingleUserNeutralSingleNeutral3 from "../icons/UsersGeometricCloseUpSingleUserNeutralSingleNeutral3.vue";

export default defineComponent({
  name: "PageHeader",
  components: {
    InterfaceEssentialSettingCog1_5,
    UsersGeometricCloseUpSingleUserNeutralSingleNeutral3,
  },
  props: {
    className: {
      type: String,
      default: "",
    },
    icon: {
      type: Function,
      default: () => h(InterfaceEssentialSettingCog1_5, { class: "icon-instance-node" })
    },
  },
});
</script>

<style>
.page-header {
  align-items: center;
  background-color: var(--jls-colourswhite);
  box-shadow: var(--card-shadow);
  display: flex;
  justify-content: space-between;
  padding: 16px 64px;
  position: relative;
  width: 1440px;
}

.page-header .text-wrapper-2 {
  color: #000000;
  font-family: "Gilroy-ExtraBold", Helvetica;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 44px;
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.page-header .frame {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 24px;
  position: relative;
}

.page-header .icon-instance-node {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}
</style>
