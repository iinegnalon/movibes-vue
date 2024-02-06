<script setup lang="ts">
import { ref } from 'vue';

const genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Sci-Fi'];

const selectedGenres = ref([...genres]);

function uncheckAll() {
  selectedGenres.value = [];
}
</script>

<template>
  <div class="categories-filter">
    <div class="categories-header">
      <span class="categories-title">Categories</span>
      <v-btn class="uncheck-btn" variant="plain" @click="uncheckAll">
        <span class="uncheck-btn__text"> Uncheck all </span>
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
  background: rgb(from var(--color-secondary) r g b / 0.1);
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
