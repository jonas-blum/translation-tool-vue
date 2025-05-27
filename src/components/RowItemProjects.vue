<template>
  <div :class="['row-item-projects', className]" @click="navigateTo" style="cursor: pointer;">
    <div class="text-wrapper-3">{{ projectName }}</div>
    <div class="frame-2">
      <div :class="['text-wrapper-4', divClassName]">{{ projectId }}</div>
      <div :class="['text-wrapper-3', divClassNameOverride]">{{ lastUpdated }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RowItemProjects",
  props: {
    state: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    divClassName: {
      type: String,
      default: "",
    },
    divClassNameOverride: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const router = useRouter();
    
    // Project data based on route or index
    const projectData = computed(() => {
      const projects = [
        {
          id: 'BKB-2439782',
          name: 'BEKB Banking App',
          lastUpdated: '08.06.2023, 22:42',
          route: '/bekb/components'
        },
        {
          id: 'RFF-3782941',
          name: 'Raiffeisen Online Portal',
          lastUpdated: '12.07.2023, 14:15',
          route: '/raiffeisen/components'
        },
        {
          id: 'UBS-9283741',
          name: 'UBS Wealth Management',
          lastUpdated: '23.05.2023, 09:30',
          route: '/ubs/components'
        },
        {
          id: 'PFN-4728193',
          name: 'PostFinance Mobile',
          lastUpdated: '15.06.2023, 16:22',
          route: '/postfinance/components'
        },
        {
          id: 'CSI-8273941',
          name: 'Credit Suisse Invest',
          lastUpdated: '30.05.2023, 11:45',
          route: '/creditsuisse/components'
        },
        {
          id: 'MGB-3827491',
          name: 'Migros Bank E-Banking',
          lastUpdated: '02.07.2023, 08:10',
          route: '/migrosbank/components'
        },
        {
          id: 'VLT-7283941',
          name: 'Valiant Digital Banking',
          lastUpdated: '19.06.2023, 13:25',
          route: '/valiant/components'
        }
      ];
      
      // Find project by route or use index as fallback
      const project = projects.find(p => p.route === props.to) || projects[props.index % projects.length];
      return project;
    });
    
    const projectName = computed(() => projectData.value.name);
    const projectId = computed(() => projectData.value.id);
    const lastUpdated = computed(() => projectData.value.lastUpdated);
    
    const navigateTo = () => {
      try {
        router.push(projectData.value.route);
      } catch (error) {
        console.error('Navigation error:', error);
      }
    };
    
    return {
      projectName,
      projectId,
      lastUpdated,
      navigateTo
    };
  }
});
</script>

<style>
.row-item-projects {
  align-items: center;
  background-color: var(--lightbackgroundmain);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--lightsupport-colourssupport-03);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  width: 1312px;
}

.row-item-projects .text-wrapper-3 {
  color: #000000;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.row-item-projects .frame-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 48px;
  justify-content: center;
  position: relative;
}

.row-item-projects .text-wrapper-4 {
  color: #000000;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
  width: 125px;
}
</style>
