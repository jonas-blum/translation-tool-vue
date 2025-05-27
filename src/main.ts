import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

// Import components
import LoginPage from "./screens/LoginPage.vue";
import ProjectOverviewScreen from "./screens/ProjectOverviewScreen.vue";
import ComponentOverview from "./screens/ComponentOverview.vue";
import SettingsPage from "./screens/SettingsPage.vue";
import TranslationOverview from "./screens/TranslationOverview.vue";

// Define routes
const routes = [
  { path: '/login', component: LoginPage },
  { path: '/', component: ProjectOverviewScreen },
  { path: '/settings', component: SettingsPage },
  { path: '/:projectId/components', component: ComponentOverview },
  { path: '/:projectId/components/:componentId', component: TranslationOverview },
  // Redirect legacy routes to new structure
  { path: '/loginu45page', redirect: '/login' },
  { path: '/projectu45overviewu45page', redirect: '/' },
  { path: '/settingsu45page', redirect: '/settings' },
  { path: '/componentu45overviewu45page', redirect: '/bekb/components' },
  { path: '/translationu45overviewu45page', redirect: '/bekb/components/header' },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: false
});

// Navigation guard to redirect to login if not authenticated
router.beforeEach((to, from, next) => {
  // Simple authentication check - in a real app, this would check a token or session
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (to.path !== '/login' && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Create and mount app
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
});
