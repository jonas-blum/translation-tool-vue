<template>
  <div class="detailansicht-wrapper">
    <PageHeader
      class="design-component-instance-node-4"
      :icon="pageHeaderIcon"
    />
    <div class="frame-21">
      <div class="frame-22">
        <Textlink
          class="design-component-instance-node-4"
          icon
          :override="textlinkIcon"
          status="default"
          text="Raiffeisen"
          :to="backLink"
        />
        <div class="frame-23">
          <div class="frame-24">
            <p class="p">Raiffeisen / General / Header</p>
            <StatusDefaultIconWrapper
              class="textlink-instance"
              icon
              :override="statusDefaultIconWrapperIcon"
              status="default"
              text="Add description"
              textClassName="textlink-2"
            />
          </div>
          <div class="frame-25">
            <div class="button-5" @click="addNewKey">
              <div class="content-5">
                <InterfaceEssentialRemoveAddAdd6 class="interface-essential-remove-add-add-7" />
                <button class="button-6">New Key</button>
              </div>
            </div>
            <div class="search-2">
              <div class="field-5">
                <div class="content-6">
                  <div class="search-something-3">Search in keys</div>
                  <IconSearch3 class="icon-search-6" color="#0291E1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs-content-2">
        <div class="table-3">
          <div class="table-header-4">
            <TableFilter class="table-filter-10" text="Key" />
            <div class="table-filter-11">
              <div class="project-name-5">CH_DE</div>
            </div>
            <div class="table-filter-11">
              <div class="project-name-5">EN_GB</div>
            </div>
            <div class="table-filter-11">
              <div class="project-name-5">FR_FR</div>
            </div>
            <div class="table-filter-11">
              <div class="project-name-5">PT_PT</div>
            </div>
            <InterfaceEssentialDeleteBin1_5Wrapper />
          </div>
          <StateDefaultWrapper
            class="row-item-admin-3"
            divClassName="row-item-admin-4"
            state="default"
            :index="0"
          />
          <StateDefaultWrapper
            class="row-item-admin-3"
            divClassName="row-item-admin-4"
            state="default"
            :index="1"
          />
          <StateDefaultWrapper
            class="row-item-admin-3"
            divClassName="row-item-admin-4"
            state="default"
            :index="2"
          />
          <StateDefaultWrapper
            class="row-item-admin-3"
            divClassName="row-item-admin-4"
            state="default"
            :index="3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, h, computed } from "vue";
import { useRoute } from "vue-router";
import ArrowsDiagramsArrowsArrowLeft3 from "../icons/ArrowsDiagramsArrowsArrowLeft3.vue";
import IconSearch3 from "../icons/IconSearch3.vue";
import InterfaceEssentialRemoveAddAdd6 from "../icons/InterfaceEssentialRemoveAddAdd6.vue";
import InterfaceEssentialSettingCog1_5 from "../icons/InterfaceEssentialSettingCog1_5.vue";
import InterfaceEssentialDeleteBin1_5Wrapper from "./InterfaceEssentialDeleteBin1_5Wrapper.vue";
import PageHeader from "./PageHeader.vue";
import StateDefaultWrapper from "./StateDefaultWrapper.vue";
import StatusDefaultIconWrapper from "./StatusDefaultIconWrapper.vue";
import TableFilter from "./TableFilter.vue";
import Textlink from "./Textlink.vue";

export default defineComponent({
  name: "DetailansichtWrapper",
  components: {
    PageHeader,
    Textlink,
    StatusDefaultIconWrapper,
    InterfaceEssentialRemoveAddAdd6,
    InterfaceEssentialDeleteBin1_5Wrapper,
    StateDefaultWrapper,
    TableFilter,
    IconSearch3,
    ArrowsDiagramsArrowsArrowLeft3,
    InterfaceEssentialSettingCog1_5,
  },
  props: {
    pageHeaderIcon: {
      type: Function,
      default: () => h(InterfaceEssentialSettingCog1_5, { class: "interface-essential-2" })
    },
    textlinkIcon: {
      type: Function,
      default: () => h(ArrowsDiagramsArrowsArrowLeft3, { class: "icon-instance-node-2" })
    },
    statusDefaultIconWrapperIcon: {
      type: Function,
      default: () => h(InterfaceEssentialRemoveAddAdd6, { class: "icon-instance-node-2" })
    },
  },
  setup() {
    const route = useRoute();
    const projectId = route.params.projectId || 'bekb';
    
    const backLink = computed(() => `/${projectId}/components`);
    
    // Function to add a new translation key
    const addNewKey = () => {
      // In a real app, this would open a modal or form to add a new key
      alert('Add new translation key functionality would be implemented here');
    };
    
    // Function to search in keys
    const searchInKeys = (event: Event) => {
      const target = event.target as HTMLInputElement;
      // In a real app, this would filter the list of keys
      console.log('Searching for:', target.value);
    };
    
    return {
      backLink,
      addNewKey,
      searchInKeys
    };
  }
});
</script>

<style>
.detailansicht-wrapper {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 96px;
  position: relative;
  width: 1440px;
}

.detailansicht-wrapper .design-component-instance-node-4 {
  flex: 0 0 auto !important;
}

.detailansicht-wrapper .frame-21 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  padding: 48px 0px;
  position: relative;
  width: 1312px;
}

.detailansicht-wrapper .frame-22 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 32px;
  position: relative;
  width: 100%;
}

.detailansicht-wrapper .frame-23 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.detailansicht-wrapper .frame-24 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-end;
  position: relative;
}

.detailansicht-wrapper .p {
  color: #000000;
  font-family: var(--h1-font-family);
  font-size: var(--h1-font-size);
  font-style: var(--h1-font-style);
  font-weight: var(--h1-font-weight);
  letter-spacing: var(--h1-letter-spacing);
  line-height: var(--h1-line-height);
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.detailansicht-wrapper .textlink-instance {
  display: inline-flex !important;
  flex: 0 0 auto !important;
  gap: 8px !important;
  width: unset !important;
}

.detailansicht-wrapper .textlink-2 {
  color: var(--jls-coloursneso) !important;
  flex: unset !important;
  font-family: var(--body-CTA-medium-font-family) !important;
  font-size: var(--body-CTA-medium-font-size) !important;
  font-style: var(--body-CTA-medium-font-style) !important;
  font-weight: var(--body-CTA-medium-font-weight) !important;
  letter-spacing: var(--body-CTA-medium-letter-spacing) !important;
  line-height: var(--body-CTA-medium-line-height) !important;
  white-space: nowrap !important;
  width: fit-content !important;
}

.detailansicht-wrapper .frame-25 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 32px;
  position: relative;
}

.detailansicht-wrapper .button-5 {
  align-items: center;
  background-color: var(--jls-colourswhite);
  border: 1.5px solid;
  border-color: var(--jls-coloursneso);
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 13px 20px;
  position: relative;
  width: 149px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.detailansicht-wrapper .button-5:hover {
  background-color: rgba(2, 145, 225, 0.05);
}

.detailansicht-wrapper .content-5 {
  align-items: center;
  align-self: stretch;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.detailansicht-wrapper .interface-essential-remove-add-add-7 {
  height: 16.17px !important;
  margin-left: -0.08px !important;
  position: relative !important;
  width: 16.17px !important;
}

.detailansicht-wrapper .button-6 {
  all: unset;
  box-sizing: border-box;
  color: var(--jls-coloursneso);
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.detailansicht-wrapper .search-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 311px;
}

.detailansicht-wrapper .field-5 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--lightbackgroundlm-white);
  border: 1px solid;
  border-color: var(--jls-colourseclipse);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  padding: 13px 12px;
  position: relative;
  width: 100%;
}

.detailansicht-wrapper .content-6 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;
}

.detailansicht-wrapper .search-input {
  color: var(--jls-colourseclipse);
  flex: 1;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
}

.detailansicht-wrapper .search-input::placeholder {
  color: var(--jls-coloursnimbus);
}

.detailansicht-wrapper .icon-search-6 {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}

.detailansicht-wrapper .tabs-content-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.detailansicht-wrapper .table-3 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.detailansicht-wrapper .table-header-4 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--lightsupport-colourssupport-03);
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  width: 100%;
}

.detailansicht-wrapper .table-filter-10 {
  display: flex !important;
  width: 228px !important;
}

.detailansicht-wrapper .table-filter-11 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  position: relative;
  width: 228px;
}

.detailansicht-wrapper .project-name-5 {
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

.detailansicht-wrapper .row-item-admin-3 {
  align-self: stretch !important;
  width: 100% !important;
}

.detailansicht-wrapper .row-item-admin-4 {
  font-family: var(--body-CTA-regular-font-family) !important;
  font-size: var(--body-CTA-regular-font-size) !important;
  font-style: var(--body-CTA-regular-font-style) !important;
  font-weight: var(--body-CTA-regular-font-weight) !important;
  letter-spacing: var(--body-CTA-regular-letter-spacing) !important;
  line-height: var(--body-CTA-regular-line-height) !important;
}

.detailansicht-wrapper .interface-essential-2 {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}

.detailansicht-wrapper .icon-instance-node-2 {
  height: 16px !important;
  left: 0 !important;
  position: absolute !important;
  top: 3px !important;
  width: 16px !important;
}
</style>
