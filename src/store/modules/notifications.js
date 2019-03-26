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