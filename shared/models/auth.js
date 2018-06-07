'use strict'

export default {
  state: { },
  reducers: {
    login: (state, payload) => ({ ...state, ...payload }),
    // give 15 hours by default to new volunteers
    type: (state, type) => ({ ...state, type, hours: !state.hours && type === 'volunteer' && 15 }),
    buy: (state, { estimate, i }) => ({
      ...state,
      hours: state.hours - estimate,
      items: [...state.items || [], i]
    }),
    logout: (state) => ({ })
  },
  effects: {
    loginAsync (name, rootState) {
      const orgs = rootState.org.map((x) => x.title.toLowerCase())
      const volunteers = rootState.volunteer.map((x) => x.title.toLowerCase())
      const nameId = name.toLowerCase()
      let pos = volunteers.indexOf(nameId)
      if (pos !== -1) {
        const hours = rootState.volunteer[pos].hours
        return this.login({ hours, name, type: 'volunteer', pos })
      }
      pos = orgs.indexOf(nameId)
      if (pos !== -1) { return this.login({ name, type: 'org', pos }) }
      return this.login({ name })
    }
  }
}
