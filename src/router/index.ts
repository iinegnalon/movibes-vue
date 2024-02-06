import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import MovieTypeView from '@/views/MovieTypeView.vue';
import MovieDetailsView from '@/views/MovieDetailsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    {
      path: '/movies',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'movies',
          component: MovieTypeView,
          props: { movieType: 'movies' },
        },
      ],
    },
    {
      path: '/tv-series',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'tv-series',
          component: MovieTypeView,
          props: { movieType: 'tv-series' },
        },
      ],
    },
    {
      path: '/upcoming',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'upcoming',
          component: MovieTypeView,
          props: { movieType: 'upcoming' },
        },
      ],
    },
    {
      path: '/trending',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'trending',
          component: MovieTypeView,
          props: { movieType: 'trending' },
        },
      ],
    },
    {
      path: '',
      component: AppLayout,
      props: {
        withCategories: false,
      },
      children: [
        {
          path: '/movies/:movieId',
          component: MovieDetailsView,
        },
      ],
    },
    {
      path: '',
      component: AppLayout,
      props: {
        withCategories: false,
      },
      children: [
        {
          path: '/tv-series/:movieId',
          component: MovieDetailsView,
        },
      ],
    },
    {
      path: '',
      component: AppLayout,
      props: {
        withCategories: false,
      },
      children: [
        {
          path: '/upcoming/:movieId',
          component: MovieDetailsView,
        },
      ],
    },
    {
      path: '',
      component: AppLayout,
      props: {
        withCategories: false,
      },
      children: [
        {
          path: '/trending/:movieId',
          component: MovieDetailsView,
        },
      ],
    },
  ],
});

export default router;
