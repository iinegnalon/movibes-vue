<script lang="ts" setup>
function play() {}
</script>

<template>
  <section class="movie-banner">
    <!--todo: real movie-->
    <v-img src="/images/banner.png" alt="Banner" class="movie-banner__image" />
    <div class="movie-banner__actions">
      <v-btn class="action-btn action-btn_play" @click="play">
        <div class="action-btn__content">
          <v-icon dark>mdi-play</v-icon>
          <span class="action-btn__text">Play</span>
        </div>
      </v-btn>
      <v-btn class="action-btn action-btn_info">
        <RouterLink to="/movie/movie1">
          <div class="action-btn__content">
            <v-icon>mdi-information</v-icon>
            <span class="action-btn__text">More Info</span>
          </div>
        </RouterLink>
      </v-btn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.movie-banner {
  position: relative;
  width: 100%;
  margin-bottom: 18px;

  &__image {
    width: 100%;
  }

  &__actions {
    height: 40px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    gap: 13px;
    align-items: center;
  }
}

.action-btn {
  height: 40px !important;
  padding: 6px 12px;
  border: none;
  border-radius: 15px;
  background: rgb(from var(--color-text) r g b / 0.1);
  backdrop-filter: blur(5px);
  text-transform: none;

  &__content {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__text {
    font-size: 16px;
    font-weight: var(--semi-bold);
  }
}

@media screen and (min-width: $desktop-breakpoint) {
  .movie-banner {
    margin-bottom: 37px;

    &__actions {
      height: 55px;
      bottom: 10px;
      right: 10px;
      gap: 26px;
    }
  }

  .action-btn {
    height: 55px !important;
    padding: 8px 16px;

    &__content {
      gap: 8px;
    }

    &__text {
      font-size: 20px;
    }
  }
}
</style>
