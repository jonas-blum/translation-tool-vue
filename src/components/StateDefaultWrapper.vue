<template>
  <div :class="['state-default-wrapper', className]">
    <div :class="['text-wrapper-17', divClassName]">{{ translationKey }}</div>

    <div class="input-2">
      <div class="field-4">
        <input 
          v-model="translations.chDe" 
          class="inputtext" 
          :placeholder="getDefaultTranslation('de', index)"
        />
      </div>
    </div>

    <div class="input-2">
      <div class="field-4">
        <input 
          v-model="translations.enGb" 
          class="inputtext" 
          :placeholder="getDefaultTranslation('en', index)"
        />
      </div>
    </div>

    <div class="input-2">
      <div class="field-4">
        <input 
          v-model="translations.frFr" 
          class="inputtext" 
          :placeholder="getDefaultTranslation('fr', index)"
        />
      </div>
    </div>

    <div class="input-2">
      <div class="field-4">
        <input 
          v-model="translations.ptPt" 
          class="inputtext" 
          placeholder="Enter Portuguese translation"
        />
      </div>
    </div>

    <InterfaceEssentialDeleteBin1_5
      class="interface-essential-delete-bin-1-5-instance"
      color="#0291E1"
      @click="deleteTranslation"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    // Generate a translation key based on the component index
    const translationKey = ref(getTranslationKey(props.index));
    
    // Initialize translations with default values based on index
    const translations = ref({
      chDe: getDefaultTranslation('de', props.index),
      enGb: getDefaultTranslation('en', props.index),
      frFr: getDefaultTranslation('fr', props.index),
      ptPt: ''  // Empty by default for Portuguese
    });
    
    // Function to generate translation key
    function getTranslationKey(index: number): string {
      const keys = [
        'common.back',
        'common.next',
        'common.cancel',
        'common.submit',
        'auth.username',
        'auth.password',
        'dashboard.welcome',
        'account.balance',
        'payment.amount',
        'transfer.recipient',
        'investment.portfolio',
        'profile.settings',
        'notification.new',
        'error.notFound'
      ];
      return keys[index % keys.length];
    }
    
    // Function to get default translations
    function getDefaultTranslation(lang: string, index: number): string {
      const translations: Record<string, string[]> = {
        de: [
          'Zurück',
          'Weiter',
          'Abbrechen',
          'Bestätigen',
          'Benutzername',
          'Passwort',
          'Willkommen',
          'Kontostand',
          'Betrag',
          'Empfänger',
          'Anlageportfolio',
          'Profileinstellungen',
          'Neue Benachrichtigung',
          'Seite nicht gefunden'
        ],
        en: [
          'Back',
          'Next',
          'Cancel',
          'Submit',
          'Username',
          'Password',
          'Welcome',
          'Account Balance',
          'Amount',
          'Recipient',
          'Investment Portfolio',
          'Profile Settings',
          'New Notification',
          'Page Not Found'
        ],
        fr: [
          'Retour',
          'Suivant',
          'Annuler',
          'Soumettre',
          'Nom d\'utilisateur',
          'Mot de passe',
          'Bienvenue',
          'Solde du compte',
          'Montant',
          'Bénéficiaire',
          'Portefeuille d\'investissement',
          'Paramètres du profil',
          'Nouvelle notification',
          'Page non trouvée'
        ]
      };
      
      return translations[lang][index % translations[lang].length];
    }
    
    // Function to handle deletion
    const deleteTranslation = () => {
      // In a real app, this would call an API to delete the translation
      alert(`Translation "${translationKey.value}" would be deleted`);
    };
    
    return {
      translationKey,
      translations,
      deleteTranslation,
      getDefaultTranslation
    };
  }
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
  padding: 0;
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
  margin-top: 0;
  padding: 13px 12px;
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
}

.state-default-wrapper .inputtext::placeholder {
  color: var(--jls-coloursnimbus);
}

.state-default-wrapper .interface-essential-delete-bin-1-5-instance {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
  cursor: pointer;
}

.state-default-wrapper .interface-essential-delete-bin-1-5-instance:hover {
  opacity: 0.8;
}
</style>
