export default {
  namespaced: true,
  state: {
    loading: false,
  },
  getters: {
    loading: (state: LayoutState) => state.loading,
  },
  actions: {},
  mutations: {
    setLoading(state: LayoutState, value: boolean) {
      state.loading = value;
    },
  },
};

interface LayoutState {
  loading: boolean;
}
