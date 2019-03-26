
import { Module, GetterTree, MutationTree } from 'vuex';
import { RootState } from '@/store';


const loader = {
  namespaced: true,
  state: {
    loading: 0,
  },
  getters: {
    getLoading(state){
      return state.loading;
    },
  },
  mutations: {
    START_LOADING(state) {
      state.loading++;
    },
    FINISH_LOADING(state) {
      state.loading--;
    }
  },
  actions: {
    startLoading({commit}) {
      commit('START_LOADING');
    },
    finishLoading({commit}) {
      commit('FINISH_LOADING');
    },
  }
};

export default loader;
