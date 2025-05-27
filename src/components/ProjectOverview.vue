<template>
  <div class="project-overview">
    <PageHeader
      class="design-component-instance-node"
      :icon="pageHeaderIcon"
    />
    <div class="frame-3">
      <div class="frame-4">
        <div class="frame-5">
          <div class="text-wrapper-5">Projects</div>
        </div>
      </div>

      <div class="frame-6">
        <div class="frame-7">
          <div class="tabs">
            <div class="tabs-template">
              <div class="tabs-2">
                <Tab
                  class="design-component-instance-node"
                  :icon="false"
                  text="All"
                  type="active"
                />
                <Tab
                  class="design-component-instance-node"
                  :icon="false"
                  text1="Recents"
                  type="default"
                />
                <Tab
                  class="design-component-instance-node"
                  :icon="false"
                  text1="Favorites"
                  type="default"
                />
              </div>
            </div>
          </div>

          <div class="frame-8">
            <div class="content-wrapper">
              <div class="content">
                <InterfaceEssentialRemoveAddAdd6 class="interface-essential" />
                <button class="button-2">Create Project</button>
              </div>
            </div>

            <div class="search">
              <div class="field-2">
                <div class="content-2">
                  <div class="search-something">Search in Projects</div>
                  <IconSearch3 class="icon-search" color="#0291E1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="table">
          <div class="table-header">
            <TableFilter
              class="design-component-instance-node"
              text="Project name"
            />
            <div class="ID-last-update">
              <div class="project-name-wrapper">
                <div class="project-name-2">ID</div>
              </div>

              <div class="table-filter-2">
                <div class="project-name-2">Last update</div>
              </div>
            </div>
          </div>

          <RowItemProjects
            class="row-item-projects-instance"
            divClassName="row-item-projects-2"
            divClassNameOverride="row-item-projects-2"
            state="default-white"
            to="/bekb/components"
            :index="0"
          />
          <RowItemProjects
            class="row-item-projects-instance"
            divClassName="row-item-projects-2"
            divClassNameOverride="row-item-projects-2"
            state="default-white"
            to="/raiffeisen/components"
            :index="1"
          />
          <RowItemProjects
            class="row-item-projects-instance"
            divClassName="row-item-projects-2"
            divClassNameOverride="row-item-projects-2"
            state="default-white"
            to="/ubs/components"
            :index="2"
          />
          <RowItemProjects
            class="row-item-projects-instance"
            divClassName="row-item-projects-2"
            divClassNameOverride="row-item-projects-2"
            state="default-white"
            to="/postfinance/components"
            :index="3"
          />
          <RowItemProjects
            class="row-item-projects-instance"
            divClassName="row-item-projects-2"
            divClassNameOverride="row-item-projects-2"
            state="default-white"
            to="/creditsuisse/components"
            :index="4"
          />
          <RowItemProjects
            class="row-item-projects-instance"
            divClassName="row-item-projects-2"
            divClassNameOverride="row-item-projects-2"
            state="default-white"
            to="/migrosbank/components"
            :index="5"
          />
          <RowItemProjects
            class="row-item-projects-instance"
            divClassName="row-item-projects-2"
            divClassNameOverride="row-item-projects-2"
            state="default-white"
            to="/valiant/components"
            :index="6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, h } from "vue";
import IconSearch3 from "../icons/IconSearch3.vue";
import InterfaceEssentialRemoveAddAdd6 from "../icons/InterfaceEssentialRemoveAddAdd6.vue";
import InterfaceEssentialSettingCog1_5 from "../icons/InterfaceEssentialSettingCog1_5.vue";
import PageHeader from "./PageHeader.vue";
import RowItemProjects from "./RowItemProjects.vue";
import Tab from "./Tab.vue";
import TableFilter from "./TableFilter.vue";

export default defineComponent({
  name: "ProjectOverview",
  components: {
    IconSearch3,
    InterfaceEssentialRemoveAddAdd6,
    InterfaceEssentialSettingCog1_5,
    PageHeader,
    RowItemProjects,
    Tab,
    TableFilter,
  },
  props: {
    pageHeaderIcon: {
      type: Function,
      default: () => h(InterfaceEssentialSettingCog1_5, { class: "interface-essential-setting-cog-1-3" })
    },
  },
});
</script>

<style>
.project-overview {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 96px;
  position: relative;
  width: 1440px;
}

.project-overview .design-component-instance-node {
  flex: 0 0 auto !important;
}

.project-overview .frame-3 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 48px;
  padding: 48px 0px 0px;
  position: relative;
  width: 1312px;
}

.project-overview .frame-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 32px;
  position: relative;
  width: 100%;
}

.project-overview .frame-5 {
  align-items: center;
  display: flex;
  gap: 8px;
  position: relative;
  width: 128px;
}

.project-overview .text-wrapper-5 {
  color: #000000;
  font-family: var(--h1-font-family);
  font-size: var(--h1-font-size);
  font-style: var(--h1-font-style);
  font-weight: var(--h1-font-weight);
  letter-spacing: var(--h1-letter-spacing);
  line-height: var(--h1-line-height);
  margin-right: -9.00px;
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.project-overview .frame-6 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.project-overview .frame-7 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.project-overview .tabs {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  position: relative;
}

.project-overview .tabs-template {
  align-items: flex-start;
  background-color: var(--jls-colourscirrus);
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  height: 48px;
  justify-content: center;
  position: relative;
}

.project-overview .tabs-2 {
  align-items: center;
  border-radius: 6px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  justify-content: center;
  padding: 4px 10px;
  position: relative;
}

.project-overview .frame-8 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 32px;
  position: relative;
}

.project-overview .content-wrapper {
  align-items: center;
  background-color: var(--jls-colourswhite);
  border: 1.5px solid;
  border-color: var(--jls-coloursneso);
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 13px 20px;
  position: relative;
  width: 196px;
}

.project-overview .content {
  align-items: center;
  align-self: stretch;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.project-overview .interface-essential {
  height: 16.17px !important;
  margin-left: -0.08px !important;
  position: relative !important;
  width: 16.17px !important;
}

.project-overview .button-2 {
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

.project-overview .search {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 311px;
}

.project-overview .field-2 {
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

.project-overview .content-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;
}

.project-overview .search-something {
  color: var(--jls-coloursnimbus);
  flex: 1;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
}

.project-overview .icon-search {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}

.project-overview .table {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.project-overview .table-header {
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

.project-overview .ID-last-update {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 48px;
  position: relative;
}

.project-overview .project-name-wrapper {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  position: relative;
  width: 125px;
}

.project-overview .project-name-2 {
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

.project-overview .table-filter-2 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  position: relative;
  width: 133px;
}

.project-overview .row-item-projects-instance {
  align-self: stretch !important;
  flex: 0 0 auto !important;
  width: 100% !important;
}

.project-overview .row-item-projects-2 {
  font-family: var(--body-CTA-regular-font-family) !important;
  font-size: var(--body-CTA-regular-font-size) !important;
  font-style: var(--body-CTA-regular-font-style) !important;
  font-weight: var(--body-CTA-regular-font-weight) !important;
  letter-spacing: var(--body-CTA-regular-letter-spacing) !important;
  line-height: var(--body-CTA-regular-line-height) !important;
}

.project-overview .interface-essential-setting-cog-1-3 {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}
</style>
