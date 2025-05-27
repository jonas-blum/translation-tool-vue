import { reactive, watch } from 'vue';

// Define types for our data structure
export interface Translation {
  key: string;
  chDe: string;
  enGb: string;
  frFr: string;
  ptPt: string;
}

export interface View {
  id: string;
  name: string;
  translations: Translation[];
}

export interface Component {
  id: string;
  name: string;
  views: View[];
}

export interface Project {
  id: string;
  name: string;
  lastUpdated: string;
  refLanguage: string;
  availableLanguages: string[];
  active: boolean;
  components: Component[];
}

// Initial state with sample data
const initialState = {
  projects: [
    {
      id: 'BKB-2439782',
      name: 'BEKB Banking App',
      lastUpdated: '08.06.2023, 22:42',
      refLanguage: 'CH_DE',
      availableLanguages: ['GB_EN', 'PT_PT', 'FR_FR'],
      active: true,
      components: [
        {
          id: 'nav-comp',
          name: 'Navigation Components',
          views: [
            {
              id: 'main-nav',
              name: 'Main Navigation',
              translations: [
                {
                  key: 'common.back',
                  chDe: 'Zurück',
                  enGb: 'Back',
                  frFr: 'Retour',
                  ptPt: ''
                },
                {
                  key: 'common.next',
                  chDe: 'Weiter',
                  enGb: 'Next',
                  frFr: 'Suivant',
                  ptPt: ''
                }
              ]
            },
            {
              id: 'account-summary',
              name: 'Account Summary',
              translations: [
                {
                  key: 'account.balance',
                  chDe: 'Kontostand',
                  enGb: 'Account Balance',
                  frFr: 'Solde du compte',
                  ptPt: ''
                }
              ]
            },
            {
              id: 'transaction-history',
              name: 'Transaction History',
              translations: [
                {
                  key: 'transaction.date',
                  chDe: 'Datum',
                  enGb: 'Date',
                  frFr: 'Date',
                  ptPt: ''
                }
              ]
            }
          ]
        },
        {
          id: 'form-comp',
          name: 'Form Components',
          views: [
            {
              id: 'payment-form',
              name: 'Payment Form',
              translations: [
                {
                  key: 'payment.amount',
                  chDe: 'Betrag',
                  enGb: 'Amount',
                  frFr: 'Montant',
                  ptPt: ''
                }
              ]
            },
            {
              id: 'transfer-screen',
              name: 'Transfer Screen',
              translations: [
                {
                  key: 'transfer.recipient',
                  chDe: 'Empfänger',
                  enGb: 'Recipient',
                  frFr: 'Bénéficiaire',
                  ptPt: ''
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'RFF-3782941',
      name: 'Raiffeisen Online Portal',
      lastUpdated: '12.07.2023, 14:15',
      refLanguage: 'CH_DE',
      availableLanguages: ['GB_EN', 'FR_FR'],
      active: true,
      components: []
    },
    {
      id: 'UBS-9283741',
      name: 'UBS Wealth Management',
      lastUpdated: '23.05.2023, 09:30',
      refLanguage: 'CH_DE',
      availableLanguages: ['GB_EN', 'FR_FR', 'IT_IT'],
      active: true,
      components: []
    }
  ]
};

// Load state from localStorage or use initial state
const loadState = () => {
  const savedState = localStorage.getItem('jlsTranslationState');
  return savedState ? JSON.parse(savedState) : initialState;
};

// Create reactive state
export const state = reactive(loadState());

// Watch for changes and save to localStorage
watch(
  () => state,
  (newState) => {
    localStorage.setItem('jlsTranslationState', JSON.stringify(newState));
  },
  { deep: true }
);

// Helper function to get current date and time in the format used in the app
export const getCurrentDateTime = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  return `${day}.${month}.${year}, ${hours}:${minutes}`;
};

// Helper function to generate a unique ID
export const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

// Project operations
export const addProject = (name: string) => {
  const newProject: Project = {
    id: `PRJ-${generateId()}`,
    name,
    lastUpdated: getCurrentDateTime(),
    refLanguage: 'CH_DE',
    availableLanguages: ['GB_EN'],
    active: true,
    components: []
  };
  
  state.projects.push(newProject);
  return newProject;
};

export const updateProject = (projectId: string, updates: Partial<Project>) => {
  const projectIndex = state.projects.findIndex(p => p.id === projectId);
  if (projectIndex !== -1) {
    const project = state.projects[projectIndex];
    state.projects[projectIndex] = { 
      ...project, 
      ...updates, 
      lastUpdated: getCurrentDateTime() 
    };
  }
};

export const deleteProject = (projectId: string) => {
  const projectIndex = state.projects.findIndex(p => p.id === projectId);
  if (projectIndex !== -1) {
    state.projects.splice(projectIndex, 1);
  }
};

// Component operations
export const addComponent = (projectId: string, name: string) => {
  const project = state.projects.find(p => p.id === projectId);
  if (project) {
    const newComponent: Component = {
      id: `COMP-${generateId()}`,
      name,
      views: []
    };
    
    project.components.push(newComponent);
    project.lastUpdated = getCurrentDateTime();
    return newComponent;
  }
  return null;
};

export const updateComponent = (projectId: string, componentId: string, updates: Partial<Component>) => {
  const project = state.projects.find(p => p.id === projectId);
  if (project) {
    const componentIndex = project.components.findIndex(c => c.id === componentId);
    if (componentIndex !== -1) {
      const component = project.components[componentIndex];
      project.components[componentIndex] = { ...component, ...updates };
      project.lastUpdated = getCurrentDateTime();
    }
  }
};

export const deleteComponent = (projectId: string, componentId: string) => {
  const project = state.projects.find(p => p.id === projectId);
  if (project) {
    const componentIndex = project.components.findIndex(c => c.id === componentId);
    if (componentIndex !== -1) {
      project.components.splice(componentIndex, 1);
      project.lastUpdated = getCurrentDateTime();
    }
  }
};

// View operations
export const addView = (projectId: string, componentId: string, name: string) => {
  const project = state.projects.find(p => p.id === projectId);
  if (project) {
    const component = project.components.find(c => c.id === componentId);
    if (component) {
      const newView: View = {
        id: `VIEW-${generateId()}`,
        name,
        translations: []
      };
      
      component.views.push(newView);
      project.lastUpdated = getCurrentDateTime();
      return newView;
    }
  }
  return null;
};

export const updateView = (projectId: string, componentId: string, viewId: string, updates: Partial<View>) => {
  const project = state.projects.find(p => p.id === projectId);
  if (project) {
    const component = project.components.find(c => c.id === componentId);
    if (component) {
      const viewIndex = component.views.findIndex(v => v.id === viewId);
      if (viewIndex !== -1) {
        const view = component.views[viewIndex];
        component.views[viewIndex] = { ...view, ...updates };
        project.lastUpdated = getCurrentDateTime();
      }
    }
  }
};

export const deleteView = (projectId: string, componentId: string, viewId: string) => {
  const project = state.projects.find(p => p.id === projectId);
  if (project) {
    const component = project.components.find(c => c.id === componentId);
    if (component) {
      const viewIndex = component.views.findIndex(v => v.id === viewId);
      if (viewIndex !== -1) {
        component.views.splice(viewIndex, 1);
        project.lastUpdated = getCurrentDateTime();
      }
    }
  }
};

// Translation operations
export const addTranslation = (projectId: string, componentId: string, viewId: string, key: string) => {
  const project = state.projects.find(p => p.id === projectId);
  if (project) {
    const component = project.components.find(c => c.id === componentId);
    if (component) {
      const view = component.views.find(v => v.id === viewId);
      if (view) {
        const newTranslation: Translation = {
          key,
          chDe: '',
          enGb: '',
          frFr: '',
          ptPt: ''
        };
        
        view.translations.push(newTranslation);
        project.lastUpdated = getCurrentDateTime();
        return newTranslation;
      }
    }
  }
  return null;
};

export const updateTranslation = (
  projectId: string, 
  componentId: string, 
  viewId: string, 
  key: string, 
  updates: Partial<Translation>
) => {
  const project = state.projects.find(p => p.id === projectId);
  if (project) {
    const component = project.components.find(c => c.id === componentId);
    if (component) {
      const view = component.views.find(v => v.id === viewId);
      if (view) {
        const translationIndex = view.translations.findIndex(t => t.key === key);
        if (translationIndex !== -1) {
          const translation = view.translations[translationIndex];
          view.translations[translationIndex] = { ...translation, ...updates };
          project.lastUpdated = getCurrentDateTime();
        }
      }
    }
  }
};

export const deleteTranslation = (projectId: string, componentId: string, viewId: string, key: string) => {
  const project = state.projects.find(p => p.id === projectId);
  if (project) {
    const component = project.components.find(c => c.id === componentId);
    if (component) {
      const view = component.views.find(v => v.id === viewId);
      if (view) {
        const translationIndex = view.translations.findIndex(t => t.key === key);
        if (translationIndex !== -1) {
          view.translations.splice(translationIndex, 1);
          project.lastUpdated = getCurrentDateTime();
        }
      }
    }
  }
};

export default {
  state,
  addProject,
  updateProject,
  deleteProject,
  addComponent,
  updateComponent,
  deleteComponent,
  addView,
  updateView,
  deleteView,
  addTranslation,
  updateTranslation,
  deleteTranslation
};
