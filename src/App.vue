<template>
  <div class="app-container">
    <router-view v-if="isRouterReady" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const isRouterReady = ref(false);
    
    onMounted(() => {
      // Set router as ready after component is mounted
      setTimeout(() => {
        isRouterReady.value = true;
      }, 100);
    });
    
    return {
      isRouterReady
    };
  }
});
</script>

<style>
#app {
  font-family: "Gilroy", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

.app-container {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

* {
  box-sizing: border-box;
}
</style>
