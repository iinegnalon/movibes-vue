<script setup lang="ts">
import MovieBanner from '@/components/home/MovieBanner.vue';
import MovieTypeList from '@/components/home/MovieTypeList.vue';
import type { MovieListItem } from '@/models/movie';
import { ref } from 'vue';
import { getPosterImage } from '@/utils';

const typeItems = [
  {
    title: 'Trending',
    type: 'trending',
  },
  {
    title: 'Movies',
    type: 'movie',
    detailsPath: 'movies',
  },
  {
    title: 'TV Series',
    type: 'tv',
    detailsPath: 'tv-series',
  },
  {
    title: 'Upcoming',
    type: 'upcoming',
    detailsPath: 'movies',
  },
];

const bannerMovie = ref<MovieListItem | null>(null);

function handleTrendingLoaded(movie: MovieListItem) {
  bannerMovie.value = movie;
}
</script>

<template>
  <div class="home-page">
    <MovieBanner v-if="bannerMovie" :bannerMovie="bannerMovie" />
    <section class="types-list">
      <MovieTypeList
        @trending-loaded="handleTrendingLoaded"
        v-for="(item, index) in typeItems"
        :key="index"
        :title="item.title"
        :listType="item.type"
        :detailsPath="item.detailsPath"
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
