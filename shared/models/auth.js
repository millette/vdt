'use strict'

export default {
  state: { },
  reducers: {
    login: (state, name, type) => ({ ...state, name, type }),
    logout: (state) => ({ })
  },
  effects: {
    async loginAsync (name, rootState) {
      // console.log(rootState, typeof rootState)
      await new Promise(resolve => setTimeout(resolve, 200))
      const type = 'volunteer'
      return this.login(name, type)
    }
  }
}
