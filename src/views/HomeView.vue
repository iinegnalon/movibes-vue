<script lang="ts" setup>
import MovieBanner from '@/components/home/MovieBanner.vue';
import MovieTypeList from '@/components/home/MovieTypeList.vue';
import type { MovieListItem } from '@/models/movie';
import { ref } from 'vue';

const typeItems = [
  {
    title: 'Trending',
    type: 'trending',
    seeAllPath: 'trending',
  },
  {
    title: 'Movies',
    type: 'movie',
    detailsPath: 'movies',
    seeAllPath: 'movies',
  },
  {
    title: 'TV Series',
    type: 'tv',
    detailsPath: 'tv-series',
    seeAllPath: 'tv-series',
  },
  {
    title: 'Upcoming',
    type: 'upcoming',
    detailsPath: 'movies',
    seeAllPath: 'upcoming',
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
        v-for="(item, index) in typeItems"
        :key="index"
        :detailsPath="item.detailsPath"
        :listType="item.type"
        :seeAllPath="item.seeAllPath"
        :title="item.title"
        @trending-loaded="handleTrendingLoaded"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
}

.types-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
