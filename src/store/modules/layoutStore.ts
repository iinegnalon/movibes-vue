export default {
  namespaced: true,
  state: {
    loading: false,
    drawer: false,
  },
  getters: {
    loading: (state: LayoutState) => state.loading,
    drawer: (state: LayoutState) => state.drawer,
  },
  actions: {},
  mutations: {
    setLoading(state: LayoutState, value: boolean) {
      state.loading = value;
    },
    setDrawer(state: LayoutState, value: boolean) {
      state.drawer = value;
    },
  },
};

interface LayoutState {
  loading: boolean;
  drawer: boolean;
}
