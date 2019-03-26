const notifications = {
  namespaced: true,
  state: {
    notifications: []
  },
  getters: {
    getNotifications(state) {
      return state.notifications;
    }
  },
  actions: {
    addNotification({commit}, notification) {
      commit('SET_NOTIFICATION', notification);
      setTimeout(() => {
        commit('CLEAR_NOTIFICATION');
      }, 10000);
    }
  },
  mutations: {
    SET_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    },
    CLEAR_NOTIFICATION(state) {
      state.notifications.shift() ;
    }
  }
};

export default notifications;