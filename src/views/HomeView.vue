<script setup lang="ts">
import MovieBanner from '@/components/home/MovieBanner.vue';
import MovieTypeList from '@/components/home/MovieTypeList.vue';

const typeItems = [
  {
    title: 'Trending',
    type: 'trending',
  },
  {
    title: 'Movies',
    type: 'movies',
  },
  {
    title: 'TV Series',
    type: 'tv-series',
  },
  {
    title: 'Upcoming',
    type: 'upcoming',
  },
];
</script>

<template>
  <div class="home-page">
    <MovieBanner />
    <section class="types-list">
      <MovieTypeList
        v-for="(item, index) in typeItems"
        :key="index"
        :title="item.title"
        :type="item.type"
      />
    </section>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  width: 100%;
}

.types-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
