<script lang="ts" setup>
import type { MovieListItem } from '@/models/movie';

defineProps<{
  movie: MovieListItem;
}>();
</script>
<template>
  <v-card rounded :image="movie.image" class="movie-card" :to="movie.slug">
    <div class="movie-card__rating">
      <v-icon color="#e5b516">mdi-star</v-icon>
      <span>{{ movie.rating }}</span>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.movie-card {
  flex-shrink: 0;
  position: relative;
  width: 160px;
  height: 252px;
  border-radius: 30px;

  &__rating {
    width: 60px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(from var(--color-text) r g b / 0.15);
    backdrop-filter: blur(5px);
    padding: 3px;
    border-radius: 0 20px;
    font-size: 14px;
    font-weight: var(--medium);
  }
}

@media screen and (min-width: $desktop-breakpoint) {
  .movie-card {
    width: 200px;
    height: 315px;

    &__rating {
      width: 70px;
      padding: 5px;
      font-size: 16px;
    }
  }
}
</style>
