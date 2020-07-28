const app = {
  state: {
    barEffect: {
      open: true,
    }
  },
  mutations: {
    TOGGLE_BAREFFECT: state => {
      state.barEffect.open = !state.barEffect.open
    }
  },
  actions: {
    ToggleBarEffect: ({ commit }) => {
      commit('TOGGLE_BAREFFECT')
    }
  }
}

export default app
