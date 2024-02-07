<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { MovieGenre } from '@/models/movie';
import { useStore } from 'vuex';

const store = useStore();

const genres: MovieGenre[] = [
  {
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'Adventure',
  },
  {
    id: 3,
    name: 'Animated',
  },
  {
    id: 4,
    name: 'Comedy',
  },
  {
    id: 5,
    name: 'Crime',
  },
  {
    id: 6,
    name: 'Fantasy',
  },
];

const selectedGenres = ref([...genres]);

const allUnchecked = computed(() => {
  return selectedGenres.value.length === 0;
});

function handleCheckClick() {
  if (allUnchecked.value) {
    selectedGenres.value = [...genres];
  } else {
    selectedGenres.value = [];
  }

  handleFiltersChange();
}

function handleFiltersChange() {
  store.commit('filtersStore/setSelectedCategories', selectedGenres.value);
}
</script>

<template>
  <div class="categories-filter">
    <div class="categories-header">
      <span class="categories-title">Categories</span>
      <v-btn class="uncheck-btn" variant="plain" @click="handleCheckClick">
        <span class="uncheck-btn__text">
          {{ allUnchecked ? 'Check' : 'Uncheck' }} all
        </span>
      </v-btn>
    </div>

    <div class="genre-list">
      <div v-for="(genre, index) in genres" :key="index" class="genre-item">
        <v-checkbox
          v-model="selectedGenres"
          :value="genre"
          class="checkbox-btn_primary"
          color="primary"
          hide-details
          @update:model-value="handleFiltersChange"
        >
          <template #label>
            <span class="checkbox-label">
              {{ genre.name }}
            </span>
          </template>
        </v-checkbox>
        <v-divider
          v-if="index < genres.length - 1"
          class="genre-item__divider"
          thickness="2"
        ></v-divider>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.categories-filter {
  display: none;
  margin-right: 50px;
}

.categories-header {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.categories-title {
  font-size: 20px;
  font-weight: var(--medium);
}

.uncheck-btn {
  text-transform: none;
  color: var(--color-secondary);

  &__text {
    font-size: 14px;
    font-weight: var(--medium);
  }
}

.genre-list {
  width: 254px;
  padding: 5px 15px;
  border-radius: 30px;
  background: rgba(102, 102, 102, 0.1);
}

.checkbox-label {
  font-size: 15px;
  font-weight: var(--medium);
  color: var(--color-text);
}

@media screen and (min-width: $desktop-breakpoint) {
  .categories-filter {
    display: block;
  }
}
</style>
