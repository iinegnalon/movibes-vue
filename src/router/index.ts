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
          name: '',
          component: HomeView,
          meta: {
            title: 'he',
          },
        },
      ],
    },
    {
      path: '/movies',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Movibes • Movies',
          component: MovieTypeView,
          props: { listType: 'movie', detailsPath: 'movies' },
          meta: {
            title: 'he',
          },
        },
      ],
    },
    {
      path: '/tv-series',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Movibes • TV-Series',
          component: MovieTypeView,
          props: { listType: 'tv', detailsPath: 'tv-series' },
        },
      ],
    },
    {
      path: '/upcoming',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Movibes • Upcoming',
          component: MovieTypeView,
          props: { listType: 'upcoming', detailsPath: 'movies' },
        },
      ],
    },
    {
      path: '/trending',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Movibes • Trending',
          component: MovieTypeView,
          props: { listType: 'trending' },
        },
      ],
    },
    {
      path: '/search',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Movibes • Search',
          component: MovieTypeView,
          props: { listType: 'search' },
        },
      ],
    },
    {
      path: '/movies/:movieId',
      component: AppLayout,
      props: {
        withCategories: false,
      },
      children: [
        {
          path: '',
          name: 'Movibes • Movie Details',
          component: MovieDetailsView,
          props: {
            movieType: 'movie',
          },
        },
      ],
    },
    {
      path: '/tv-series/:movieId',
      component: AppLayout,
      props: {
        withCategories: false,
      },
      children: [
        {
          path: '',
          name: 'Movibes • TV-Series Details',
          component: MovieDetailsView,
          props: {
            movieType: 'tv',
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name?.toString() || 'Movibes';
  next();
});

export default router;
