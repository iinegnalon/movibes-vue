import { createStore } from 'vuex';
import layoutStore from '@/store/modules/layoutStore';
import filtersStore from '@/store/modules/filtersStore';

export const store = createStore({
  modules: {
    layoutStore,
    filtersStore,
  },
});
