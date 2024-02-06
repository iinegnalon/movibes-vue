<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue';
import { movies } from '@/utils';

defineProps<{
  movieType: string;
}>();
</script>

<template>
  <div class="movies-grid">
    <MovieCard
      v-for="movie in [...movies, ...movies]"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
}

@media screen and (min-width: $desktop-breakpoint) {
  .movies-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
}
</style>
