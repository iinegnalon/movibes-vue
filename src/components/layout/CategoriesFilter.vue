<script setup lang="ts">
import { computed, ref } from 'vue';

const genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Sci-Fi'];

const selectedGenres = ref([...genres]);

const allUnchecked = computed(() => {
  return selectedGenres.value.length === 0;
});

function handleCheckClick() {
  if (allUnchecked.value) {
    selectedGenres.value = [...genres];
    return;
  }

  selectedGenres.value = [];
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
      <div class="genre-item" v-for="(genre, index) in genres" :key="index">
        <v-checkbox
          class="checkbox-btn_primary"
          color="primary"
          hide-details
          v-model="selectedGenres"
          :value="genre"
        >
          <template #label>
            <span class="checkbox-label">
              {{ genre }}
            </span>
          </template>
        </v-checkbox>
        <v-divider
          thickness="2"
          v-if="index < genres.length - 1"
          class="genre-item__divider"
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
