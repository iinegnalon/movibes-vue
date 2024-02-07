<script lang="ts" setup>
import type { MovieListItem } from '@/models/movie';
import { getPosterImage } from '@/utils';

const props = defineProps<{
  movie?: MovieListItem;
  listType?: string;
  detailsPath?: string;
  loading?: boolean;
}>();

function getDetailsPath(movie: MovieListItem) {
  let basePath = '';

  if (props.detailsPath) {
    basePath = `/${props.detailsPath}`;
  } else {
    const pathType = movie.media_type === 'tv' ? 'tv-series' : 'movies';
    basePath = `/${pathType}`;
  }

  return `${basePath}/${movie.id}`;
}
</script>
<template>
  <div class="movie-card-wrapper">
    <v-skeleton-loader v-if="loading" class="movie-card"></v-skeleton-loader>
    <v-card
      v-else-if="movie"
      rounded
      :image="movie.poster_path ? getPosterImage(movie.poster_path) : ''"
      class="movie-card"
      :to="getDetailsPath(movie)"
    >
      <div class="movie-card__rating">
        <v-icon color="#e5b516">mdi-star</v-icon>
        <span>{{ movie.vote_average.toFixed(1) }}</span>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.movie-card {
  flex-shrink: 0;
  position: relative;
  width: 160px;
  height: 252px;
  border-radius: 30px;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &__rating {
    width: 60px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(from var(--color-text) r g b / 0.15);
    backdrop-filter: blur(10px);
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
