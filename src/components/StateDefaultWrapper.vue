<template>
  <div :class="['state-default-wrapper', className]">
    <div :class="['text-wrapper-17', divClassName]">back</div>

    <div class="input-2">
      <div class="field-4">
        <div class="inputtext">Zurück</div>
      </div>
    </div>

    <div class="input-2">
      <div class="field-4">
        <div class="inputtext">Back</div>
      </div>
    </div>

    <div class="input-2">
      <div class="field-4">
        <div class="inputtext">En arrière</div>
      </div>
    </div>

    <div class="input-2">
      <div class="field-4">
        <div class="placeholdertext-2">Enter translation</div>
      </div>
    </div>

    <InterfaceEssentialDeleteBin1_5
      class="interface-essential-delete-bin-1-5-instance"
      color="#0291E1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InterfaceEssentialDeleteBin1_5 from "../icons/InterfaceEssentialDeleteBin1_5/InterfaceEssentialDeleteBin1_5.vue";

export default defineComponent({
  name: "StateDefaultWrapper",
  components: {
    InterfaceEssentialDeleteBin1_5
  },
  props: {
    state: {
      type: String,
      default: "default",
    },
    className: {
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
.state-default-wrapper {
  align-items: center;
  background-color: var(--jls-colourswhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--lightsupport-colourssupport-03);
  display: flex;
  gap: 24px;
  height: 80px;
  justify-content: center;
  padding: 16px;
  position: relative;
  width: 1312px;
}

.state-default-wrapper .text-wrapper-17 {
  color: #000000;
  flex: 1;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  position: relative;
}

.state-default-wrapper .input-2 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  position: relative;
}

.state-default-wrapper .field-4 {
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

.state-default-wrapper .inputtext {
  color: var(--jls-colourseclipse);
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

.state-default-wrapper .placeholdertext-2 {
  align-self: stretch;
  color: var(--jls-coloursnimbus);
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
  position: relative;
}

.state-default-wrapper .interface-essential-delete-bin-1-5-instance {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}
</style>
