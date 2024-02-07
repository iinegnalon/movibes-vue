<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue';
import { onMounted, onUnmounted, type Ref, ref, watch } from 'vue';
import type { MovieListItem } from '@/models/movie';
import { useRouter } from 'vue-router';
import { getMoviesFunction } from '@/utils';
import { useStore } from 'vuex';

const props = defineProps<{
  listType: string;
  detailsPath: string;
}>();

const router = useRouter();

const store = useStore();

const moviesLoading = ref(true);
const notificationSnackbar = ref({
  show: false,
  message: '',
  timeout: 2000,
  color: 'error',
});
const movies: Ref<MovieListItem[]> = ref([]);
const currentPage = ref(1);
const scrollElement = ref<Element | null>(null);

onMounted(() => {
  getInfo();
  scrollElement.value = document.getElementsByClassName('main')[0];
  scrollElement.value?.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  scrollElement.value?.removeEventListener('scroll', handleScroll);
});

watch(router.currentRoute, () => {
  currentPage.value = 1;
  movies.value = [];
  getInfo();
});

async function getInfo() {
  moviesLoading.value = true;
  store.commit('layoutStore/setLoading', true);
  try {
    const response = await getMoviesFunction(props.listType, currentPage.value);
    movies.value = [...movies.value, ...response.data.results];
  } catch (e) {
    notificationSnackbar.value.show = true;
    notificationSnackbar.value.message =
      'Something went wrong. Please try again later.';
  }
  moviesLoading.value = false;
  store.commit('layoutStore/setLoading', false);
}

function handleScroll() {
  if (
    scrollElement.value &&
    scrollElement.value.scrollHeight - scrollElement.value.scrollTop <=
      scrollElement.value.clientHeight + 200 &&
    !moviesLoading.value
  ) {
    currentPage.value++;
    getInfo();
  }
}
</script>

<template>
  <div class="movie-type-page">
    <div v-if="movies && movies.length > 0" class="movies-grid">
      <MovieCard
        :listType="listType"
        :detailsPath="detailsPath"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <p v-else-if="!moviesLoading">Can't load movies.</p>
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
