<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue';
import { onMounted, ref } from 'vue';
import type { MovieListItem } from '@/models/movie';
import { getMoviesFunction } from '@/utils';

const props = defineProps<{
  listType: string;
  title: string;
  detailsPath: string;
  seeAllPath: string;
}>();

const emit = defineEmits(['trendingLoaded']);

const movies = ref<MovieListItem[]>([]);
const moviesLoading = ref(true);
const notificationSnackbar = ref({
  show: false,
  message: '',
  timeout: 2000,
  color: 'error',
});

onMounted(() => {
  getMovies();
});

async function getMovies() {
  moviesLoading.value = true;
  try {
    const response = await getMoviesFunction(props.listType, 1);
    movies.value = response.data.results;
    if (props.listType == 'trending') {
      emit('trendingLoaded', movies.value[0]);
    }
  } catch (e) {
    notificationSnackbar.value.show = true;
    notificationSnackbar.value.message =
      'Something went wrong. Please try again later.';
  }
  moviesLoading.value = false;
}
</script>

<template>
  <div class="movie-type-container">
    <div class="movie-type-container__header">
      <h2 class="movie-type-container__title">{{ title }}</h2>
      <v-btn variant="plain">
        <RouterLink :to="`/${seeAllPath}`">
          <span class="movie-type-container__btn">See all</span>
        </RouterLink>
      </v-btn>
    </div>
    <div v-if="moviesLoading" class="movie-type-list">
      <MovieCard v-for="index in 20" :key="index" loading />
    </div>
    <div v-else-if="movies && movies.length > 0" class="movie-type-list">
      <MovieCard
        :detailsPath="detailsPath"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <p v-else>Can't load movies.</p>
    <v-snackbar
      v-model="notificationSnackbar.show"
      :color="notificationSnackbar.color"
    >
      {{ notificationSnackbar.message }}
    </v-snackbar>
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
  padding-top: 5px;
}

@media screen and (min-width: $desktop-breakpoint) {
}
</style>
