<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits(['nav-click']);

const searchQuery = ref('');

function search() {}

function openNav() {
  emits('nav-click');
}
</script>

<template>
  <header class="header">
    <v-btn @click="openNav" class="nav-btn" icon="mdi-menu"></v-btn>
    <v-text-field
      rounded
      prepend-inner-icon="mdi-magnify"
      type="text"
      hide-details
      variant="solo"
      class="search text-field_primary"
      placeholder="Search for movies, TV shows..."
      v-model="searchQuery"
      @keydown.enter="search"
    />
    <v-spacer></v-spacer>
    <v-btn class="notifications-btn" icon="mdi-bell"></v-btn>
    <v-avatar class="user-avatar" image="/images/user-avatar.png"></v-avatar>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.nav-btn {
  margin-right: 12px;
  width: 50px !important;
  height: 50px !important;
}

.header {
  display: flex;
  align-items: center;
  margin: 20px 25px;
}

.search {
  width: 100%;
  max-width: 890px;
}

.notifications-btn {
  margin: 0 12px;
  width: 50px !important;
  height: 50px !important;
}

.user-avatar {
  cursor: pointer;
  width: 50px !important;
  height: 50px !important;
}

@media screen and (min-width: $desktop-breakpoint) {
  .nav-btn {
    display: none;
  }

  .nav-btn {
    margin-right: 24px;
  }

  .header {
    margin: 40px 50px 40px 0;
  }

  .notifications-btn {
    margin: 0 24px;
    width: 70px !important;
    height: 70px !important;
  }

  .user-avatar {
    width: 70px !important;
    height: 70px !important;
  }
}
</style>
