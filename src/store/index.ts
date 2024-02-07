import { createStore } from 'vuex';
import layoutStore from '@/store/modules/layoutStore';

export const store = createStore({
  modules: {
    layoutStore,
  },
});
