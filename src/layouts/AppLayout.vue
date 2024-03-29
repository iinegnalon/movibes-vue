<script lang="ts" setup>
import NavigationBar from '@/components/layout/NavigationBar.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import CategoriesFilter from '@/components/layout/CategoriesFilter.vue';
import { useStore } from 'vuex';

withDefaults(
  defineProps<{
    withCategories?: boolean;
  }>(),
  {
    withCategories: true,
  },
);

const store = useStore();
const layoutStore = store.state.layoutStore;

function handleNavClick() {
  store.commit('layoutStore/setDrawer', !store.state.layoutStore.drawer);
}
</script>

<template>
  <div class="app-container">
    <NavigationBar />

    <div class="header-main">
      <AppHeader @nav-click="handleNavClick" />

      <div class="categories-main">
        <main class="main">
          <RouterView></RouterView>
        </main>
        <CategoriesFilter v-if="withCategories" />
      </div>
    </div>

    <v-progress-linear
      v-if="layoutStore.loading"
      class="progress-loading"
      color="primary"
      indeterminate
    ></v-progress-linear>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.header-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.categories-main {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 40px;
  margin-bottom: 100px;
}

.main {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px 20px 60px;
  margin-bottom: 50px;
  position: relative;
}

.progress-loading {
  position: absolute;
}

@media screen and (min-width: $desktop-breakpoint) {
  .header-main {
    width: 100%;
    height: 100%;
    margin-left: 34px;
  }

  .main {
    margin-bottom: 150px;
  }
}
</style>
