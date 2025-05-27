<template>
  <div class="admin-preferences">
    <PageHeader
      class="design-component-instance-node-2"
      :icon="pageHeaderIcon"
    />
    <div class="frame-10">
      <div class="frame-11">
        <Textlink
          class="design-component-instance-node-2"
          icon
          :override="textlinkIcon"
          status="default"
          text="Projects"
          to="/projectu45overviewu45page"
        />
        <div class="frame-12">
          <div class="frame-13">
            <div class="text-wrapper-10">Admin Preferences</div>
          </div>
        </div>
      </div>

      <div class="tabs-content">
        <div class="tabs-wrapper">
          <div class="tabs-template-wrapper">
            <div class="tabs-template-2">
              <div class="tabs-3">
                <Tab
                  class="design-component-instance-node-2"
                  :icon="false"
                  text1="Languages"
                  type="default"
                />
                <Tab
                  class="design-component-instance-node-2"
                  :icon="false"
                  text1="Users"
                  type="default"
                />
                <Tab
                  class="design-component-instance-node-2"
                  :icon="false"
                  text="Projects"
                  type="active"
                />
                <Tab
                  class="design-component-instance-node-2"
                  :icon="false"
                  text1="Assigned Users"
                  type="default"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="table-2">
          <div class="table-header-2">
            <div class="table-filter-3">
              <div class="project-name-3">ID</div>
              <div class="frame-14">
                <div class="icon-2" />
              </div>
            </div>

            <TableFilter class="table-filter-instance" text="Name" />
            <div class="table-filter-4">
              <div class="project-name-3">Last Update</div>
            </div>

            <div class="table-filter-5">
              <div class="project-name-3">Ref. Language</div>
            </div>

            <div class="table-filter-6">
              <div class="project-name-3">Available Languages</div>
            </div>

            <div class="table-filter-7">
              <div class="project-name-3">Active</div>
            </div>

            <InterfaceEssentialWrapper />
          </div>

          <div class="row-item-admin-2">
            <div class="text-wrapper-11">888888</div>
            <div class="div-2">Example Project</div>
            <div class="text-wrapper-11">08.06.2023, 22:42</div>
            <div class="text-wrapper-12">CH_DE</div>
            <div class="frame-15">
              <div class="text-wrapper-13">GB_EN, PT_PT, FR_FR</div>
            </div>
            <div class="checkbox-wrapper">
              <div class="checkbox-2">
                <div class="icon-check-wrapper">
                  <IconCheck2 class="icon-check-2" />
                </div>
              </div>
            </div>
            <InterfaceEssentialWrapper />
          </div>

          <div class="row-item-admin-2">
            <div class="text-wrapper-11">888888</div>
            <p class="div-2">
              <span class="span">Example Project with a very very </span>
              <span class="span">very very</span>
              <span class="span"> long title</span>
            </p>
            <div class="text-wrapper-11">08.06.2023, 22:42</div>
            <div class="text-wrapper-12">CH_DE</div>
            <div class="frame-15">
              <div class="text-wrapper-13">GB_EN, PT_PT, FR_FR</div>
            </div>
            <div class="checkbox-wrapper">
              <div class="checkbox-2">
                <div class="icon-check-wrapper">
                  <IconCheck2 class="icon-check-2" />
                </div>
              </div>
            </div>
            <InterfaceEssentialWrapper />
          </div>

          <div class="row-item-admin-2">
            <div class="text-wrapper-11">888888</div>
            <div class="div-2">Example Project</div>
            <div class="text-wrapper-11">08.06.2023, 22:42</div>
            <div class="text-wrapper-12">CH_DE</div>
            <div class="frame-15">
              <div class="text-wrapper-13">GB_EN, PT_PT, FR_FR</div>
            </div>
            <div class="checkbox-wrapper">
              <div class="checkbox-2">
                <div class="checkbox-inactive" />
              </div>
            </div>
            <InterfaceEssentialWrapper />
          </div>

          <RowItemAdmin
            class="row-item-admin-instance"
            state="default"
            text="+7 more"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, h } from "vue";
import ArrowsDiagramsArrowsArrowLeft3 from "../icons/ArrowsDiagramsArrowsArrowLeft3.vue";
import IconCheck2 from "../icons/IconCheck2.vue";
import InterfaceEssentialSettingCog1_5 from "../icons/InterfaceEssentialSettingCog1_5.vue";
import InterfaceEssentialWrapper from "./InterfaceEssentialWrapper.vue";
import PageHeader from "./PageHeader.vue";
import RowItemAdmin from "./RowItemAdmin.vue";
import Tab from "./Tab.vue";
import TableFilter from "./TableFilter.vue";
import Textlink from "./Textlink.vue";

export default defineComponent({
  name: "AdminPreferences",
  components: {
    ArrowsDiagramsArrowsArrowLeft3,
    IconCheck2,
    InterfaceEssentialSettingCog1_5,
    InterfaceEssentialWrapper,
    PageHeader,
    RowItemAdmin,
    Tab,
    TableFilter,
    Textlink,
  },
  props: {
    pageHeaderIcon: {
      type: Function,
      default: () => h(InterfaceEssentialSettingCog1_5, { class: "interface-essential-setting-cog-1-5-instance" })
    },
    textlinkIcon: {
      type: Function,
      default: () => h(ArrowsDiagramsArrowsArrowLeft3, { class: "arrows-diagrams" })
    },
  },
});
</script>

<style>
.admin-preferences {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 96px;
  position: relative;
  width: 1440px;
}

.admin-preferences .design-component-instance-node-2 {
  flex: 0 0 auto !important;
}

.admin-preferences .frame-10 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 48px;
  padding: 48px 0px;
  position: relative;
  width: 1312px;
}

.admin-preferences .frame-11 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 32px;
  position: relative;
}

.admin-preferences .frame-12 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  position: relative;
}

.admin-preferences .frame-13 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 32px;
  position: relative;
}

.admin-preferences .text-wrapper-10 {
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

.admin-preferences .tabs-content {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.admin-preferences .tabs-wrapper {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 705px;
  justify-content: space-around;
  position: relative;
  width: 100%;
}

.admin-preferences .tabs-template-wrapper {
  align-items: center;
  display: flex;
  gap: 10px;
  position: relative;
  width: 898px;
}

.admin-preferences .tabs-template-2 {
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

.admin-preferences .tabs-3 {
  align-items: center;
  border-radius: 6px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  justify-content: center;
  padding: 4px 10px;
  position: relative;
}

.admin-preferences .table-2 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.admin-preferences .table-header-2 {
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

.admin-preferences .table-filter-3 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  position: relative;
  width: 56px;
}

.admin-preferences .project-name-3 {
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

.admin-preferences .frame-14 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 3px 0px 0px;
  position: relative;
}

.admin-preferences .icon-2 {
  height: 20px;
  position: relative;
  transform: rotate(180deg);
  width: 20px;
}

.admin-preferences .table-filter-instance {
  display: flex !important;
  width: 360px !important;
}

.admin-preferences .table-filter-4 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  position: relative;
  width: 133px;
}

.admin-preferences .table-filter-5 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  position: relative;
  width: 148px;
}

.admin-preferences .table-filter-6 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  position: relative;
  width: 215px;
}

.admin-preferences .table-filter-7 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  position: relative;
  width: 81px;
}

.admin-preferences .row-item-admin-2 {
  align-items: center;
  align-self: stretch;
  background-color: var(--jls-colourswhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--lightsupport-colourssupport-03);
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  width: 100%;
}

.admin-preferences .text-wrapper-11 {
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

.admin-preferences .div-2 {
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

.admin-preferences .text-wrapper-12 {
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

.admin-preferences .frame-15 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  padding: 0px 8px;
  position: relative;
  width: 215px;
}

.admin-preferences .text-wrapper-13 {
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

.admin-preferences .checkbox-wrapper {
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 0px 0px 0px 16px;
  position: relative;
  width: 81px;
}

.admin-preferences .checkbox-2 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
}

.admin-preferences .icon-check-wrapper {
  background-color: var(--jls-coloursneso);
  height: 20px;
  position: relative;
  width: 20px;
}

.admin-preferences .icon-check-2 {
  height: 9px !important;
  left: 6px !important;
  position: absolute !important;
  top: 6px !important;
  width: 9px !important;
}

.admin-preferences .span {
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
}

.admin-preferences .checkbox-inactive {
  border: 1px solid;
  border-color: var(--jls-coloursneso);
  height: 20px;
  position: relative;
  width: 20px;
}

.admin-preferences .row-item-admin-instance {
  align-self: stretch !important;
  width: 100% !important;
}

.admin-preferences .interface-essential-setting-cog-1-5-instance {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}

.admin-preferences .arrows-diagrams {
  height: 16px !important;
  left: 0 !important;
  position: absolute !important;
  top: 3px !important;
  width: 16px !important;
}
</style>
