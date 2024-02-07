<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const emits = defineEmits(['nav-click']);

const router = useRouter();
const store = useStore();

const searchQuery = ref('');

function search() {
  if (!searchQuery.value) {
    return;
  }

  store.commit('filtersStore/setSearchQuery', searchQuery.value);
  router.push(`/search?searchQuery=${store.state.filtersStore.searchQuery}`);
}

function openNav() {
  emits('nav-click');
}
</script>

<template>
  <header class="">
    <div class="header">
      <v-btn class="nav-btn" icon="mdi-menu" @click="openNav"></v-btn>
      <v-text-field
        v-model="searchQuery"
        class="search text-field_primary"
        hide-details
        placeholder="Search for movies, TV shows..."
        prepend-inner-icon="mdi-magnify"
        rounded
        type="text"
        variant="solo"
        @keydown.enter="search"
      />
      <v-spacer></v-spacer>
      <v-btn class="notifications-btn" icon="mdi-bell"></v-btn>
      <v-avatar class="user-avatar" image="/images/user-avatar.png"></v-avatar>
    </div>
  </header>
</template>

<style lang="scss" scoped>
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
