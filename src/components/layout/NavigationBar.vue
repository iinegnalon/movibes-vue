<script setup lang="ts">
import AppLogo from '@/components/icons/AppLogo.vue';

defineProps<{
  drawer: boolean;
}>();

const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Movies', icon: 'mdi-movie', to: '/movies' },
  { title: 'TV Series', icon: 'mdi-television', to: '/tv-series' },
  { title: 'Upcoming', icon: 'mdi-calendar', to: '/upcoming' },
];
</script>

<template>
  <aside class="sidebar" :class="{ sidebar_open: drawer }">
    <nav class="nav">
      <AppLogo class="logo" />
      <div class="nav-list">
        <RouterLink
          class="nav-list-item"
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.to"
        >
          <div class="nav-list-item__line"></div>
          <div class="nav-list-item__row">
            <v-icon class="nav-list-item__icon" :icon="item.icon"></v-icon>
            <div class="nav-list-item__title">
              {{ item.title }}
            </div>
          </div>
        </RouterLink>
        <div class="nav-list-item">
          <div class="nav-list-item__row">
            <v-icon class="nav-list-item__icon" icon="mdi-logout"></v-icon>
            <div class="nav-list-item__title">Logout</div>
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.sidebar {
  height: fit-content;
  background-color: var(--color-surface);
  border-radius: 0 45px 45px 0;
  transition: 0.3s ease;
  width: 0;
  transform: translateX(-228px);

  &_open {
    width: 250px;
    transform: translateX(0);
  }
}

.nav-list {
  list-style-type: none;
  padding: 0;
}

.logo {
  width: 118px;
  height: 42px;
  margin: 55px 55px 80px;
}

.nav-list-item {
  position: relative;
  cursor: pointer;
  height: 86px;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;

  &:last-child {
    margin-top: 25px;
    border-radius: 0 0 45px 0;
  }

  &:hover,
  &_selected {
    background: rgb(from var(--color-primary) r g b / 0.4);

    .nav-list-item__title,
    .nav-list-item__icon {
      color: var(--color-primary);
    }
  }

  &_selected {
    .nav-list-item__line {
      display: block;
    }
  }

  &__line {
    display: none;
    position: absolute;
    right: 0;
    height: 100%;
    width: 6px;
    background: rgb(from var(--color-primary) r g b / 0.75);
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__icon {
    margin-left: 42px;
    width: 25px;
    height: 25px;
    color: var(--color-secondary);
  }

  &__title {
    color: var(--color-secondary);
    font-size: 20px;
    font-weight: var(--semi-bold);
  }
}

@media screen and (min-width: $desktop-breakpoint) {
  .sidebar {
    width: 250px;
    transform: translateX(0);
  }
}
</style>