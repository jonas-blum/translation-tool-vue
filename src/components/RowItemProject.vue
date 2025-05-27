<template>
  <div :class="['row-item-project', className]" @click="navigateTo" style="cursor: pointer;">
    <div class="text-wrapper-14">{{ viewName }}</div>
    <InterfaceEssentialDeleteBin1_5
      class="interface-essential-delete-bin-1-15"
      color="#0291E1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import InterfaceEssentialDeleteBin1_5 from "../icons/InterfaceEssentialDeleteBin1_5/InterfaceEssentialDeleteBin1_5.vue";

export default defineComponent({
  name: "RowItemProject",
  components: {
    InterfaceEssentialDeleteBin1_5,
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
    
    // View data based on route or index
    const viewData = computed(() => {
      const views = [
        {
          name: 'Main Navigation',
          route: '/bekb/components/main-navigation'
        },
        {
          name: 'Account Summary',
          route: '/bekb/components/account-summary'
        },
        {
          name: 'Transaction History',
          route: '/bekb/components/transaction-history'
        },
        {
          name: 'Payment Form',
          route: '/bekb/components/payment-form'
        },
        {
          name: 'Transfer Screen',
          route: '/bekb/components/transfer-screen'
        },
        {
          name: 'Investment Portfolio',
          route: '/bekb/components/investment-portfolio'
        },
        {
          name: 'User Profile',
          route: '/bekb/components/user-profile'
        },
        {
          name: 'Notifications Center',
          route: '/bekb/components/notifications-center'
        }
      ];
      
      // Find view by route or use index as fallback
      const view = views.find(v => v.route === props.to) || views[props.index % views.length];
      return view;
    });
    
    const viewName = computed(() => viewData.value.name);
    
    const navigateTo = () => {
      try {
        router.push(viewData.value.route);
      } catch (error) {
        console.error('Navigation error:', error);
      }
    };
    
    return {
      viewName,
      navigateTo
    };
  }
});
</script>

<style>
.row-item-project {
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

.row-item-project .text-wrapper-14 {
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

.row-item-project .interface-essential-delete-bin-1-15 {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}
</style>
