<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import { ref } from 'vue';

const drawer = ref(false);

function handleNavClick() {
  drawer.value = !drawer.value;
}
</script>

<template>
  <div class="app-container">
    <NavigationBar :drawer="drawer" />

    <div class="header-main">
      <AppHeader @nav-click="handleNavClick" />

      <main class="main">
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.app-container {
  display: flex;
  height: 100vh;
}

.header-main {
  width: 100%;
  height: 100%;
  margin-left: 34px;
}

.main {
  padding: 20px;
}

@media screen and (min-width: $desktop-breakpoint) {
}
</style>
