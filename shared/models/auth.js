'use strict'

export default {
  state: { },
  reducers: {
    login: (state, payload) => ({ ...state, ...payload }),
    type: (state, type) => ({ ...state, type }),
    logout: (state) => ({ })
  },
  effects: {
    loginAsync (name, rootState) {
      const orgs = rootState.org.map((x) => x.title.toLowerCase())
      const volunteers = rootState.volunteer.map((x) => x.title.toLowerCase())
      const nameId = name.toLowerCase()
      let pos = volunteers.indexOf(nameId)
      if (pos !== -1) { return this.login({ name, type: 'volunteer', pos }) }
      pos = orgs.indexOf(nameId)
      if (pos !== -1) { return this.login({ name, type: 'org', pos }) }
      return this.login({ name })
    }
  }
}
