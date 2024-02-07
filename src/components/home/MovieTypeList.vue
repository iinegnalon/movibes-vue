<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue';
import { movies } from '@/utils';
import { onMounted } from 'vue';
import { getTrendingList } from '@/api';

defineProps<{
  type: string;
  title: string;
}>();

onMounted(() => {
  getMovies();
});

async function getMovies() {
  const trending = await getTrendingList();
}
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
}
</style>
