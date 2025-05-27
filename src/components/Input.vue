<template>
  <div :class="['input', className]">
    <div class="label">{{ text }}</div>
    <div class="field">
      <div :class="['placeholdertext', icon]">
        <template v-if="icon === 'off'">
          {{ text1 }}
        </template>
        <template v-else-if="icon === 'on'">
          <div class="text-wrapper">{{ text1 }}</div>
          <div class="eye">
            <div class="icons-bold-eye">
              <img class="icon" alt="Icon" :src="img" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    state: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Label",
    },
    text1: {
      type: String,
      default: "Placeholdertext",
    },
    img: {
      type: String,
      default: "https://c.animaapp.com/xbpvFdff/img/icon.svg",
    },
  },
});
</script>

<style>
.input {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 311px;
}

.input .label {
  align-self: stretch;
  color: var(--jls-colourseclipse);
  font-family: var(--footnote-label-text-font-family);
  font-size: var(--footnote-label-text-font-size);
  font-style: var(--footnote-label-text-font-style);
  font-weight: var(--footnote-label-text-font-weight);
  letter-spacing: var(--footnote-label-text-letter-spacing);
  line-height: var(--footnote-label-text-line-height);
  margin-top: -1.00px;
  position: relative;
}

.input .field {
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

.input .placeholdertext {
  align-self: stretch;
  position: relative;
}

.input .text-wrapper {
  color: var(--jls-coloursnimbus);
  flex: 1;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  position: relative;
}

.input .eye {
  height: 26px;
  position: relative;
  width: 26px;
}

.input .icons-bold-eye {
  height: 26px;
  position: relative;
}

.input .icon {
  height: 14px;
  left: 2px;
  position: absolute;
  top: 6px;
  width: 23px;
}

.input .off {
  color: var(--jls-coloursnimbus);
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  font-style: var(--body-CTA-medium-font-style);
  font-weight: var(--body-CTA-medium-font-weight);
  letter-spacing: var(--body-CTA-medium-letter-spacing);
  line-height: var(--body-CTA-medium-line-height);
  margin-top: -1.00px;
}

.input .on {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  width: 100%;
}
</style>
