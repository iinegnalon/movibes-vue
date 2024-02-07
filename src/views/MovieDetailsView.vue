<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, type Ref, ref } from 'vue';
import { getMovieDetails, getTVSeriesDetails } from '@/api';
import type { MovieDetails, TVSeriesDetails } from '@/models/movie';
import { formatCount, formatRundown } from '@/utils';

const props = defineProps<{
  movieType: string;
}>();

const router = useRouter();

const movieId = router.currentRoute.value.params.movieId.toString();

const movieDetails: Ref<MovieDetails | TVSeriesDetails | null> = ref(null);
const detailsLoading = ref(true);
const notificationSnackbar = ref({
  show: false,
  message: '',
  timeout: 2000,
  color: 'error',
});

onMounted(() => {
  getInfo();
});

async function getInfo() {
  detailsLoading.value = true;
  try {
    const response = await (props.movieType == 'movie'
      ? getMovieDetails(movieId)
      : getTVSeriesDetails(movieId));
    movieDetails.value = response.data;
    document.title = `Movibes • ${movieDetails.value.title ?? movieDetails.value.name}`;
  } catch (e) {
    notificationSnackbar.value.show = true;
    notificationSnackbar.value.message =
      'Something went wrong. Please try again later.';
  }
  detailsLoading.value = false;
}
</script>

<template>
  <div class="movie-details-page">
    <v-progress-circular
      indeterminate
      color="primary"
      v-if="detailsLoading"
    ></v-progress-circular>
    <div v-else-if="movieDetails">
      <div class="movie-rating-info">
        <v-icon size="30" class="movie-rating-info__icon" color="#e5b516">
          mdi-star
        </v-icon>
        <span class="movie-rating-info__rating">{{
          movieDetails.vote_average.toFixed(1)
        }}</span>
        <span class="movie-rating-info__count">
          | {{ formatCount(movieDetails.vote_count) }}</span
        >
      </div>
      <div class="movie-info">
        <h2 class="movie-info__title">
          <span>{{ movieDetails.title ?? movieDetails.name }}</span>
          <span>
            •
            {{
              new Date(
                movieDetails.release_date ?? movieDetails.first_air_date,
              ).getFullYear()
            }}</span
          >
          <span v-if="movieDetails.runtime || movieDetails.episode_run_time[0]">
            •
            {{
              formatRundown(
                movieDetails.runtime ?? movieDetails.episode_run_time[0],
              )
            }}</span
          >
        </h2>
        <div class="movie-info__categories">
          <div
            v-for="genre in movieDetails.genres"
            :key="genre.id"
            class="movie-category"
          >
            {{ genre.name }}
          </div>
        </div>
      </div>
      <p class="movie-description">
        {{ movieDetails.overview }}
      </p>

      <v-snackbar
        v-model="notificationSnackbar.show"
        :color="notificationSnackbar.color"
      >
        {{ notificationSnackbar.message }}
      </v-snackbar>
    </div>
    <p v-else>Can't load info about this movie.</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.movie-rating-info {
  margin-bottom: 20px;

  &__icon {
    margin-right: 8px;
    margin-bottom: 4px;
  }

  &__rating {
    font-size: 18px;
    font-weight: var(--medium);
  }

  &__count {
    font-size: 14px;
    color: var(--color-secondary);
    font-weight: var(--medium);
  }
}

.movie-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;

  &__title {
    font-size: 20px;
    font-weight: var(--medium);
  }

  &__categories {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}

.movie-category {
  padding: 2px 16px;
  color: rgb(from var(--color-text) r g b / 0.8);
  border: 1px rgb(from var(--color-text) r g b / 0.35) solid;
  border-radius: 15px;
}

.movie-description {
  font-size: 18px;
}

@media screen and (min-width: $desktop-breakpoint) {
  .movie-rating-info {
    margin-bottom: 30px;

    &__icon {
      margin-right: 10px;
      margin-bottom: 4px;
    }

    &__rating {
      font-size: 20px;
    }

    &__count {
      font-size: 16px;
    }
  }

  .movie-info {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-bottom: 25px;

    &__title {
      font-size: 23px;
    }

    &__categories {
      display: flex;
      gap: 12px;
      align-items: center;
    }
  }

  .movie-category {
    padding: 3px 18px;
  }

  .movie-description {
    font-size: 20px;
  }
}
</style>
