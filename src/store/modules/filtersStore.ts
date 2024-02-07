import type { MovieGenre } from '@/models/movie';

export default {
  namespaced: true,
  state: {
    selectedCategories: [],
    searchQuery: '',
  },
  getters: {
    selectedCategories: (state: FiltersState) => state.selectedCategories,
    searchQuery: (state: FiltersState) => state.searchQuery,
  },
  actions: {},
  mutations: {
    setSelectedCategories(state: FiltersState, value: MovieGenre[]) {
      state.selectedCategories = value;
    },
    setSearchQuery(state: FiltersState, value: string) {
      state.searchQuery = value;
    },
  },
};

interface FiltersState {
  selectedCategories: MovieGenre[];
  searchQuery: string;
}
