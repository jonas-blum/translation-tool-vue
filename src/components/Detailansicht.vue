<template>
  <div class="detailansicht">
    <PageHeader
      class="design-component-instance-node-3"
      :icon="pageHeaderIcon"
    />
    <div class="frame-16">
      <div class="header" :class="headerClassName">
        <Textlink
          class="design-component-instance-node-3"
          icon
          :override="textlinkIcon"
          status="default"
          text="Projects"
          to="/projectu45overviewu45page"
        />
        <div class="frame-17">
          <div class="frame-18">
            <div class="text-wrapper-15">{{ projectTitle }}</div>
            <DivWrapper
              class="interface-essential-menu-navigation-menu-horizontal"
              divClassName="interface-essential-instance"
              ovalClassName="interface-essential-instance"
              ovalClassNameOverride="interface-essential-instance"
            />
          </div>
          <div class="frame-19">
            <div class="button-3">
              <div class="content-3">
                <InterfaceEssentialRemoveAddAdd6 class="interface-essential-remove-add-add-6" />
                <button class="button-4">Add component</button>
              </div>
            </div>
            <div class="search-wrapper">
              <div class="field-wrapper">
                <div class="field-3">
                  <div class="content-4">
                    <div class="search-something-2">Search in keys</div>
                    <IconSearch3 class="icon-search-3" color="#0291E1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row-item-project-2">
        <div class="frame-17">
          <div class="frame-wrapper">
            <div class="frame-18">
              <div class="text-wrapper-16">Navigation Components</div>
              <DivWrapper
                class="interface-essential-menu-navigation-menu-horizontal"
                divClassName="interface-essential-instance"
                ovalClassName="interface-essential-instance"
                ovalClassNameOverride="interface-essential-instance"
              />
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button-3">
              <div class="content-3">
                <InterfaceEssentialRemoveAddAdd6 class="interface-essential-remove-add-add-6" />
                <button class="button-4">Add view</button>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-20">
          <div class="table-header-3">
            <div class="table-filter-8">
              <div class="project-name-4">Views</div>
            </div>
            <div class="table-filter-9">
              <div class="project-name-4">CH_DE</div>
            </div>
            <div class="table-filter-9">
              <div class="project-name-4">EN_GB</div>
            </div>
            <div class="table-filter-9">
              <div class="project-name-4">FR_FR</div>
            </div>
            <div class="table-filter-9">
              <div class="project-name-4">PT_PT</div>
            </div>
            <InterfaceEssentialDeleteBin1_5Wrapper />
          </div>
          <RowItemProject
            class="row-item-project-details"
            state="default-white"
            to="/translationu45overviewu45page"
            :index="0"
          />
          <RowItemProject
            class="row-item-project-details"
            state="default-white"
            :index="1"
          />
          <RowItemProject
            class="row-item-project-details"
            state="default-white"
            :index="2"
          />
        </div>
      </div>
      <div class="row-item-project-2">
        <div class="frame-17">
          <div class="frame-wrapper">
            <div class="frame-18">
              <div class="text-wrapper-16">Form Components</div>
              <DivWrapper
                class="interface-essential-menu-navigation-menu-horizontal"
                divClassName="interface-essential-instance"
                ovalClassName="interface-essential-instance"
                ovalClassNameOverride="interface-essential-instance"
              />
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button-3">
              <div class="content-3">
                <InterfaceEssentialRemoveAddAdd6 class="interface-essential-remove-add-add-6" />
                <button class="button-4">Add view</button>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-20">
          <div class="table-header-3">
            <div class="table-filter-8">
              <div class="project-name-4">Views</div>
            </div>
            <div class="table-filter-9">
              <div class="project-name-4">CH_DE</div>
            </div>
            <div class="table-filter-9">
              <div class="project-name-4">EN_GB</div>
            </div>
            <div class="table-filter-9">
              <div class="project-name-4">FR_FR</div>
            </div>
            <div class="table-filter-9">
              <div class="project-name-4">PT_PT</div>
            </div>
            <InterfaceEssentialDeleteBin1_5Wrapper />
          </div>
          <RowItemProject
            class="row-item-project-details"
            state="default-white"
            :index="3"
          />
          <RowItemProject
            class="row-item-project-details"
            state="default-white"
            :index="4"
          />
          <RowItemProject
            class="row-item-project-details"
            state="default-white"
            :index="5"
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
import DivWrapper from "./DivWrapper.vue";
import InterfaceEssentialDeleteBin1_5Wrapper from "./InterfaceEssentialDeleteBin1_5Wrapper.vue";
import PageHeader from "./PageHeader.vue";
import RowItemProject from "./RowItemProject.vue";
import Textlink from "./Textlink.vue";

export default defineComponent({
  name: "Detailansicht",
  components: {
    ArrowsDiagramsArrowsArrowLeft3,
    IconSearch3,
    InterfaceEssentialRemoveAddAdd6,
    InterfaceEssentialSettingCog1_5,
    DivWrapper,
    InterfaceEssentialDeleteBin1_5Wrapper,
    PageHeader,
    RowItemProject,
    Textlink,
  },
  props: {
    pageHeaderIcon: {
      type: Function,
      default: null
    },
    headerClassName: {
      type: String,
      default: "",
    },
    textlinkIcon: {
      type: Function,
      default: null
    },
  },
  setup() {
    const route = useRoute();
    const projectId = route.params.projectId || 'bekb';
    
    // Map project IDs to project titles
    const projectTitles = {
      'bekb': 'BEKB Banking App',
      'raiffeisen': 'Raiffeisen Online Portal',
      'ubs': 'UBS Wealth Management',
      'postfinance': 'PostFinance Mobile',
      'creditsuisse': 'Credit Suisse Invest',
      'migrosbank': 'Migros Bank E-Banking',
      'valiant': 'Valiant Digital Banking'
    };
    
    const projectTitle = computed(() => {
      return projectTitles[projectId as string] || 'Banking Project';
    });
    
    return {
      projectTitle
    };
  }
});
</script>

<style>
.detailansicht {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 96px;
  position: relative;
  width: 1440px;
}

.detailansicht .design-component-instance-node-3 {
  flex: 0 0 auto !important;
}

.detailansicht .frame-16 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  padding: 48px 0px;
  position: relative;
  width: 1312px;
}

.detailansicht .header {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 32px;
  position: relative;
  width: 100%;
}

.detailansicht .frame-17 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.detailansicht .frame-18 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  justify-content: center;
  position: relative;
}

.detailansicht .text-wrapper-15 {
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

.detailansicht .interface-essential-menu-navigation-menu-horizontal {
  position: relative !important;
}

.detailansicht .interface-essential-instance {
  border-color: var(--jls-coloursneso) !important;
}

.detailansicht .frame-19 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 24px;
  position: relative;
}

.detailansicht .button-3 {
  align-items: center;
  background-color: var(--jls-colourswhite);
  border: 1.5px solid;
  border-color: var(--jls-coloursneso);
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 13px 20px;
  position: relative;
  width: 203px;
}

.detailansicht .content-3 {
  align-items: center;
  align-self: stretch;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.detailansicht .interface-essential-remove-add-add-6 {
  height: 16.17px !important;
  margin-left: -0.08px !important;
  position: relative !important;
  width: 16.17px !important;
}

.detailansicht .button-4 {
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

.detailansicht .search-wrapper {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  position: relative;
}

.detailansicht .field-wrapper {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 311px;
}

.detailansicht .field-3 {
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

.detailansicht .content-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;
}

.detailansicht .search-something-2 {
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

.detailansicht .icon-search-3 {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}

.detailansicht .row-item-project-2 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--jls-colourswhite);
  box-shadow: var(--card-shadow);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  padding: 40px;
  position: relative;
  width: 100%;
}

.detailansicht .frame-wrapper {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.detailansicht .text-wrapper-16 {
  color: #000000;
  font-family: var(--h2-font-family);
  font-size: var(--h2-font-size);
  font-style: var(--h2-font-style);
  font-weight: var(--h2-font-weight);
  letter-spacing: var(--h2-letter-spacing);
  line-height: var(--h2-line-height);
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.detailansicht .button-wrapper {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  position: relative;
}

.detailansicht .frame-20 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.detailansicht .table-header-3 {
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

.detailansicht .table-filter-8 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  position: relative;
  width: 228px;
}

.detailansicht .project-name-4 {
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

.detailansicht .table-filter-9 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  opacity: 0;
  position: relative;
  width: 228px;
}

.detailansicht .row-item-project-details {
  align-self: stretch !important;
  flex: 0 0 auto !important;
  width: 100% !important;
}

.detailansicht .interface-essential-setting-cog-1-3-instance {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}

.detailansicht .arrows-diagrams-arrows-arrow-left-3 {
  height: 16px !important;
  left: 0 !important;
  position: absolute !important;
  top: 3px !important;
  width: 16px !important;
}
</style>
