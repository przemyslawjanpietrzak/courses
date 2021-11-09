const fetch = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('42')
  }, 3000)
});
export const userNamespace = 'user';

export const userStoreModule = {
  actions: {
    async fetchUserData({ dispatch, commit,  }, payload) {
      commit('setIsLoading');
      const data = await fetch(payload);
      commit('setUserData', data);
      dispatch('log');

    },
    log() {

    }
  },
  getters: {
    isUserLoading : (state) => state.isLoading,
  },
  state: {
    data: null,
    isLoading: false,
    error: null
  },
  mutations: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    setUserData(state, payload) {
      state.data = payload;
    }
  },
  namespaced: true
};