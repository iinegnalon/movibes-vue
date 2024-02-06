<script setup lang="ts">
import { useRouter } from 'vue-router';
import { movies } from '@/utils';

const router = useRouter();

const movieId = router.currentRoute.value.params.movieId;
const movie = movies[0];
</script>

<template>
  <div class="movie-details-page">
    <div class="movie-rating-info">
      <v-icon size="30" class="movie-rating-info__icon" color="#e5b516">
        mdi-star
      </v-icon>
      <span class="movie-rating-info__rating">{{ movie.rating }}</span>
      <span class="movie-rating-info__count"> | 350k</span>
    </div>
    <div class="movie-info">
      <h2 class="movie-info__title">
        {{ movie.title }} • 2022 • PG-13 • 2h10m
      </h2>
      <div class="movie-info__categories">
        <div class="movie-category">Action</div>
        <div class="movie-category">Drama</div>
      </div>
    </div>
    <p class="movie-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut
      tristique et egestas quis ipsum. Sit amet tellus cras adipiscing enim eu
      turpis. Nunc eget lorem dolor sed. Eget egestas purus viverra accumsan.
      Tortor at risus viverra adipiscing at in tellus. Ut tellus elementum
      sagittis vitae et leo duis ut. Accumsan lacus vel facilisis volutpat est
      velit egestas. Ac placerat vestibulum lectus mauris. Gravida arcu ac
      tortor dignissim. Enim lobortis scelerisque fermentum dui faucibus. Amet
      commodo nulla facilisi nullam vehicula ipsum a arcu. Amet consectetur
      adipiscing elit ut aliquam purus sit amet.
    </p>
  </div>
</template>

<style scoped lang="scss">
.movie-rating-info {
  margin-bottom: 30px;

  &__icon {
    margin-right: 10px;
    margin-bottom: 4px;
  }

  &__rating {
    font-size: 20px;
    font-weight: var(--medium);
  }

  &__count {
    font-size: 16px;
    color: var(--color-secondary);
    font-weight: var(--medium);
  }
}

.movie-info {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 25px;

  &__title {
    font-size: 23px;
    font-weight: var(--medium);
  }

  &__categories {
    display: flex;
    gap: 12px;
    align-items: center;
  }
}

.movie-category {
  padding: 3px 18px;
  color: rgb(from var(--color-text) r g b / 0.8);
  border: 1px rgb(from var(--color-text) r g b / 0.35) solid;
  border-radius: 15px;
}

.movie-description {
  font-size: 20px;
}
</style>
