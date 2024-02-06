import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import MovieTypeView from '@/views/MovieTypeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      children: [
        {
          path: '',
          component: HomeView,
        },
      ],
    },
    {
      path: '/movies',
      name: 'movies',
      component: AppLayout,
      children: [
        {
          path: '',
          component: MovieTypeView,
          props: { movieType: 'movies' },
        },
      ],
    },
    {
      path: '/tv-series',
      name: 'tv-series',
      component: AppLayout,
      children: [
        {
          path: '',
          component: MovieTypeView,
          props: { movieType: 'tv-series' },
        },
      ],
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: AppLayout,
      children: [
        {
          path: '',
          component: MovieTypeView,
          props: { movieType: 'upcoming' },
        },
      ],
    },
    {
      path: '/trending',
      name: 'trending',
      component: AppLayout,
      children: [
        {
          path: '',
          component: MovieTypeView,
          props: { movieType: 'trending' },
        },
      ],
    },
  ],
});

export default router;
