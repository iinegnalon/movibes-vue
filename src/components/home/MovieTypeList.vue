<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue';
import type { Movie } from '@/models/movie';

defineProps<{
  type: string;
  title: string;
}>();

const movies: Movie[] = [
  {
    id: '1',
    title: 'Movie 1',
    image: '/images/movie.png',
    description: 'Description of Movie 1',
    slug: 'movie-1',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Movie 2',
    image: '/images/movie.png',
    description: 'Description of Movie 2',
    slug: 'movie-2',
    rating: 3.8,
  },
  {
    id: '3',
    title: 'Movie 3',
    image: '/images/movie.png',
    description: 'Description of Movie 3',
    slug: 'movie-3',
    rating: 10.0,
  },
  {
    id: '4',
    title: 'Movie 4',
    image: '/images/movie.png',
    description: 'Description of Movie 4',
    slug: 'movie-4',
    rating: 4.0,
  },
];
</script>

<template>
  <div class="movie-type-container">
    <div class="movie-type-container__header">
      <h2 class="movie-type-container__title">{{ title }}</h2>
      <v-btn variant="plain">
        <RouterLink :to="`/${type}`">
          <span class="movie-type-container__btn">See all</span>
        </RouterLink>
      </v-btn>
    </div>
    <div class="movie-type-list">
      <MovieCard
        v-for="movie in [...movies, ...movies]"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.movie-type-container {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__title {
    font-size: 25px;
    font-weight: var(--semi-bold);
  }

  &__btn {
    font-size: 15px;
    font-weight: var(--semi-bold);
    text-transform: none;
  }
}

.movie-type-list {
  display: flex;
  gap: 36px;
  width: 100%;
  overflow-x: auto;
}

@media screen and (min-width: $desktop-breakpoint) {
  .movie-type-container {
  }

  .movie-type-list {
  }
}
</style>
